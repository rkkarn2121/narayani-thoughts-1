"use client";
import React, { useState } from "react";
import TabListItem from "./TabListItem";

// 1. Type definitions
type TabKey = "trending" | "editors";
interface TabItem {
  title: string;
  views: number;
}

// 2. Tab and data setup
const TABS: { label: string; key: TabKey }[] = [
  { label: "Trending", key: "trending" },
  { label: "Editors’ Picks", key: "editors" },
];

const DUMMY_LIST: Record<TabKey, TabItem[]> = {
  trending: [
    { title: "Why Geopolitics Still Matters", views: 1520 },
    { title: "Voices from the Sena: Life Lessons", views: 1360 },
    { title: "Youth & Politics: A Rising Force", views: 1220 },
    { title: "The Art of Strategic Thinking", views: 1100 },
    { title: "India’s Next Gen Leadership", views: 980 },
    { title: "Digital Patriots: Youth Online Movements", views: 880 },
    { title: "Women Warriors: Breaking Barriers", views: 680 },
    { title: "Rural Voices: Change from the Grassroots", views: 880 },
    { title: "The Power of Collective Action", views: 980 },
    { title: "India 2047: Visions & Challenges", views: 1980 },
  ],
  editors: [
    { title: "Defending Democracy: Essays", views: 1300 },
    { title: "Unsung Heroes: Stories of Grit", views: 1200 },
    { title: "Milestones in Modern India", views: 1100 },
    { title: "Narayani Sena’s Code", views: 990 },
    { title: "Unsilenced: Speaking Truth to Power", views: 420 },
    { title: "Courage Under Fire: Real Stories", views: 690 },
    { title: "Pioneers of Progress: Young Achievers", views: 790 },
    { title: "Sena Diaries: Stories of Service", views: 250 },
    { title: "Unity in Diversity: Living the Idea", views: 790 },
  ],
};

export default function RightTabs() {
  const [activeTab, setActiveTab] = useState<TabKey>("trending");
  const items: TabItem[] = DUMMY_LIST[activeTab];

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-md overflow-hidden flex flex-col h-full">
      {/* Tabs */}
      <div className="flex relative border-b">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 px-4 py-3 font-semibold text-sm focus:outline-none transition ${
              activeTab === tab.key ? "text-blue-700 dark:text-blue-300" : "text-gray-400"
            }`}
          >
            {tab.label}
            {/* Animated underline */}
            {activeTab === tab.key && (
              <span className="block h-1 bg-blue-700 dark:bg-blue-300 rounded-t mt-2 animate-slideIn" />
            )}
          </button>
        ))}
      </div>

      {/* List */}
      <div
        className="overflow-y-auto flex-1"
        style={{ maxHeight: "320px" }}
      >
        {items.slice(0, 25).map((item, idx) => (
          <TabListItem
            key={item.title}
            rank={idx + 1}
            title={item.title}
            views={item.views}
          />
        ))}
        {items.length > 4 && (
          <div className="text-center text-xs text-gray-400 dark:text-gray-500 py-2">Scroll for more</div>
        )}
      </div>
    </div>
  );
}
