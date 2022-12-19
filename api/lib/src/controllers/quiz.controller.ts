import { NextFunction, Request, Response } from "express";
import { DB } from "../db";
import { QueryResult } from "pg";

export class QuizController {

    static async getQuestions(req: Request, res: Response, next: NextFunction) {
        try {
            const queryResult: QueryResult | void = await DB.pool.query(`Select id, question, option1, option2, option3, option4 from question_bank`).catch((error: Error) => {
                throw Error('Error when fetching questions');
            });
            if (queryResult && queryResult.rowCount > 0) {
                res.status(200).send(queryResult.rows);
                return;
            }
            else {
                res.status(404).send([]);
            }

        } catch (error) {
            res.status(500).send(error);
        }
    }

    static async checkAnswers(req: Request, res: Response, next: NextFunction) {
        try {
            const userAnswers: { id: number, question: string, option1: string, option2: string, option3: string, option4: string, selectedAnswer:string, marks: number, correctAnswer: string }[] = req.body;

            const queryResult: QueryResult | void = await DB.pool.query(`Select id, answer from question_bank`).catch((error: Error) => {
                throw Error('Error when fetching questions');
            });
            if (!queryResult || queryResult.rowCount <=0) {
                res.status(404).send([]);
                return;
            }
            let mapped: any = {};
            queryResult.rows.forEach((row) => {
                mapped[row.id] = row.answer;
            });

            for (const iterator of userAnswers) {
                iterator.marks = iterator.selectedAnswer === mapped[iterator.id] ? 1 : 0;
                iterator.correctAnswer = mapped[iterator.id];
            }

            res.status(200).send(userAnswers);

        } catch (error) {
            res.status(500).send(error);
        }
    }

}