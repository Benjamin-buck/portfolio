"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { lede, pad, projects, projectYear, type Project } from "@/lib/projects";

const FILTERS = ["All", "Current", "In Progress", "Done"] as const;
type Filter = (typeof FILTERS)[number];

const StatusDot = ({ status }: { status: string }) => (
  <span
    className={`inline-block h-1.5 w-1.5 rounded-full ${
      status === "Done" ? "bg-ink-3" : status === "In Progress" ? "bg-amber-500" : "bg-emerald-500"
    }`}
  />
);

/** Preview image that trails the cursor across the list (lerped, rAF). */
const useTrailingPreview = () => {
  const ref = useRef<HTMLDivElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const raf = useRef<number>();

  useEffect(() => {
    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.14;
      pos.current.y += (target.current.y - pos.current.y) * 0.14;
      const vx = target.current.x - pos.current.x;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) rotate(${Math.max(
          -6,
          Math.min(6, vx * 0.04)
        )}deg)`;
      }
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current!);
  }, []);

  const onMove = (e: React.MouseEvent) => {
    target.current = { x: e.clientX + 24, y: e.clientY - 110 };
  };
  const snap = (e: React.MouseEvent) => {
    onMove(e);
    pos.current = { ...target.current };
  };
  return { ref, onMove, snap };
};

const Portfolio = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const [view, setView] = useState<"List" | "Grid">("List");
  const [hover, setHover] = useState<Project | null>(null);
  const preview = useTrailingPreview();

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: projects.length };
    projects.forEach((p) => (c[p.status] = (c[p.status] ?? 0) + 1));
    return c;
  }, []);

  const shown = filter === "All" ? projects : projects.filter((p) => p.status === filter);

  return (
    <main className="shell pt-12 md:pt-20">
      <header className="grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="eyebrow mb-4 fade-up">Index · {pad(projects.length)} projects</p>
          <h1 className="display text-[clamp(56px,10vw,152px)]">
            <span className="block overflow-hidden">
              <span className="word-in">Work</span>
            </span>
          </h1>
        </div>
        <p className="md:col-span-4 text-ink-2 leading-relaxed fade-up" style={{ "--d": "300ms" } as React.CSSProperties}>
          Product design and front-end work for clients, employers and my own products, from enterprise healthcare to
          a live SaaS for bands.
        </p>
      </header>

      {/* Controls */}
      <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
        <div role="tablist" aria-label="Filter by status" className="flex flex-wrap gap-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              aria-selected={filter === f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 ${
                filter === f ? "bg-ink text-paper" : "text-ink-2 hover:text-ink hover:bg-ink/[0.05]"
              }`}
            >
              {f}
              <sup className="ml-1 font-mono text-[10px] opacity-60">{counts[f] ?? 0}</sup>
            </button>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-1 font-mono text-xs" aria-label="Layout">
          {(["List", "Grid"] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              aria-pressed={view === v}
              className={`px-2 py-1 uppercase tracking-[0.12em] transition-colors ${
                view === v ? "text-ink" : "text-ink-3 hover:text-ink"
              }`}
            >
              {view === v ? "●" : "○"} {v}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      {view === "List" && (
        <ul key={filter} onMouseLeave={() => setHover(null)} onMouseMove={preview.onMove} className="relative">
          {shown.map((p, i) => (
            <li
              key={p.id}
              className="fade-up border-b border-line"
              style={{ "--d": `${i * 40}ms` } as React.CSSProperties}
              onMouseEnter={(e) => {
                if (!hover) preview.snap(e);
                setHover(p);
              }}
            >
              <Link
                href={`/portfolio/${p.id}`}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-1 py-6 md:grid-cols-12 md:gap-6 md:py-7"
              >
                <span className="eyebrow md:col-span-1 tabular-nums">{pad(i + 1)}</span>
                <span className="md:col-span-6 min-w-0">
                  <span className="display block text-3xl md:text-5xl transition-[transform,color] duration-500 ease-out md:group-hover:translate-x-4 group-hover:text-accent">
                    {p.title}
                  </span>
                </span>
                <span className="relative h-14 w-20 overflow-hidden rounded-[4px] ring-1 ring-line md:hidden">
                  <Image src={p.thumbnail} alt="" fill sizes="80px" className="object-cover object-top" />
                </span>
                <span className="col-span-2 col-start-2 md:col-span-3 md:col-start-auto flex items-center gap-3 text-sm text-ink-2">
                  <StatusDot status={p.status} />
                  {p.status}
                  {p.isPasswordProtected && <span className="eyebrow">· Private</span>}
                </span>
                <span className="hidden md:flex md:col-span-2 items-center justify-end gap-4">
                  <span className="eyebrow tabular-nums">{projectYear(p) ?? "—"}</span>
                  <span
                    aria-hidden
                    className="grid h-9 w-9 place-items-center rounded-full border border-line transition-all duration-500 ease-out group-hover:border-ink group-hover:bg-ink group-hover:text-paper group-hover:-rotate-45"
                  >
                    →
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Grid */}
      {view === "Grid" && (
        <div key={filter} className="mt-10 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {shown.map((p, i) => (
            <Link
              key={p.id}
              href={`/portfolio/${p.id}`}
              className="group fade-up block"
              style={{ "--d": `${i * 60}ms` } as React.CSSProperties}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[6px] bg-surface ring-1 ring-line">
                <Image
                  src={p.thumbnail}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h2 className="display text-3xl md:text-4xl group-hover:text-accent transition-colors duration-300">
                  {p.title}
                </h2>
                <span className="eyebrow flex items-center gap-2 shrink-0">
                  <StatusDot status={p.status} /> {p.status}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-2 line-clamp-2">{lede(p)}</p>
            </Link>
          ))}
        </div>
      )}

      {shown.length === 0 && <p className="py-20 text-center text-ink-3">Nothing here yet.</p>}

      {/* Cursor-trailing preview (list view, pointer devices) */}
      <div
        ref={preview.ref}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-30 hidden md:block"
      >
        <div
          className={`relative h-[200px] w-[320px] overflow-hidden rounded-[6px] bg-surface shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] ring-1 ring-line transition-[opacity,transform] duration-500 ease-out ${
            hover && view === "List" ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          {projects.map((p) => (
            <Image
              key={p.id}
              src={p.thumbnail}
              alt=""
              fill
              sizes="320px"
              className={`object-cover object-top transition-opacity duration-300 ${
                hover?.id === p.id ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
