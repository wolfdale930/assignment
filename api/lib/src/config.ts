import dotenv from 'dotenv';

dotenv.config();

export class Config {
    public static FRONTEND_URL: string = process.env.FRONTEND_URL || 'http://192.168.1.110:4200';
    public static EXPRESS_SERVER_PORT: string = process.env.EXPRESS_SERVER_PORT || '9090';
    public static PG_USER: string = process.env.PG_USER || 'postgres';
    public static PG_HOST: string = process.env.PG_HOST || 'localhost';
    public static PG_DATABASE: string = process.env.PG_DATABASE || 'postgres';
    public static PG_PASS: string = process.env.PG_PASS || 'anypass';
    public static PG_PORT: number = parseInt(process.env.PG_PORT ? process.env.PG_PORT : '5432') || 5432;
    public static PASSWORD_SALT_ROUND: number = parseInt(process.env.PASSWORD_SALT_ROUND ? process.env.PASSWORD_SALT_ROUND : '10') || 10;
}