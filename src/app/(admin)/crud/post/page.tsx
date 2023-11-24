import { pool } from "../../../../../db/db";

export default async function Page() {
  const client = await pool.connect();

  const data = await client.query(
    "SELECT ID, TITLE, RESUME, AUTHOR, TO_CHAR(CREATED_AT, 'DD/MM/YYYY') AS CREATED_AT, PUBLISHED FROM POST"
  );
  const posts = data.rows;
  client.release();

  return (
    <div className="grid grid-cols-4 gap-1 select-none mt-2">
      {posts.map((item: any) => (
        <>
            <a className="truncate cursor-pointer" href={'/crud/post/create?id='+item.id} >{item.title}</a>
            <div>{item.author}</div>
            <div>{item.created_at}</div>
            <div>{item.published?'PUBLICADO':'RASCUNHO'}</div>
        </>
      ))}
    </div>
  );
}
