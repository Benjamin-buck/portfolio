const Bar = ({ className }: { className: string }) => (
  <div className={`animate-pulse rounded-[3px] bg-ink/[0.07] ${className}`} />
);

export default function PortfolioLoading() {
  return (
    <main className="shell pt-12 md:pt-20" aria-busy="true">
      <Bar className="h-3 w-32 mb-6" />
      <Bar className="h-24 w-72 md:h-36 md:w-[28rem]" />
      <div className="mt-14 border-b border-line pb-4 flex gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Bar key={i} className="h-8 w-20 rounded-full" />
        ))}
      </div>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex items-center gap-6 border-b border-line py-8">
          <Bar className="h-3 w-6" />
          <Bar className="h-10 flex-1 max-w-md" />
        </div>
      ))}
    </main>
  );
}
