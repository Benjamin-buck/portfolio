const Bar = ({ className }: { className: string }) => (
  <div className={`animate-pulse rounded-[3px] bg-ink/[0.07] ${className}`} />
);

export default function ProjectLoading() {
  return (
    <main className="shell pt-10 md:pt-16" aria-busy="true">
      <Bar className="h-3 w-24" />
      <Bar className="mt-8 h-24 w-3/4 md:h-32" />
      <div className="mt-10 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-7 space-y-3">
          <Bar className="h-5 w-full" />
          <Bar className="h-5 w-5/6" />
        </div>
        <div className="md:col-span-4 md:col-start-9 grid grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <Bar key={i} className="h-10" />
          ))}
        </div>
      </div>
      <Bar className="mt-16 aspect-[16/9] w-full rounded-[6px]" />
    </main>
  );
}
