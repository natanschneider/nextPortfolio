import { Pool } from 'pg';

const env = process.env.NODE_ENV
const connectionString = env=='development'?process.env.PG_URL_DEVEL:process.env.PG_URL

export const pool = new Pool({
    connectionString: connectionString,
    ssl: true
})