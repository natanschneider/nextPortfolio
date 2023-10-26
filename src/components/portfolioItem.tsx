import Image from "next/image";

export default function PortfolioItem({
  title,
  imgUrl,
  stack,
  link,
  repository,
}: any) {
  return (
    <div className="border-2 border-white rounded-md overflow-hidden">
      <a href={link} target="_blank" rel="noopener noreferrer" className="border-white border-b-2">
        <div className="h-36 md:h-48 object-cover cursor-pointer w-96" />
        <div className="w-full p-4">
          <h3 className="text-lg md:text-xl text-white mb-2 md:mb-3 font-semibold ">
            {title}
          </h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm text-white ">
            <span className="inline-block px-2 py-1 font-semibold border-2 border-white rounded-md">
              {stack}
            </span>
          </p>
        </div>
      </a>
      <a href={repository} target="_blank" rel="noopener noreferrer">
        <div className="w-full flex justify-center border-t-2 border-white py-2">
          <p className="text-bold text-lg md:text-xl text-white">
            Repository
          </p>
        </div>
      </a>
    </div>
  );
}
