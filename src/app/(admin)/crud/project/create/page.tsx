import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { pool } from "../../../../../../db/db";

export default async function projectCreate({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  if (searchParams?.id) {
    const client = await pool.connect();

    const data = await client.query("SELECT * FROM PROJECTS WHERE ID = $1", [
      searchParams?.id,
    ]);
    const project = data.rows;
    client.release();
  }
  return (
    <form className="p-6">
      <div className="space-y-12">
        <div className="border-b border-gray-300/10 pb-6">
          <h2 className="text-base font-semibold leading-7 text-stone-300">
            Projeto
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="nome"
                className="block text-sm font-medium leading-6 text-stone-300">
                Nome
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="nome"
                    id="nome"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-stone-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="URL"
                className="block text-sm font-medium leading-6 text-stone-300">
                URL
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="URL"
                    id="URL"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-stone-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="repo"
                className="block text-sm font-medium leading-6 text-stone-300">
                Repo
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="repo"
                    id="repo"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-stone-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="stack"
                className="block text-sm font-medium leading-6 text-stone-300">
                Stack
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <input
                    type="text"
                    name="stack"
                    id="stack"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-stone-300 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full sm:col-span-6">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-stone-300">
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border-2 border-dashed border-gray-300/25 px-6 py-8">
                <div className="text-center">
                  <PhotoIcon
                    className="mx-auto h-12 w-12 text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="mt-4 flex text-sm leading-6 text-gray-300">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 p-0.5">
                      <span>Envie um arquivo</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">ou arraste e solte</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-300">
                    PNG, JPG, JPEG de até 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <a
          type="button"
          className="text-sm font-semibold leading-6 text-stone-300 cursor-pointer"
          href="/crud/project">
          Cancel
        </a>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Save
        </button>
      </div>
    </form>
  );
}
