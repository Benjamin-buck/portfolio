import { articles } from "@/constants/articles";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
    <main className="mb-16 md:max-w-[900px] md:mx-auto mx-4">
      <Link
        href="/articles"
        className="mt-6 mb-8 flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-black transition-colors w-fit"
      >
        <ChevronLeft size={16} /> All Articles
      </Link>

      <div className="w-full">
        {/* Meta */}
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
          <span>{formatted}</span>
          <span>·</span>
          <span>{article.readTime}</span>
        </div>

        <h1 className="text-3xl font-lexend font-bold leading-tight mb-4">
          {article.title}
        </h1>

        <p className="text-gray-500 text-base leading-relaxed mb-6">
          {article.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-8 pb-8 border-b border-gray-100">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Featured image */}
        {article.image && (
          <div className="rounded-xl overflow-hidden mb-10">
            <Image
              src={article.image}
              alt={article.title}
              width={1200}
              height={630}
              className="w-full object-cover"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col gap-8">
          {article.content.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="text-xl font-lexend font-bold mb-3">
                  {section.heading}
                </h2>
              )}
              {section.body && (
                <p className="text-gray-600 leading-relaxed text-base">
                  {section.body}
                </p>
              )}
              {section.image && (
                <figure className={section.body ? "mt-6" : undefined}>
                  <div className="rounded-xl overflow-hidden">
                    <Image
                      src={section.image}
                      alt={section.imageCaption ?? section.heading ?? ""}
                      width={1200}
                      height={630}
                      className="w-full object-cover"
                    />
                  </div>
                  {section.imageCaption && (
                    <figcaption className="text-xs text-gray-400 mt-2">
                      {section.imageCaption}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ArticlePage;
