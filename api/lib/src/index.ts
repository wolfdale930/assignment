import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { Config } from './config';
import { DB } from './db';
import { Routes } from './routes';

dotenv.config();

const app: Express = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var corsOptions = {
    origin: Config.FRONTEND_URL,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
app.use(cors(corsOptions));

DB.init().connect().then(() => {
    Routes.init(app);
    app.listen(Config.EXPRESS_SERVER_PORT, () => {
        console.log(`Express server started at ${Config.EXPRESS_SERVER_PORT}`);
    });
}).catch(() => {
    console.log(`Could not connect to database. Please check connection values!`);
    process.exit(0);
});