import dotenv from 'dotenv';
dotenv.config({ path: `.env.test`, override: true });

export const PORT_SERVER = process.env.PORT;
export const URL_DATABASE = process.env.URL_DATABASE;
export const CLIENT_ID_GOOGLE = process.env.CLIENT_ID_GOOGLE;
export const CLIENT_SECRET_GOOGLE = process.env.CLIENT_SECRET_GOOGLE;

export const TOKEN_KEY = process.env.TOKEN_KEY;
export const REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY;
export const CLIENT_URL = process.env.CLIENT_URL;

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
