import Link from "next/link";
import SelectableHeadline from "./SelectableHeadline";

const facts = [
  { k: "Now", v: "Product Designer, Novari Health / VitalHub" },
  { k: "Experience", v: "6+ years, design → production" },
  { k: "Domains", v: "Healthcare · Government · Music" },
  { k: "Based", v: "Kingston, Ontario" },
];

const Hero = () => {
  return (
    <section className="shell pt-12 md:pt-20">
      <p className="eyebrow fade-up flex items-center gap-2" style={{ "--d": "0ms" } as React.CSSProperties}>
        <span className="breathe inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
        Benjamin Alan — Product Designer &amp; Front-end Developer
      </p>

      <div className="mt-8 md:mt-10">
        <SelectableHeadline />
      </div>

      <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12">
        <div className="md:col-span-6 lg:col-span-5">
          <p className="fade-up text-lg leading-relaxed text-ink-2 md:text-xl" style={{ "--d": "700ms" } as React.CSSProperties}>
            I design products for complicated work, like surgical waitlists, federal regulation and running a band,
            and then I build them in React. You get one person who takes it from research and a Figma design
            system all the way to production code.
          </p>
          <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ "--d": "850ms" } as React.CSSProperties}>
            <Link href="/portfolio" className="btn-primary">
              See the work <span aria-hidden>→</span>
            </Link>
            <Link href="/resume" className="btn-ghost">
              Résumé
            </Link>
          </div>
        </div>

        <dl className="md:col-span-6 lg:col-start-8 lg:col-span-5 grid grid-cols-2 gap-x-6 gap-y-6 self-end border-t border-line pt-6">
          {facts.map(({ k, v }, i) => (
            <div key={k} className="fade-up" style={{ "--d": `${950 + i * 80}ms` } as React.CSSProperties}>
              <dt className="eyebrow mb-1.5">{k}</dt>
              <dd className="text-sm leading-snug">{v}</dd>
            </div>
          ))}
        </dl>
      </div>

      <p className="eyebrow mt-16 hidden md:block fade-up" style={{ "--d": "1300ms" } as React.CSSProperties}>
        Hover the headline. It&apos;s a canvas.
      </p>
    </section>
  );
};

export default Hero;
