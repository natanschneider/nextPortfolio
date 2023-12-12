import { pool } from "../../../../../db/db";

export default async function project() {
  const client = await pool.connect();

  const data = await client.query(
    "SELECT ID, NOME, STATUS FROM PROJECTS" 
  );
  const projects = data.rows;
  client.release();

  return (
    <div className="grid grid-cols-2 gap-1 select-none mt-2">
      {projects.map((item: any) => (
        <>
          <a
            className="truncate cursor-pointer"
            href={"/crud/project/create?id=" + item.id}>
            {item.nome}
          </a>
          <div>{item.status=='S'?"PUBLICADO":"RASCUNHO"}</div>
        </>
      ))}
      <a
        className="truncate cursor-pointer text-slate-300 bg-blue-600 rounded-md p-1.5 mt-2"
        href="/crud/project/create">
        Criar novo
      </a>
    </div>
  );
}
