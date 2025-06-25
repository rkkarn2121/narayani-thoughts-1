"use client";
import React from "react";
import CategoryCard from "./CategoryCard";

const dummyCategories = [
  {
    title: "Politics & Governance",
    slug: "politics-governance",
    image: "/category-politics.jpg",
    color: "bg-blue-600",
    articles: [
      { title: "Election Reforms 2025", link: "#" },
      { title: "Leadership Today", link: "#" },
    ],
  },
  {
    title: "Military & Security",
    slug: "military-security",
    image: "/category-military.jpg",
    color: "bg-red-600",
    articles: [
      { title: "The Defence Doctrine", link: "#" },
      { title: "Guardians of the Nation", link: "#" },
    ],
  },
  {
    title: "Geopolitics & Diplomacy",
    slug: "geopolitics-diplomacy",
    image: "/category-geopolitics.jpg",
    color: "bg-indigo-600",
    articles: [
      { title: "India’s Global Position", link: "#" },
      { title: "Summit Talks Decoded", link: "#" },
    ],
  },
  {
    title: "Society & Culture",
    slug: "society-culture",
    image: "/category-society.jpg",
    color: "bg-yellow-500",
    articles: [
      { title: "Changing Family Values", link: "#" },
      { title: "Cultural Threads", link: "#" },
    ],
  },
  {
    title: "History & Heritage",
    slug: "history-heritage",
    image: "/category-history.jpg",
    color: "bg-orange-600",
    articles: [
      { title: "Legacy of Ashoka", link: "#" },
      { title: "Echoes of the Past", link: "#" },
    ],
  },
  {
    title: "Economy & Development",
    slug: "economy-development",
    image: "/category-economy.jpg",
    color: "bg-green-600",
    articles: [
      { title: "Union Budget Insights", link: "#" },
      { title: "India’s Digital Growth", link: "#" },
    ],
  },
  {
    title: "Science & Technology",
    slug: "science-technology",
    image: "/category-science.jpg",
    color: "bg-purple-600",
    articles: [
      { title: "ISRO’s Latest Mission", link: "#" },
      { title: "Future of AI in Bharat", link: "#" },
    ],
  },
  {
    title: "Trends & Opinions",
    slug: "trends-opinions",
    image: "/category-trends.jpg",
    color: "bg-teal-600",
    articles: [
      { title: "What the Youth Think", link: "#" },
      { title: "Trending Now", link: "#" },
    ],
  },
  {
    title: "Life & Inspiration",
    slug: "life-inspiration",
    image: "/category-life.jpg",
    color: "bg-pink-600",
    articles: [
      { title: "Living With Purpose", link: "#" },
      { title: "Modern-Day Sages", link: "#" },
    ],
  },
];

export default function CategoryGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8 py-10">
      {dummyCategories.map((cat) => (
        <CategoryCard key={cat.slug} {...cat} />
      ))}
    </section>
  );
}
