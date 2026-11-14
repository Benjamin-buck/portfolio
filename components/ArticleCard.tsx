import Link from "next/link";
import { Article } from "@/constants/articles";

interface Props {
  article: Article;
  index?: number;
}

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" });

/** Editorial list row for an article. */
const ArticleCard = ({ article, index }: Props) => (
  <Link
    href={`/articles/${article.slug}`}
    className="group grid gap-3 border-b border-line py-8 md:grid-cols-12 md:items-baseline md:gap-6"
  >
    <span className="eyebrow md:col-span-2 tabular-nums">
      {index !== undefined ? `${String(index + 1).padStart(2, "0")} · ` : ""}
      {formatDate(article.date)}
    </span>
    <span className="md:col-span-7">
      <span className="display block text-3xl md:text-4xl transition-[transform,color] duration-500 ease-out group-hover:text-accent md:group-hover:translate-x-3">
        {article.title}
      </span>
      <span className="mt-2 block text-ink-2 leading-relaxed line-clamp-2">{article.description}</span>
    </span>
    <span className="eyebrow md:col-span-3 md:text-right">{article.readTime}</span>
  </Link>
);

export default ArticleCard;
