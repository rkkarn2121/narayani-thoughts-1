"use client";
import React from "react";
import ArticleCard from "./ArticleCard";

export default function CategoryRow({
  category,
}: {
  category: {
    title: string;
    articles: { title: string; excerpt: string; image: string }[];
  };
}) {
  return (
    <div className="flex flex-col gap-4 py-10 border-b border-gray-200 dark:border-gray-700">
      <h2
        className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center"
        data-aos="fade-right"
      >
        {category.title}
      </h2>

      <div className="flex flex-wrap justify-center gap-4">
        {category.articles.map((article, i) => (
          <ArticleCard
            key={i}
            title={article.title}
            excerpt={article.excerpt}
            image={article.image}
          />
        ))}
      </div>
    </div>
  );
}
