import { notFound } from "next/navigation";
import { pool } from "../../../../../db/db";

export default async function Page({ params }: { params: { id: String } }) {
  const client = await pool.connect();

  let data = await client.query(
    "SELECT TITLE, CONTENT, AUTHOR, TO_CHAR(CREATED_AT, 'DD/MM/YYYY') AS CREATED_AT FROM POST WHERE ID = $1 AND PUBLISHED = true",
    [params.id]
  );
  const post = data.rows[0];

  client.release();

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <div className="w-full md:mx-auto md:max-w-3xl lg:max-w-4xl lg:pb-28 lg:pt-16">
        <div className="mx-auto prose prose-slate prose-invert max-w-prose lg:text-lg">
          <h1>{post.title}</h1>
          <div className="text-sm gap-3">
            <p>Escrito por: {post.author}</p>
            <p>{post.created_at}</p>
          </div>
        </div>
        <article
          dangerouslySetInnerHTML={{ __html: post.content }}
          className="prose prose-stone prose-invert mx-auto mt-8 lg:prose-lg"
        />
      </div>
    </div>
  );
}
