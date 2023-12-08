import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <Image src={"/404-image.png"} alt={"Page not found"} width={400} height={400} priority />

        <h1 className="text-4x1 md:text-7x1 text-white mb-1 md:mb-3 font-semibold text-xl">
          Pagina não encontrada
        </h1>
        <p className="text-base md:text-x1 mb-3 font-medium">
          Algo deu errado, parece que este conteúdo não existe.
        </p>
        
        <Link href={'/'}>Me leve de volta</Link>

      </div>
  );
}