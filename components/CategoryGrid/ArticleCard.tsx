"use client";
import React from "react";

export default function ArticleCard({
  title,
  excerpt,
  image,
}: {
  title: string;
  excerpt: string;
  image: string;
}) {
  return (
    <div
      className="bg-white dark:bg-gray-900 rounded-lg shadow hover:shadow-lg transition-all duration-300 overflow-hidden w-full sm:w-[280px] lg:w-[300px]"
      data-aos="fade-up"
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-md font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2">
          {excerpt}
        </p>
      </div>
    </div>
  );
}
