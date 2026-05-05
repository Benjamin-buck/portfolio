const Pulse = ({ className }: { className: string }) => (
  <div className={`animate-pulse rounded-full bg-gray-200 ${className}`} />
);

export default function ProjectLoading() {
  return (
    <div className="mx-4 md:mx-0 mb-16">
      {/* Back button */}
      <div className="mt-6 mb-5">
        <Pulse className="h-4 w-32" />
      </div>

      {/* Image gallery grid skeleton */}
      <div className="grid grid-cols-12 gap-2 h-[300px] lg:h-[500px] w-full">
        <div className="col-span-12 md:col-span-6 bg-gray-200 animate-pulse rounded-xl md:rounded-r-none md:rounded-l-xl" />
        <div className="col-span-6 hidden md:grid grid-cols-2 gap-2">
          <div className="bg-gray-200 animate-pulse" />
          <div className="bg-gray-200 animate-pulse rounded-tr-xl" />
          <div className="bg-gray-200 animate-pulse" />
          <div className="bg-gray-200 animate-pulse rounded-br-xl" />
        </div>
      </div>

      {/* Title row */}
      <div className="mt-6 flex items-center gap-3">
        <Pulse className="h-8 w-56" />
        <Pulse className="h-6 w-20 rounded-full" />
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 mt-4">
        <Pulse className="h-9 w-28 rounded-lg" />
        <Pulse className="h-9 w-28 rounded-lg" />
        <Pulse className="h-9 w-28 rounded-lg" />
      </div>

      {/* Main content */}
      <div className="mt-8 flex gap-8 max-md:flex-col">
        {/* Left — description + features */}
        <div className="flex-1 min-w-0 flex flex-col gap-3">
          <Pulse className="h-4 w-full" />
          <Pulse className="h-4 w-full" />
          <Pulse className="h-4 w-5/6" />
          <Pulse className="h-4 w-4/5" />

          <div className="mt-8">
            <Pulse className="h-6 w-28 mb-6" />

            {/* Feature blocks */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="mb-7 flex flex-col gap-2">
                <Pulse className="h-4 w-40 mb-1" />
                <Pulse className="h-3 w-full" />
                <Pulse className="h-3 w-5/6" />
                <Pulse className="h-3 w-4/5" />
              </div>
            ))}
          </div>
        </div>

        {/* Right — project details card */}
        <div className="w-full md:w-[260px] shrink-0">
          <div className="border border-gray-100 rounded-2xl p-5 shadow-sm bg-white flex flex-col gap-5">
            <Pulse className="h-5 w-36" />

            {/* Status */}
            <div className="flex flex-col gap-2">
              <Pulse className="h-3 w-16" />
              <Pulse className="h-6 w-20 rounded-full" />
            </div>

            {/* Timeline */}
            <div className="flex flex-col gap-2">
              <Pulse className="h-3 w-20" />
              <Pulse className="h-4 w-40" />
            </div>

            {/* Technologies */}
            <div className="flex flex-col gap-2">
              <Pulse className="h-3 w-24" />
              <div className="flex flex-wrap gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Pulse key={i} className="h-6 w-16 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
