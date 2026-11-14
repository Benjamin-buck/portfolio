import Link from "next/link";
import { experience } from "@/constants/resume";
import Reveal from "./motion/Reveal";

const rows = [
  ...experience.map((job) => ({
    org: job.employer,
    role: job.roles[0].title,
    when: job.duration.replace(/\d{2}\//g, "").replace("–", "—"),
  })),
];

const Experience = () => (
  <section className="shell mt-36 md:mt-48" aria-labelledby="exp-heading">
    <div className="flex items-end justify-between gap-6">
      <div>
        <p className="eyebrow mb-3">Experience</p>
        <Reveal as="h2" id="exp-heading" variant="mask" className="display text-5xl md:text-7xl" lines={["Where I've worked"]} />
      </div>
      <Link href="/resume" className="link-draw text-sm text-ink-2 hover:text-ink whitespace-nowrap">
        Full résumé →
      </Link>
    </div>

    <ul className="mt-12 border-t border-line">
      {rows.map((r, i) => (
        <Reveal as="li" key={r.org} delay={i * 100} className="group relative border-b border-line">
          <div className="relative z-10 grid gap-2 py-7 md:grid-cols-12 md:items-baseline md:gap-6">
            <p className="display text-3xl md:col-span-5 md:text-4xl transition-transform duration-500 ease-out md:group-hover:translate-x-3">
              {r.org}
            </p>
            <p className="text-ink-2 md:col-span-5">{r.role}</p>
            <p className="eyebrow md:col-span-2 md:text-right tabular-nums">{r.when}</p>
          </div>
          <span aria-hidden className="absolute inset-x-0 bottom-0 h-0 bg-ink/[0.035] transition-[height] duration-500 ease-out group-hover:h-full" />
        </Reveal>
      ))}
    </ul>
  </section>
);

export default Experience;
