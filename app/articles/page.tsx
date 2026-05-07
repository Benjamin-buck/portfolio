import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/constants/articles";

const ArticlesPage = () => {
  const sorted = [...articles]
    .filter((a) => a.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <main className="mb-16">
      <div className="mt-8 mx-4 md:mx-0">
        <h1 className="text-3xl font-lexend font-bold">Articles</h1>
        <p className="text-gray-500 mt-1 text-sm">
          {sorted.length} article{sorted.length !== 1 ? "s" : ""} — thoughts on development, design, and building products.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-5 mt-8 mx-4 md:mx-0">
        {sorted.map((article) => (
          <div key={article.slug} className="col-span-12 md:col-span-6 xl:col-span-4">
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </main>
  );
};

export default ArticlesPage;
