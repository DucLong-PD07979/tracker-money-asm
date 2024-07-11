import dotenv from 'dotenv';
dotenv.config();

export const PORT_SERVER = process.env.PORT;
export const URL_DATABASE: string | undefined = process.env.URL_DATABASE;
