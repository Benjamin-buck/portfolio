"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRef, useState } from "react";
import Lightbox from "@/components/Lightbox";
import Reveal from "@/components/motion/Reveal";
import { verifyProjectPassword } from "@/app/actions/verifyProjectPassword";
import { indexOf, lede, pad, projects, timeline, type Project } from "@/lib/projects";

const Locked = ({ project, onUnlock }: { project: Project; onUnlock: () => void }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    const ok = await verifyProjectPassword(project.id, value);
    setBusy(false);
    if (ok) onUnlock();
    else {
      setError(true);
      setValue("");
    }
  };

  return (
    <main className="shell grid min-h-[70vh] place-items-center py-20">
      <div className="w-full max-w-md">
        <p className="eyebrow mb-4">Private case study · Under NDA</p>
        <h1 className="display text-5xl md:text-6xl">{project.title}</h1>
        <p className="mt-5 leading-relaxed text-ink-2">
          This project includes confidential client work. Enter the password to view it. If you&apos;re hiring and
          don&apos;t have one,{" "}
          <Link href="/contact" className="link-draw text-ink">
            ask me for it
          </Link>
          .
        </p>
        <form onSubmit={submit} className="mt-10">
          <label htmlFor="pw" className="eyebrow">
            Password
          </label>
          <div
            className={`mt-2 flex items-center border-b transition-colors ${
              error ? "border-red-500" : "border-ink-3 focus-within:border-ink"
            } ${error ? "animate-[shake_0.4s]" : ""}`}
          >
            <input
              id="pw"
              type="password"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                setError(false);
              }}
              autoFocus
              className="flex-1 bg-transparent py-3 text-lg outline-none placeholder:text-ink-3"
              placeholder="••••••••"
              aria-invalid={error}
              aria-describedby={error ? "pw-error" : undefined}
            />
            <button type="submit" disabled={busy || !value} className="btn-primary !py-2 disabled:opacity-40">
              {busy ? "Checking…" : "Unlock"}
            </button>
          </div>
          {error && (
            <p id="pw-error" className="mt-3 text-sm text-red-600">
              That password didn&apos;t work. Try again.
            </p>
          )}
        </form>
        <Link href="/portfolio" className="mt-10 inline-block text-sm text-ink-3 hover:text-ink">
          ← Back to all work
        </Link>
      </div>
      <style>{`@keyframes shake{20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}`}</style>
    </main>
  );
};

const ProjectView = () => {
  const params = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(params.id)) ?? null;
  const [unlocked, setUnlocked] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const stripRef = useRef<HTMLDivElement>(null);

  if (!project) {
    return (
      <main className="shell grid min-h-[60vh] place-items-center text-center">
        <div>
          <p className="eyebrow mb-4">404</p>
          <h1 className="display text-6xl">Project not found</h1>
          <Link href="/portfolio" className="btn-primary mt-8">
            Back to the work
          </Link>
        </div>
      </main>
    );
  }

  if (project.isPasswordProtected && !unlocked) {
    return <Locked project={project} onUnlock={() => setUnlocked(true)} />;
  }

  const idx = indexOf(project);
  const next = projects[(idx + 1) % projects.length];
  const images = project.images ?? [];
  const when = timeline(project);

  const scrollStrip = (dir: number) => {
    const el = stripRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <main>
      <Lightbox images={images} index={lightbox} onChange={setLightbox} title={project.title} />

      {/* Header */}
      <header className="shell pt-10 md:pt-16">
        <nav aria-label="Breadcrumb" className="eyebrow fade-up flex items-center gap-2">
          <Link href="/portfolio" className="hover:text-ink transition-colors">
            Work
          </Link>
          <span>/</span>
          <span className="text-ink tabular-nums">{pad(idx + 1)}</span>
        </nav>

        <h1 className="display mt-8 text-[clamp(52px,9vw,140px)]">
          <span className="block overflow-hidden pb-[0.06em]">
            <span className="word-in">{project.title}</span>
          </span>
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-12">
          <p
            className="fade-up md:col-span-7 text-xl leading-relaxed text-ink-2 md:text-2xl"
            style={{ "--d": "300ms" } as React.CSSProperties}
          >
            {lede(project)}
          </p>
          <dl
            className="fade-up md:col-span-4 md:col-start-9 grid grid-cols-2 gap-6 border-t border-line pt-6 text-sm"
            style={{ "--d": "450ms" } as React.CSSProperties}
          >
            <div>
              <dt className="eyebrow mb-1.5">Status</dt>
              <dd>{project.status}</dd>
            </div>
            <div>
              <dt className="eyebrow mb-1.5">Timeline</dt>
              <dd>{when ?? "—"}</dd>
            </div>
            <div>
              <dt className="eyebrow mb-1.5">Stack</dt>
              <dd>{project.projectDetails.technology.length} technologies</dd>
            </div>
            <div>
              <dt className="eyebrow mb-1.5">Links</dt>
              <dd className="flex flex-col gap-1">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="link-draw w-fit">
                    Live site ↗
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="link-draw w-fit">
                    Repository ↗
                  </a>
                )}
                {!project.liveLink && !project.repo && <span className="text-ink-3">Private</span>}
              </dd>
            </div>
          </dl>
        </div>
      </header>

      {/* Hero image */}
      <section className="shell mt-16 md:mt-20">
        <button
          type="button"
          onClick={() => images.length && setLightbox(0)}
          className="group block w-full text-left"
          aria-label={images.length ? "Open gallery" : undefined}
        >
          <Reveal variant="wipe" className="relative aspect-[16/9] overflow-hidden rounded-[6px] bg-surface ring-1 ring-line">
            <div className="absolute inset-0">
              <Image
                src={project.thumbnail}
                alt={`${project.title} — ${images[0]?.label ?? "screenshot"}`}
                fill
                priority
                sizes="(max-width: 1360px) 100vw, 1280px"
                className="object-cover object-top"
              />
            </div>
          </Reveal>
        </button>
      </section>

      {/* Overview */}
      <section className="shell mt-24 md:mt-32 grid gap-8 md:grid-cols-12">
        <p className="eyebrow md:col-span-3">Overview</p>
        <Reveal className="md:col-span-8 md:col-start-5">
          <p className="text-lg leading-[1.7] md:text-xl">{project.description}</p>
        </Reveal>
      </section>

      {/* Gallery strip */}
      {images.length > 1 && (
        <section className="mt-24 md:mt-32" aria-label="Gallery">
          <div className="shell flex items-end justify-between">
            <p className="eyebrow">
              Gallery · {pad(images.length)} figures
            </p>
            <div className="hidden md:flex gap-2">
              <button onClick={() => scrollStrip(-1)} aria-label="Scroll gallery left" className="grid h-10 w-10 place-items-center rounded-full border border-line hover:border-ink transition-colors">
                ←
              </button>
              <button onClick={() => scrollStrip(1)} aria-label="Scroll gallery right" className="grid h-10 w-10 place-items-center rounded-full border border-line hover:border-ink transition-colors">
                →
              </button>
            </div>
          </div>
          <div
            ref={stripRef}
            className="no-scrollbar mt-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-px-5 px-5 md:scroll-px-10 md:px-10 xl:px-[max(2.5rem,calc((100vw-1360px)/2+2.5rem))] xl:scroll-px-[max(2.5rem,calc((100vw-1360px)/2+2.5rem))]"
          >
            {images.map((img, i) => (
              <figure key={img.image} className="w-[82vw] shrink-0 snap-start md:w-[46vw] lg:w-[38vw]">
                <button
                  type="button"
                  onClick={() => setLightbox(i)}
                  className="group relative block aspect-[16/10] w-full overflow-hidden rounded-[6px] bg-surface ring-1 ring-line"
                  aria-label={`Open figure ${i + 1}: ${img.label}`}
                >
                  <Image
                    src={img.image}
                    alt={img.label}
                    fill
                    sizes="(max-width: 768px) 82vw, 40vw"
                    className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute right-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-paper opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Expand
                  </span>
                </button>
                <figcaption className="mt-3 flex gap-3 text-sm text-ink-2">
                  <span className="font-mono text-xs text-ink-3 pt-0.5 tabular-nums">Fig. {pad(i + 1)}</span>
                  {img.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Features */}
      <section className="shell mt-24 md:mt-32">
        <p className="eyebrow mb-10">What&apos;s inside · {pad(project.features.length)}</p>
        <div className="border-t border-line">
          {project.features.map((f, i) => (
            <Reveal key={f.heading} className="grid gap-6 border-b border-line py-10 md:grid-cols-12 md:py-14">
              <div className="md:col-span-4">
                <p className="eyebrow mb-3 tabular-nums">{pad(i + 1)}</p>
                <h2 className="display text-3xl md:text-[42px]">{f.heading}</h2>
              </div>
              <ul className="md:col-span-7 md:col-start-6 space-y-4">
                {f.content.map((c) => (
                  <li key={c} className="flex gap-4 leading-relaxed text-ink-2">
                    <span className="mt-[0.7em] h-px w-4 shrink-0 bg-ink-3" />
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="shell mt-24 grid gap-8 md:grid-cols-12">
        <p className="eyebrow md:col-span-3">Built with</p>
        <ul className="md:col-span-8 md:col-start-5 flex flex-wrap gap-2">
          {project.projectDetails.technology.map((t) => (
            <li key={t} className="rounded-full border border-line px-3.5 py-1.5 text-sm transition-colors duration-300 hover:border-ink">
              {t}
            </li>
          ))}
        </ul>
      </section>

      {/* Next */}
      <section className="shell mt-32">
        <Link href={`/portfolio/${next.id}`} className="group block border-t border-ink pt-8">
          <p className="eyebrow mb-4">Next project · {pad(((idx + 1) % projects.length) + 1)}</p>
          <div className="flex items-end justify-between gap-6">
            <span className="display text-[clamp(44px,8vw,120px)] transition-[transform,color] duration-700 ease-out group-hover:translate-x-4 group-hover:text-accent">
              {next.title}
            </span>
            <span
              aria-hidden
              className="mb-4 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-line text-xl transition-all duration-500 ease-out group-hover:-rotate-45 group-hover:border-ink group-hover:bg-ink group-hover:text-paper md:h-20 md:w-20"
            >
              →
            </span>
          </div>
        </Link>
      </section>
    </main>
  );
};

// Keyed by id so state (unlock, lightbox) resets when moving between projects.
const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  return <ProjectView key={id} />;
};

export default ProjectPage;
