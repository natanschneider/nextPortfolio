import Link from "next/link";

export default function BlogItem({ id, titulo, data, author, resume }: any) {
  return (
    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-blue-300 w-full">
      <h3 className="text-xl font-semibold tracki">{titulo}</h3>
      <div className="flex flex-row gap-6">
        <time className="text-xs text-stone-300">{data}</time>
        <p className="text-xs text-stone-300">Escrito por: {author}</p>
      </div>
      <p className="mt-3">{resume}</p>
      <div className="mt-3">
        <Link href={'/post/'+id} className="text-blue-300 underline decoration-blue-300">Read more.</Link>
      </div>
    </div>
  );
}
