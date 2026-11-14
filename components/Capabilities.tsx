import Reveal from "./motion/Reveal";

const columns = [
  {
    title: "Design",
    note: "Figma-first, systems before screens",
    items: [
      "Product & UX strategy",
      "Requirements & workflow analysis",
      "Design systems & tokens",
      "High-fidelity, responsive prototypes",
      "Interaction & visual design",
      "Usability for complex, regulated domains",
    ],
  },
  {
    title: "Build",
    note: "Production front-end, not throwaway demos",
    items: [
      "React, Next.js & TypeScript",
      "Tailwind CSS & component libraries",
      ".NET Web API & Entity Framework",
      "PostgreSQL, SQL & Prisma",
      "Jest, Testing Library & Playwright",
      "CI/CD, Azure DevOps & Vercel",
    ],
  },
  {
    title: "Lead",
    note: "Keeping a team moving in the same direction",
    items: [
      "Scrum Master for product teams",
      "Backlog & roadmap management",
      "Client requirement sessions",
      "Architecture & technical decisions",
      "Design-to-dev handoff with no gaps",
    ],
  },
];

const Capabilities = () => (
  <section className="shell mt-36 md:mt-48" aria-labelledby="cap-heading">
    <div className="grid gap-10 md:grid-cols-12">
      <div className="md:col-span-5">
        <p className="eyebrow mb-3">What you get</p>
        <Reveal
          as="h2"
          id="cap-heading"
          variant="mask"
          className="display text-5xl md:text-7xl"
          lines={["Both sides", <em key="h" className="italic">of the handoff.</em>]}
        />
      </div>
      <Reveal className="md:col-span-6 md:col-start-7 self-end" delay={100}>
        <p className="text-lg leading-relaxed text-ink-2">
          Most teams lose detail between the Figma file and the pull request. I work on both sides of that line,
          so what gets designed is what ships: same spacing, same states, same edge cases.
        </p>
      </Reveal>
    </div>

    <div className="mt-16 grid gap-px overflow-hidden rounded-[6px] bg-line ring-1 ring-line md:grid-cols-3">
      {columns.map((col, ci) => (
        <Reveal key={col.title} delay={ci * 120} className="bg-paper p-7 md:p-9">
          <div className="flex items-baseline justify-between">
            <h3 className="display text-4xl">{col.title}</h3>
            <span className="eyebrow">{`0${ci + 1}`}</span>
          </div>
          <p className="mt-2 text-sm text-ink-3">{col.note}</p>
          <ul className="mt-8 space-y-3">
            {col.items.map((item) => (
              <li key={item} className="group flex items-center gap-3 text-[15px]">
                <span className="h-px w-3 bg-ink-3 transition-all duration-500 ease-out group-hover:w-6 group-hover:bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Capabilities;
