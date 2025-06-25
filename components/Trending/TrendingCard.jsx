"use client";
import React, { useState } from "react";

export default function TrendingCard({ news }) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <a
      href={news.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex flex-col justify-between min-w-[320px] max-w-xs bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-2xl shadow-md p-4 mr-4 transition-all duration-200 cursor-pointer group hover:-translate-y-1 hover:shadow-2xl"
      style={{ flex: "0 0 320px" }}
      tabIndex={0}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onFocus={() => setShowTooltip(true)}
      onBlur={() => setShowTooltip(false)}
      aria-label={`Read more: ${news.title}`}
    >
      {/* Tooltip on hover */}
      {showTooltip && (
        <span className="absolute left-1/2 -top-8 -translate-x-1/2 bg-black dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded px-3 py-1 opacity-90 pointer-events-none z-10 whitespace-nowrap shadow-lg">
          Click to read more
        </span>
      )}

      <div className="flex items-center gap-2 mb-2">
        <span className={`text-xs font-semibold text-white px-3 py-1 rounded-full ${news.categoryColor}`}>
          {news.category}
        </span>
        {news.breaking && (
          <span className="text-xs font-bold bg-red-500 dark:bg-red-700 text-white px-3 py-1 rounded-full animate-pulse">
            Breaking
          </span>
        )}
        <span className="ml-auto text-xs text-gray-400 dark:text-gray-500">{news.date}</span>
      </div>
      <h3 className="font-bold text-lg mb-1 line-clamp-2 dark:text-white">{news.title}</h3>
      <p className="text-gray-500 dark:text-gray-300 text-sm line-clamp-2">{news.excerpt}</p>
    </a>
  );
}
