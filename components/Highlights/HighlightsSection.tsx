"use client";
import React from "react";
import FeatureCard from "./FeatureCard";
import RightTabs from "./RightTabs";

// Replace with your actual images in /public or remote links
const DUMMY_FEATURES = [
  {
    image: "/feature1.jpg",
    category: "Leadership",
    date: "June 24, 2025",
    title: "The Spirit of Narayani: Lessons for Today’s Youth",
    excerpt: "How ancient wisdom and modern ambition combine to shape the next generation.",
  },
  {
    image: "/feature2.jpg",
    category: "Geopolitics",
    date: "June 22, 2025",
    title: "Borders, Minds & Movements: Narratives of Change",
    excerpt: "Exploring India’s evolving identity through the lens of global currents.",
  },
];

export default function HighlightsSection() {
  return (
    <section className="w-full mt-10 mb-6 max-w-6xl mx-auto px-4">
      {/* Headline */}
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-6">
        Voices of Resolve: Narayani Sena Picks
      </h2>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left: Feature cards (60%) */}
        <div className="flex flex-col gap-6 w-full lg:w-3/5">
          {DUMMY_FEATURES.map((card, idx) => (
            <FeatureCard key={idx} {...card} />
          ))}
        </div>
        {/* Right: Tabs (40%) */}
        <div className="w-full lg:w-2/5 min-w-[280px] max-w-[400px]">
          <RightTabs />
        </div>
      </div>
    </section>
  );
}
