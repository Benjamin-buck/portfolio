import Image from "next/image";
import Link from "next/link";
import { Article } from "@/constants/articles";

interface Props {
  article: Article;
  compact?: boolean;
}

const ArticleCard = ({ article, compact }: Props) => {
  const formatted = new Date(article.date).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (compact) {
    return (
      <Link href={`/articles/${article.slug}`} className="group block">
        <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0">
          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <span>{formatted}</span>
              <span>·</span>
              <span>{article.readTime}</span>
            </div>
            <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">
              {article.title}
            </h3>
            <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
              {article.description}
            </p>
          </div>
          {article.image && (
            <div className="shrink-0 w-16 h-16 rounded-lg overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/articles/${article.slug}`} className="group block h-full">
      <div className="rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-200 bg-white flex flex-col h-full overflow-hidden">
        {article.image && (
          <div className="h-[180px] overflow-hidden shrink-0">
            <Image
              src={article.image}
              alt={article.title}
              width={600}
              height={360}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-5 flex flex-col gap-3 flex-1">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>{formatted}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
          <h2 className="font-lexend font-bold text-base leading-snug text-gray-900 group-hover:text-blue-600 transition-colors">
            {article.title}
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
            {article.description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
