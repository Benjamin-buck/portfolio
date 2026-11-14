import Reveal from "./motion/Reveal";

const steps = [
  {
    title: "Understand",
    body: "Sit with the people doing the work. I run requirements sessions and map the real workflow, including the workarounds, before drawing anything.",
  },
  {
    title: "Systematize",
    body: "Turn recurring patterns into a Figma design system with tokens, components and states, so every later screen gets faster to make.",
  },
  {
    title: "Prototype",
    body: "Build high-fidelity, responsive, clickable prototypes. Stakeholders can react to something real, and it's cheaper to change now than after code.",
  },
  {
    title: "Ship",
    body: "Build it in React and TypeScript with the team, through Agile delivery: sprint by sprint, tested, and in production.",
  },
];

const Process = () => (
  <section className="shell mt-36 md:mt-48" aria-labelledby="process-heading">
    <p className="eyebrow mb-3">How I work</p>
    <Reveal as="h2" id="process-heading" variant="mask" className="display text-5xl md:text-7xl" lines={["From the problem to a pull request"]} />

    <ol className="mt-16 grid gap-12 md:grid-cols-4 md:gap-8">
      {steps.map((s, i) => (
        <li key={s.title} className="relative">
          <Reveal variant="rule" delay={i * 180} className="mb-6 h-px w-full bg-ink" />
          <Reveal delay={i * 180 + 200}>
            <p className="eyebrow mb-4">Step {i + 1}</p>
            <h3 className="display text-3xl md:text-4xl">{s.title}</h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-2">{s.body}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  </section>
);

export default Process;
