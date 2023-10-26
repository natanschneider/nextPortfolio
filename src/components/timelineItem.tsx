export default function TimelineItem({ year, title, duration, details }: any) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-700">
      <li className="mb-10 ml-4">
        <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-stone-900 bg-white rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="my-1 text-sm font-normal leading-none text-stone-500">
            {duration}
          </p>
        </div>
        <p className="my-2 text-base font-normal text-stone-400">{details}</p>
      </li>
    </ol>
  );
}
