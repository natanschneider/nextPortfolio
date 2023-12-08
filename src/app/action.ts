"use server"
import { pool } from "../../db/db"

export async function insertPost(data:FormData, publicado:Boolean){
    console.log('inicio insert')
    const client = await pool.connect();
    try{
        const com = "INSERT INTO PUBLIC.POST (TITLE, RESUME, CONTENT, PUBLISHED, AUTHOR, CREATED_AT) VALUES ($1, $2, $3, $4, $5, NOW())";
        const param:any = [ data.get('title') , data.get('resume') , data.get('content') , publicado , data.get('author') ];

        await client.query(com, param);

        await client.query('COMMIT');

        console.log('CRIADO')
        return 'success'
    }catch(e){
        await client.query('ROLLBACK');
        console.error('error' + e)
        return 'error'
    }
}

export async function getPost(id:Number){
    const client = await pool.connect();

    const res = await client.query(
        "SELECT ID, TITLE, RESUME, CONTENT, AUTHOR, TO_CHAR(CREATED_AT, 'DD/MM/YYYY') AS CREATED_AT, PUBLISHED FROM POST WHERE ID = $1",
        [id]
    );
    const post = res.rows[0];
    client.release();

    return post
}

export async function updatePost(data:FormData, publicado:Boolean){
    console.log('inicio update')
    const client = await pool.connect();
    try{
        const com = " UPDATE POST SET TITLE = $1, RESUME = $2, CONTENT = $3, PUBLISHED = $4, AUTHOR = $5, CREATED_AT = NOW() WHERE ID = $6 ";
        const param:any = [ data.get('title') , data.get('resume') , data.get('content') , publicado , data.get('author') , data.get('id') ];

        await client.query(com, param);

        await client.query('COMMIT');

        console.log('ATUALIZADO')
        return 'success'
    }catch(e){
        await client.query('ROLLBACK');
        console.error('error' + e)
        return 'error'
    }
}