"use client";
import React, { useEffect } from "react";
import CategoryRow from "./CategoryRow";
import AOS from "aos";
import "aos/dist/aos.css";

const dummyData = [
  {
    title: "Politics & Governance",
    articles: [
      {
        title: "Election Reforms 2025",
        excerpt: "New voting laws aim to increase turnout and transparency.",
        image: "https://source.unsplash.com/random/400x300?politics",
      },
      {
        title: "Leadership Today",
        excerpt: "What makes a great modern leader in government?",
        image: "https://source.unsplash.com/random/400x300?leadership",
      },
      {
        title: "Policy Shifts Ahead",
        excerpt: "Major bills proposed for the next session.",
        image: "https://source.unsplash.com/random/400x300?policy",
      },
      {
        title: "Grassroots Democracy",
        excerpt: "How local elections are transforming India.",
        image: "https://source.unsplash.com/random/400x300?democracy",
      },
    ],
  },
  {
    title: "Military & Security",
    articles: [
      {
        title: "India's Defense Strategy",
        excerpt: "Shifts in regional focus and strategic doctrines.",
        image: "https://source.unsplash.com/random/400x300?military",
      },
      {
        title: "Guardians of the Border",
        excerpt: "Stories from the frontlines of India’s security forces.",
        image: "https://source.unsplash.com/random/400x300?border",
      },
      {
        title: "Joint Exercises 2025",
        excerpt: "Global partners collaborate on training.",
        image: "https://source.unsplash.com/random/400x300?army",
      },
      {
        title: "Modern Warfare Tech",
        excerpt: "Drones, cyber, and the future battlefield.",
        image: "https://source.unsplash.com/random/400x300?drone",
      },
    ],
  },
  {
    title: "Geopolitics & Diplomacy",
    articles: [
      {
        title: "India in Global Affairs",
        excerpt: "Diplomatic strategies and international alignments.",
        image: "https://source.unsplash.com/random/400x300?diplomacy",
      },
      {
        title: "BRICS Leadership Shift",
        excerpt: "How India is shaping policy at BRICS.",
        image: "https://source.unsplash.com/random/400x300?brics",
      },
      {
        title: "Neighbourhood First Policy",
        excerpt: "India’s strategic neighborhood outreach.",
        image: "https://source.unsplash.com/random/400x300?foreign",
      },
      {
        title: "Soft Power in Asia",
        excerpt: "Cultural diplomacy and influence abroad.",
        image: "https://source.unsplash.com/random/400x300?softpower",
      },
    ],
  },
  {
    title: "Society & Culture",
    articles: [
      {
        title: "Changing Family Values",
        excerpt: "The evolution of Indian family structures.",
        image: "https://source.unsplash.com/random/400x300?culture",
      },
      {
        title: "Cultural Festivals Reimagined",
        excerpt: "How traditions are adapting to modern life.",
        image: "https://source.unsplash.com/random/400x300?festival",
      },
      {
        title: "Rural vs Urban Mindsets",
        excerpt: "Bridging the divide through culture.",
        image: "https://source.unsplash.com/random/400x300?rural",
      },
      {
        title: "Language and Identity",
        excerpt: "How language shapes belonging in India.",
        image: "https://source.unsplash.com/random/400x300?language",
      },
    ],
  },
  {
    title: "History & Heritage",
    articles: [
      {
        title: "Legacy of Ashoka",
        excerpt: "Uncovering the Mauryan Emperor’s impact today.",
        image: "https://source.unsplash.com/random/400x300?ashoka",
      },
      {
        title: "Mughal Marvels",
        excerpt: "Architectural achievements of the Mughal Empire.",
        image: "https://source.unsplash.com/random/400x300?mughal",
      },
      {
        title: "Freedom Struggles Retold",
        excerpt: "New narratives from the independence movement.",
        image: "https://source.unsplash.com/random/400x300?freedom",
      },
      {
        title: "Ancient Trade Routes",
        excerpt: "How India connected ancient economies.",
        image: "https://source.unsplash.com/random/400x300?heritage",
      },
    ],
  },
  {
    title: "Economy & Development",
    articles: [
      {
        title: "Digital India Surge",
        excerpt: "The next phase of tech-enabled development.",
        image: "https://source.unsplash.com/random/400x300?economy",
      },
      {
        title: "Startups and Unicorns",
        excerpt: "India’s booming entrepreneurial landscape.",
        image: "https://source.unsplash.com/random/400x300?startup",
      },
      {
        title: "Rural Transformation",
        excerpt: "Empowering villages through economic change.",
        image: "https://source.unsplash.com/random/400x300?rural-development",
      },
      {
        title: "Sustainable Growth Models",
        excerpt: "Balancing innovation and climate action.",
        image: "https://source.unsplash.com/random/400x300?sustainability",
      },
    ],
  },
  {
    title: "Science & Technology",
    articles: [
      {
        title: "ISRO’s Moon Mission",
        excerpt: "India’s ambitions in space exploration.",
        image: "https://source.unsplash.com/random/400x300?space",
      },
      {
        title: "AI in Governance",
        excerpt: "How artificial intelligence is shaping policy.",
        image: "https://source.unsplash.com/random/400x300?ai",
      },
      {
        title: "Tech for Bharat",
        excerpt: "Innovations reaching the grassroots.",
        image: "https://source.unsplash.com/random/400x300?technology",
      },
      {
        title: "The Quantum Leap",
        excerpt: "India’s entry into quantum computing.",
        image: "https://source.unsplash.com/random/400x300?quantum",
      },
    ],
  },
  {
    title: "Trends & Opinions",
    articles: [
      {
        title: "Youth Speak 2025",
        excerpt: "What matters most to India’s youth today.",
        image: "https://source.unsplash.com/random/400x300?youth",
      },
      {
        title: "Viral Trends",
        excerpt: "From memes to movements—what’s catching fire?",
        image: "https://source.unsplash.com/random/400x300?trend",
      },
      {
        title: "Voices of Change",
        excerpt: "Bold opinions shaping the discourse.",
        image: "https://source.unsplash.com/random/400x300?opinion",
      },
      {
        title: "Future of Work",
        excerpt: "How Gen Z is rewriting the workplace rulebook.",
        image: "https://source.unsplash.com/random/400x300?work",
      },
    ],
  },
  {
    title: "Life & Inspiration",
    articles: [
      {
        title: "Living With Purpose",
        excerpt: "Real stories of grit and gratitude.",
        image: "https://source.unsplash.com/random/400x300?inspiration",
      },
      {
        title: "The Indian Minimalist",
        excerpt: "Lessons in simple, meaningful living.",
        image: "https://source.unsplash.com/random/400x300?minimal",
      },
      {
        title: "Stories of Hope",
        excerpt: "From struggle to success—journeys that inspire.",
        image: "https://source.unsplash.com/random/400x300?hope",
      },
      {
        title: "Everyday Heroes",
        excerpt: "Ordinary people doing extraordinary things.",
        image: "https://source.unsplash.com/random/400x300?hero",
      },
    ],
  },
];


export default function CategorySection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-12 bg-gray-50 dark:bg-gray-950">
      <h1
        className="text-3xl font-bold mb-10 text-center text-gray-800 dark:text-white"
        data-aos="fade-down"
      >
        Browse by Category
      </h1>

      {dummyData.map((category, index) => (
        <div key={index} className="max-w-7xl mx-auto">
    <CategoryRow category={category} />
  </div>
      ))}
    </section>
  );
}
