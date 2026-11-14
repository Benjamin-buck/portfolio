import { articles } from "@/constants/articles";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/motion/Reveal";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return articles.filter((a) => a.published).map((a) => ({ slug: a.slug }));
}

const ArticlePage = ({ params }: Props) => {
  const article = articles.find((a) => a.slug === params.slug);

  if (!article || !article.published) notFound();

  const formatted = new Date(article.date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="shell pt-10 md:pt-16">
      <Link href="/articles" className="eyebrow fade-up hover:text-ink transition-colors">
        ← Writing
      </Link>

      <header className="mx-auto mt-10 max-w-3xl">
        <p className="eyebrow fade-up mb-6">
          {formatted} · {article.readTime}
        </p>
        <h1 className="display text-5xl md:text-7xl fade-up" style={{ "--d": "100ms" } as React.CSSProperties}>
          {article.title}
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-ink-2 fade-up" style={{ "--d": "200ms" } as React.CSSProperties}>
          {article.description}
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-4 font-mono text-xs text-ink-3">
          {article.tags.map((tag) => (
            <li key={tag}>#{tag}</li>
          ))}
        </ul>
      </header>

      {article.image && (
        <Reveal variant="wipe" className="relative mx-auto mt-14 aspect-[1200/630] max-w-5xl overflow-hidden rounded-[6px] ring-1 ring-line">
          <div className="absolute inset-0">
            <Image src={article.image} alt={article.title} fill sizes="(max-width: 1024px) 100vw, 1024px" className="object-cover" />
          </div>
        </Reveal>
      )}

      <article className="mx-auto mt-16 max-w-2xl space-y-10">
        {article.content.map((section, i) => (
          <section key={i}>
            {section.heading && <h2 className="display mb-4 text-3xl md:text-4xl">{section.heading}</h2>}
            {section.body && <p className="text-lg leading-[1.8] text-ink-2">{section.body}</p>}
            {section.image && (
              <figure className={section.body ? "mt-8" : undefined}>
                <div className="overflow-hidden rounded-[6px] ring-1 ring-line">
                  <Image
                    src={section.image}
                    alt={section.imageCaption ?? section.heading ?? ""}
                    width={1200}
                    height={630}
                    className="w-full object-cover"
                  />
                </div>
                {section.imageCaption && (
                  <figcaption className="mt-3 font-mono text-xs text-ink-3">{section.imageCaption}</figcaption>
                )}
              </figure>
            )}
          </section>
        ))}
      </article>
    </main>
  );
};

export default ArticlePage;
