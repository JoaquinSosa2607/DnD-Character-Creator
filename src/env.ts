import dotenv from 'dotenv';
dotenv.config();

export const DB_HOST: string | undefined = process.env.DB_HOST;
export const DB_USER: string | undefined = process.env.DB_USER;
export const MYSQL_PASSW: string | undefined = process.env.MYSQL_PASSW;
export const DB_NAME: string | undefined = process.env.DB_NAME;
export const PORT: number = Number(process.env.PORT) || 3000;