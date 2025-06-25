"use client";
import { useRef, useEffect, useState } from "react";
import TrendingCard from "./TrendingCard";

const trendingNews = [
  {
    id: 1,
    category: "Politics",
    categoryColor: "bg-blue-600 dark:bg-blue-400",
    date: "24 Jun 2025",
    breaking: true,
    title: "Election Commission Announces Major Reforms in Voting Process",
    excerpt: "The Election Commission has rolled out sweeping reforms to boost transparency and participation this year.",
    link: "#"
  },
  {
    id: 2,
    category: "World",
    categoryColor: "bg-green-600 dark:bg-green-400",
    date: "24 Jun 2025",
    breaking: false,
    title: "UN Urges Ceasefire Amid Rising Global Tensions",
    excerpt: "Diplomats are calling for peace as conflict zones escalate. Here’s what you need to know.",
    link: "#"
  },
  {
    id: 3,
    category: "Tech",
    categoryColor: "bg-purple-600 dark:bg-purple-400",
    date: "24 Jun 2025",
    breaking: true,
    title: "New AI Bill Proposed to Regulate Deepfakes",
    excerpt: "Lawmakers propose strict regulations to tackle deepfake misinformation as AI tech grows.",
    link: "#"
  },
  {
    id: 4,
    category: "Business",
    categoryColor: "bg-orange-500 dark:bg-orange-400",
    date: "23 Jun 2025",
    breaking: false,
    title: "Stock Markets Hit Record Highs Despite Global Uncertainty",
    excerpt: "Markets soar as investors bet on tech and energy, bucking regional trends.",
    link: "#"
  },
  {
    id: 5,
    category: "Sports",
    categoryColor: "bg-pink-600 dark:bg-pink-400",
    date: "23 Jun 2025",
    breaking: false,
    title: "India Clinches Series Win in Thrilling Cricket Finale",
    excerpt: "The Indian cricket team sealed victory in a nail-biting final match last night.",
    link: "#"
  },
  {
    id: 6,
    category: "Health",
    categoryColor: "bg-teal-600 dark:bg-teal-400",
    date: "22 Jun 2025",
    breaking: false,
    title: "New Wellness Guidelines Released by Ministry of Health",
    excerpt: "Updated health guidelines emphasize mental well-being and daily exercise.",
    link: "#"
  },
  {
    id: 7,
    category: "Opinion",
    categoryColor: "bg-gray-800 dark:bg-gray-400",
    date: "22 Jun 2025",
    breaking: false,
    title: "Why Voting Matters: The Power of Your Ballot",
    excerpt: "Editorial: Every vote shapes the nation. Your participation counts more than ever.",
    link: "#"
  },
  {
    id: 8,
    category: "Science",
    categoryColor: "bg-indigo-600 dark:bg-indigo-400",
    date: "21 Jun 2025",
    breaking: false,
    title: "Breakthrough in Renewable Energy Announced by ISRO",
    excerpt: "ISRO scientists unveil a new solar technology that could change global energy.",
    link: "#"
  },
];

export default function TrendingCarousel() {
  const carouselRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    if (!carouselRef.current) return;
    let direction = 1; // 1 = right, -1 = left
    const el = carouselRef.current;
    let animationId;

    const autoScroll = () => {
      if (!isHovered) {
        el.scrollLeft += 1.2 * direction;
        // Loop logic: If reached right end, reverse direction (or loop to start)
        if (el.scrollLeft + el.offsetWidth >= el.scrollWidth) direction = -1;
        if (el.scrollLeft <= 0) direction = 1;
      }
      animationId = requestAnimationFrame(autoScroll);
    };
    animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, [isHovered]);

  // Scroll by card width
  const scrollByCard = (dir = 1) => {
    if (!carouselRef.current) return;
    const cardWidth = 336; // min-w-[320px] + gap
    carouselRef.current.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  return (
    <section className="w-full py-4 bg-gray-50 dark:bg-gray-950 transition-colors duration-200">
      <div className="container mx-auto px-2">
        <div
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left Arrow */}
          <button
            aria-label="Scroll left"
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-full shadow-lg p-2 transition-opacity duration-200 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            style={{ pointerEvents: isHovered ? "auto" : "none" }}
            onClick={() => scrollByCard(-1)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          {/* Right Arrow */}
          <button
            aria-label="Scroll right"
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 rounded-full shadow-lg p-2 transition-opacity duration-200 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            style={{ pointerEvents: isHovered ? "auto" : "none" }}
            onClick={() => scrollByCard(1)}
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth={2}><path d="M9 6l6 6-6 6"/></svg>
          </button>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex flex-nowrap gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollBehavior: "smooth" }}
            tabIndex={0}
          >
            {trendingNews.map((news) => (
              <TrendingCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS to hide scrollbar */}
      <style jsx global>{`
        .scrollbar-hide {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
