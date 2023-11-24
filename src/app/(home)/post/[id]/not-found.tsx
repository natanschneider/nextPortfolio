import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1 className="text-4x1 md:text-7x1 text-white mb-1 md:mb-3 font-bold text-2xl">
          404 - NOT FOUND
        </h1>
        <p className="text-base md:text-x1 mb-3 font-medium">
          Algo deu errado, parece que este conteúdo não existe.
        </p>
        
        <Link href={'/'}>Me leve de volta</Link>

      </div>
  );
}
  