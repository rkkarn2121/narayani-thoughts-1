"use client";
import React from "react";
import Link from "next/link";

type Article = {
  title: string;
  link: string;
};

type CategoryCardProps = {
  title: string;
  slug: string;
  image: string;
  color: string;
  articles: Article[];
};

export default function CategoryCard({
  title,
  slug,
  image,
  color,
  articles,
}: CategoryCardProps) {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900`}
    >
      <div className="relative w-full aspect-[16/9] bg-gray-100 dark:bg-gray-800">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
        <span
          className={`absolute top-2 left-2 text-xs font-semibold px-2 py-1 text-white rounded ${color}`}
        >
          {title}
        </span>
      </div>
      <div className="p-4">
        <ul className="text-sm text-gray-800 dark:text-gray-200 space-y-1">
          {articles.map((article, index) => (
            <li key={index}>
              <Link href={article.link}>
                <span className="hover:underline">{article.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <Link
            href={`/category/${slug}`}
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            View All →
          </Link>
        </div>
      </div>
    </div>
  );
}
