import './globals.css'; // <-- Fix here!
import Navbar from '../components/Navbar/Navbar';
import TrendingCarousel from "../components/Trending/TrendingCarousel";
import HighlightsSection from '../components/Highlights/HighlightsSection';
import CategoryGrid from "../components/CategoryGrid/CategoryGrid";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-50 transition-colors">
        <Navbar />
        <TrendingCarousel />
        <HighlightsSection />
        <CategoryGrid />
        <main className="min-h-[80vh]">{children}</main>
         
      </body>
    </html>
  );
}
