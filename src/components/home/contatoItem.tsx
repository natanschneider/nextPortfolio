export default function ContatoItem({ nome, description, address, icon }: any) {
  return (
    <div className="mb-12 grow-0 shrink-0 basis-auto w-full lg:w-6/12 px-3 lg:px-6 md:mr-16">
      <a href={address} target="_blank" rel="noopener noreferrer">
        <div className="flex items-start">
          <div className="shrink-0">
            <div
              className="p-4 bg-blue-600 rounded-md shadow-md w-14 h-14 flex items-center justify-center"
              dangerouslySetInnerHTML={{ __html: icon }}></div>
          </div>
          <div className="grow ml-6">
            <p className="font-bold mb-1">{nome}</p>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
