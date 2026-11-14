import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/constants/articles";

export const metadata = {
  title: "Writing — Benjamin Alan",
};

const ArticlesPage = () => {
  const sorted = [...articles]
    .filter((a) => a.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="shell pt-12 md:pt-20">
      <p className="eyebrow fade-up mb-4">Writing · {String(sorted.length).padStart(2, "0")}</p>
      <h1 className="display text-[clamp(52px,9vw,140px)]">
        <span className="block overflow-hidden pb-[0.06em]">
          <span className="word-in">Notes on design</span>
        </span>
        <span className="block overflow-hidden pb-[0.06em]">
          <span className="word-in italic text-ink-3" style={{ "--i": 3 } as React.CSSProperties}>
            &amp; building.
          </span>
        </span>
      </h1>

      <div className="mt-16 border-t border-line">
        {sorted.map((a, i) => (
          <ArticleCard key={a.slug} article={a} index={i} />
        ))}
      </div>

      {sorted.length === 0 && (
        <div className="fade-up grid gap-6 py-16 md:grid-cols-12" style={{ "--d": "400ms" } as React.CSSProperties}>
          <p className="eyebrow md:col-span-2">Drafting</p>
          <div className="md:col-span-7">
            <p className="text-xl leading-relaxed text-ink-2">
              The first essays, on building design systems in Figma and taking them to production, are still in
              draft. In the meantime the case studies show the thinking.
            </p>
            <Link href="/portfolio" className="btn-ghost mt-8">
              Read the case studies →
            </Link>
          </div>
        </div>
      )}
    </main>
  );
};

export default ArticlesPage;
