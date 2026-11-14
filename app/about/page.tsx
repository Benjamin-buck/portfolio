import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { education, experience, skills } from "@/constants/resume";

export const metadata = {
  title: "About — Benjamin Alan",
};

const AboutPage = () => {
  return (
    <main className="shell pt-12 md:pt-20">
      <p className="eyebrow fade-up mb-4">About</p>
      <h1 className="display text-[clamp(48px,8.5vw,128px)]">
        <span className="block overflow-hidden pb-[0.06em]">
          <span className="word-in">I make complicated</span>
        </span>
        <span className="block overflow-hidden pb-[0.06em]">
          <span className="word-in italic" style={{ "--i": 2 } as React.CSSProperties}>
            work feel calm.
          </span>
        </span>
      </h1>

      <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12">
        <div className="md:col-span-4">
          <Reveal variant="wipe" className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-surface ring-1 ring-line">
            <div className="absolute inset-0">
              <Image src="/benjamin.png" alt="Portrait of Benjamin Alan" fill sizes="(max-width: 768px) 100vw, 30vw" className="object-cover" />
            </div>
          </Reveal>
          <p className="eyebrow mt-4">Benjamin Alan Buck · Kingston, ON</p>
        </div>

        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-[1.7]">
          <Reveal>
            <p>
              I&apos;m a product designer and front-end developer with 6+ years in the private and public sectors.
              Most of my work is software for people who can&apos;t afford confusing tools: hospital staff managing
              surgical waitlists, federal inspectors working through regulation, and musicians running a band
              between day jobs.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-ink-2">
              At Novari Health / VitalHub I lead the product team rebuilding Novari ATC, a legacy ColdFusion
              waitlist platform, as a modern React and .NET Web API application. I own the Figma design system, the
              prototypes, the backlog and the Scrum ceremonies, and I help make the architecture calls. Before that I
              spent five years at Transport Canada as a UX designer, business analyst and Scrum Master.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-ink-2">
              Outside work I design and build my own products end to end. Band Account, a live SaaS for bands, is
              the biggest of them. It keeps me honest about what &ldquo;shippable&rdquo; actually means.
            </p>
          </Reveal>
          <Reveal delay={220} className="flex flex-wrap gap-3 pt-4">
            <Link href="/resume" className="btn-primary">
              Read the résumé
            </Link>
            <Link href="/contact" className="btn-ghost">
              Get in touch
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Timeline */}
      <section className="mt-32 grid gap-8 md:grid-cols-12" aria-labelledby="timeline">
        <h2 id="timeline" className="eyebrow md:col-span-3">
          Timeline
        </h2>
        <ol className="md:col-span-8 md:col-start-5 border-l border-line">
          {experience.flatMap((job, ji) =>
            job.roles.map((role, ri) => (
              <Reveal as="li" key={`${job.employer}-${role.title}`} delay={(ji + ri) * 60} className="relative pb-10 pl-8 last:pb-0">
                <span
                  className={`absolute -left-[5px] top-2 h-[9px] w-[9px] rounded-full border-2 border-paper ${
                    ji === 0 && ri === 0 ? "bg-accent" : "bg-ink-3"
                  }`}
                />
                {ri === 0 && <p className="eyebrow mb-2">{job.duration}</p>}
                <h3 className="text-lg font-medium">{role.title}</h3>
                <p className="text-ink-2">{job.employer}</p>
                {role.summary && ri === 0 && <p className="mt-3 text-[15px] leading-relaxed text-ink-3">{role.summary}</p>}
              </Reveal>
            ))
          )}
        </ol>
      </section>

      {/* Education */}
      <section className="mt-24 grid gap-8 md:grid-cols-12" aria-labelledby="edu">
        <h2 id="edu" className="eyebrow md:col-span-3">
          Education
        </h2>
        <div className="md:col-span-8 md:col-start-5">
          {education.map((e) => (
            <Reveal key={e.degree}>
              <h3 className="display text-3xl md:text-4xl">{e.degree}</h3>
              <p className="mt-2 text-ink-2">{e.school}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Toolbox */}
      <section className="mt-24 grid gap-8 md:grid-cols-12" aria-labelledby="toolbox">
        <h2 id="toolbox" className="eyebrow md:col-span-3">
          Toolbox
        </h2>
        <Reveal className="md:col-span-8 md:col-start-5">
          <p className="text-lg leading-[1.9] text-ink-2">
            {skills.map((s, i) => (
              <span key={s}>
                <span className="transition-colors hover:text-ink">{s}</span>
                {i < skills.length - 1 && <span className="mx-2 text-line">/</span>}
              </span>
            ))}
          </p>
        </Reveal>
      </section>
    </main>
  );
};

export default AboutPage;
