"use client";
import React from "react";

type Props = {
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
};

export default function FeatureCard({
  image,
  category,
  date,
  title,
  excerpt,
}: Props) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-white dark:bg-gray-900 hover:shadow-xl transition-shadow duration-200 group cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-5">
        <span className="inline-block bg-blue-100 dark:bg-blue-900 dark:text-blue-200 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          {category}
        </span>
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">{date}</div>
        <h3 className="font-bold text-lg mb-1 line-clamp-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">{excerpt}</p>
      </div>
    </div>
  );
}
