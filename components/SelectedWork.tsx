import Image from "next/image";
import Link from "next/link";
import { lede, pad, projects, projectYear, type Project } from "@/lib/projects";
import Reveal from "./motion/Reveal";

const FEATURED = [9000, 9, 7302611, 5118420];

const roleFor = (p: Project) =>
  p.isPasswordProtected ? "Product design · Team lead" : "Design · Engineering";

const SelectedWork = () => {
  const featured = FEATURED.map((id) => projects.find((p) => p.id === id)).filter(Boolean) as Project[];

  return (
    <section className="shell mt-36 md:mt-48" aria-labelledby="work-heading">
      <div className="flex items-end justify-between gap-6 border-b border-line pb-6">
        <div>
          <p className="eyebrow mb-3">Selected work · {pad(featured.length)}</p>
          <Reveal as="h2" id="work-heading" variant="mask" className="display text-5xl md:text-7xl" lines={["Recent products"]} />
        </div>
        <Link href="/portfolio" className="link-draw text-sm text-ink-2 hover:text-ink whitespace-nowrap">
          All {projects.length} projects →
        </Link>
      </div>

      <div className="mt-12 flex flex-col gap-24 md:gap-36">
        {featured.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <article key={p.id} className="group grid items-center gap-8 md:grid-cols-12 md:gap-10">
              <Link
                href={`/portfolio/${p.id}`}
                className={`relative block md:col-span-7 ${flip ? "md:order-2 md:col-start-6" : ""}`}
                aria-label={`${p.title} case study`}
              >
                <Reveal variant="wipe" className="relative aspect-[16/10] overflow-hidden rounded-[6px] bg-surface ring-1 ring-line">
                  <div className="absolute inset-0">
                    <Image
                      src={p.thumbnail}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, 58vw"
                      className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.035]"
                    />
                  </div>
                </Reveal>
                <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-90 rounded-full bg-ink px-5 py-2.5 text-sm text-paper opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100">
                  {p.isPasswordProtected ? "View case study · Private" : "View case study"}
                </span>
              </Link>

              <div className={`md:col-span-5 ${flip ? "md:order-1 md:col-start-1 md:row-start-1" : ""}`}>
                <Reveal delay={120}>
                  <p className="eyebrow mb-5 flex items-center gap-3">
                    <span className="text-ink">{pad(i + 1)}</span>
                    <span className="h-px w-8 bg-line" />
                    {roleFor(p)}
                    {projectYear(p) && <span>· {projectYear(p)}</span>}
                  </p>
                  <h3 className="display text-4xl md:text-6xl">
                    <Link href={`/portfolio/${p.id}`} className="transition-colors duration-300 hover:text-accent">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="mt-5 max-w-md leading-relaxed text-ink-2">{lede(p)}</p>
                  <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-ink-3">
                    {p.projectDetails.technology.slice(0, 5).map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default SelectedWork;
