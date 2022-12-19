import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';
import { DB } from "../db";
import { QueryResult } from "pg";
import { Config } from "../config";

export class AuthController {

    static async loginUser(req: Request, res: Response, next: NextFunction) {
        const { usernameEmail, password } = req.body;
        if (usernameEmail == null  || password == null) {
            res.status(400).send({
                status: false,
                message: 'Invalid credentails'
            });
            return;
        }
        try {
            const queryResult: QueryResult | void = await DB.pool.query(`Select * from users where usernameemail = $1`, [usernameEmail]).catch((error: Error) => {
                throw Error('Error when fetching user');
            });
            if (queryResult && queryResult.rowCount > 0) {
                const passHash = queryResult.rows[0].password;
                const samePass = await bcrypt.compare(password, passHash);
                if (samePass) {
                    res.status(200).send({
                        status: true,
                        usernameEmail: usernameEmail,
                        password: passHash
                    });
                    return;
                }
                else {
                    res.status(400).send({
                        status: false,
                        message: 'Invalid password'
                    });
                    return;
                }
            }
            res.status(400).send({
                status: false,
                message: 'User not found'
            });
        } catch (error) {
            res.status(500).send(error);
        }
    }

    static async registerUser(req: Request, res: Response, next: NextFunction) {
        const { usernameEmail, password } = req.body;
        if (usernameEmail == null  || password == null) {
            res.status(400).send({
                status: false,
                message: 'Invalid credentails'
            });
            return;
        }
        try {
            const queryResult: QueryResult | void = await DB.pool.query(`Select * from users where usernameemail = $1`, [usernameEmail]).catch((error: Error) => {
                throw Error('Error when fetching user');
            });
            if (queryResult && queryResult.rowCount > 0) {
                res.status(400).send({
                    status: false,
                    message: 'User already exists'
                });
                return;
            }
            bcrypt.genSalt(Config.PASSWORD_SALT_ROUND, function(err, salt) {
                bcrypt.hash(password, salt, async function(err, hash) {
                    const queryResult : QueryResult | void = await DB.pool.query(`insert into users (usernameemail, password, salt) values($1, $2, $3) returning *`, [usernameEmail, hash, salt]);
                    if (queryResult && queryResult.rowCount > 0) {
                        res.status(200).send({
                            status: true,
                            usernameEmail: usernameEmail,
                            password: hash
                        });
                        return;
                    }
                    res.status(500).send({
                        status: false,
                        message: 'Unable to add user'
                    });
                    return;
                });
            });
        } catch (error) {
            res.status(500).send(error);
        }
    }
}