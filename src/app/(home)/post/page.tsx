import BlogItem from "@/components/home/blogItem";
import { pool } from "../../../../db/db";

export default async function Page() {
    const client = await pool.connect();

    const data = await client.query(
        "SELECT ID, TITLE, RESUME, CONTENT, AUTHOR, TO_CHAR(CREATED_AT, 'DD/MM/YYYY') AS CREATED_AT FROM POST WHERE PUBLISHED = true"
    );
    const posts = data.rows;
    client.release();

  return (
    <div className="w-full">
    <div className="py-12 mx-auto flex content-center">
      <div className="grid gap-4 mx-4 sm:grid-cols-12">
        <div className="col-span-12 px-4 space-y-6 sm:col-span-9">
          <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
            {posts.map((item: any) => (
              <BlogItem
                key={item.id}
                id={item.id}
                titulo={item.title}
                data={item.created_at}
                author={item.author}
                resume={item.resume}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
