import React from "react";
import { Bookmark, Eye } from "lucide-react";

type Props = {
  rank: number;
  title: string;
  views: number;
};

export default function TabListItem({ rank, title, views }: Props) {
  return (
    <div className="flex items-center gap-3 py-2 px-2 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition">
      <div className="w-7 text-right">
        <span className="text-red-600 font-bold text-lg">{rank}</span>
      </div>
      <div className="flex-1 text-sm font-medium truncate">{title}</div>
      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs min-w-max">
        <Eye size={16} className="inline" />
        {views}
      </div>
      <button
        className="ml-2 p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
        aria-label="Bookmark"
      >
        <Bookmark size={18} strokeWidth={1.5} className="text-gray-400" />
      </button>
    </div>
  );
}
