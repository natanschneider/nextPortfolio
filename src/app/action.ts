"use server"
import { pool } from "../../db/db"

export default async function insertPost(data:FormData){
    const client = await pool.connect();
    try{
        const com = "INSERT INTO PUBLIC.POST (TITLE, RESUME, CONTENT, PUBLISHED, AUTHOR, CREATED_AT) VALUES ($1, $2, $3, true, $4, NOW())";
        const param:any = [ data.get('title') , data.get('resume') , data.get('content') , data.get('author') ];

        await client.query(com, param);

        await client.query('COMMIT');

        console.log('SUCESSO')
        return 'success'
    }catch(e){
        await client.query('ROLLBACK');
        console.error('error' + e)
        return 'error'
    }
}