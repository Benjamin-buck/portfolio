const CardSkeleton = () => (
  <div className="col-span-12 lg:col-span-4 xl:col-span-3 rounded-xl overflow-hidden border border-gray-100 bg-white flex flex-col">
    {/* Image placeholder */}
    <div className="h-[200px] bg-gray-200 animate-pulse" />

    {/* Body */}
    <div className="flex flex-col flex-1 px-4 py-3 gap-2">
      {/* Title */}
      <div className="h-4 w-3/4 bg-gray-200 animate-pulse rounded-full" />
      {/* Description lines */}
      <div className="h-3 w-full bg-gray-100 animate-pulse rounded-full" />
      <div className="h-3 w-5/6 bg-gray-100 animate-pulse rounded-full" />

      {/* Tech pills */}
      <div className="flex gap-1.5 mt-2">
        <div className="h-5 w-14 bg-gray-100 animate-pulse rounded-full" />
        <div className="h-5 w-16 bg-gray-100 animate-pulse rounded-full" />
        <div className="h-5 w-12 bg-gray-100 animate-pulse rounded-full" />
      </div>

      {/* Button */}
      <div className="h-8 w-full bg-gray-200 animate-pulse rounded-lg mt-1" />
    </div>
  </div>
);

export default function PortfolioLoading() {
  return (
    <main className="mb-12">
      {/* Maintenance notice skeleton */}
      <div className="mt-8 mx-8 md:mx-0 border border-gray-100 rounded-lg mb-8 bg-gray-50 px-5 py-3 flex gap-3 items-start">
        <div className="w-4 h-4 mt-0.5 bg-gray-200 animate-pulse rounded" />
        <div className="flex flex-col gap-1.5 flex-1">
          <div className="h-3 w-32 bg-gray-200 animate-pulse rounded-full" />
          <div className="h-3 w-64 bg-gray-100 animate-pulse rounded-full" />
        </div>
      </div>

      {/* Header skeleton */}
      <div className="flex justify-between items-end mb-2 max-sm:mx-8">
        <div className="flex flex-col gap-2">
          <div className="h-8 w-48 bg-gray-200 animate-pulse rounded-full" />
          <div className="h-3 w-64 bg-gray-100 animate-pulse rounded-full" />
        </div>
        <div className="h-9 w-36 bg-gray-100 animate-pulse rounded-lg hidden lg:block" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-12 gap-5 mt-6 mx-8 md:mx-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </main>
  );
}
