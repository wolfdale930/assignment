import pg, { Pool } from 'pg';
import { Config } from './config';

export class DB {
    static pool: Pool;

    static init() {
        DB.pool = new Pool({
            user: Config.PG_USER,
            host: Config.PG_HOST,
            database: Config.PG_DATABASE,
            password: Config.PG_PASS,
            port: Config.PG_PORT
        });
        return DB.pool;
    }
}