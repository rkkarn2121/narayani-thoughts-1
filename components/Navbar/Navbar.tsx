"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Sun, Moon, Search, User, X, Menu } from "lucide-react";

export default function Navbar() {
  // Dark mode logic
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggleTheme() {
    setDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  }

  // Mega menu drawer logic
  const [drawerOpen, setDrawerOpen] = useState(false);
  useEffect(() => {
    if (!drawerOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setDrawerOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen]);

  // Search Modal logic
  const [searchOpen, setSearchOpen] = useState(false);
  function openSearch() { setSearchOpen(true); }
  function closeSearch() { setSearchOpen(false); }

  useEffect(() => {
    if (!searchOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeSearch();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [searchOpen]);

  // Account dropdown logic
  const [accountOpen, setAccountOpen] = useState(false);
  const accountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handle(e: MouseEvent) {
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) {
        setAccountOpen(false);
      }
    }
    if (accountOpen) document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [accountOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setAccountOpen(false);
    }
    if (accountOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [accountOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-cyan-700 via-sky-600 to-emerald-500 shadow-lg dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 transition-colors">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 py-2">
        {/* Left: Mega menu icon */}
        <button
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
          className="flex items-center justify-center rounded-full p-2 text-white hover:bg-white/10 focus:outline-none"
        >
          <Menu size={28} />
        </button>

        {/* Center: Logo / Site Name */}
        <div className="flex-1 flex justify-center">
          <Link href="/" className="text-2xl sm:text-3xl font-bold tracking-wide text-white drop-shadow dark:text-white">
            Narayani Thoughts
          </Link>
        </div>

        {/* Right: Theme, Search, Avatar */}
        <div className="flex items-center gap-3">
          {/* Day/Night Switch */}
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="rounded-full p-2 hover:bg-white/10 text-white transition"
          >
            {isDark ? <Moon size={22} /> : <Sun size={22} />}
          </button>

          {/* Search */}
          <button
            aria-label="Search"
            onClick={openSearch}
            className="rounded-full p-2 hover:bg-white/10 text-white transition"
          >
            <Search size={22} />
          </button>

          {/* Subscribe Button */}
  <Link
  href="/subscribe"
  className="hidden sm:inline-flex bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg px-4 py-2 text-[15px] shadow transition focus:outline-none focus:ring-2 focus:ring-red-500"
  style={{ marginRight: "0.25rem" }}
>
  Subscribe ₹9/wk
</Link>

          {/* Account/Avatar */}
          <div ref={accountRef} className="relative">
            <button
              aria-label="Account"
              onClick={() => setAccountOpen((prev) => !prev)}
              className="rounded-full bg-white/80 hover:bg-white text-cyan-700 transition flex items-center justify-center w-9 h-9 overflow-hidden"
            >
              <User size={22} />
            </button>
            {/* Dropdown */}
            {accountOpen && (
              <div className="absolute right-0 mt-2 w-44 rounded-xl bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black/5 p-2 z-50 animate-fadeIn">
                <Link href="/profile" className="block px-4 py-2 rounded text-gray-800 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-gray-800">
                  Profile
                </Link>
                <Link href="/settings" className="block px-4 py-2 rounded text-gray-800 dark:text-gray-200 hover:bg-cyan-50 dark:hover:bg-gray-800">
                  Settings
                </Link>
                <button className="block w-full text-left px-4 py-2 rounded text-red-600 hover:bg-cyan-50 dark:hover:bg-gray-800">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Animated Mega Menu Drawer */}
      {drawerOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 z-[99] bg-black/40 backdrop-blur-[2px] transition-opacity animate-fadeIn"
            onClick={() => setDrawerOpen(false)}
          />
          {/* Drawer */}
          <aside
            className="fixed left-0 top-0 z-[100] h-full w-[90vw] max-w-xs bg-white dark:bg-gray-950 shadow-2xl transition-transform duration-300 ease-in-out animate-slideIn"
            style={{ animation: "slideIn .35s cubic-bezier(.77,0,.18,1) both" }}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
              <span className="text-lg font-bold text-cyan-700 dark:text-cyan-200">Menu</span>
              <button
                aria-label="Close menu"
                onClick={() => setDrawerOpen(false)}
                className="p-2 rounded-full text-cyan-700 dark:text-cyan-200 hover:bg-cyan-50 dark:hover:bg-gray-900"
              >
                <X size={24} />
              </button>
            </div>
            {/* Mega Menu Content */}
            <nav className="flex flex-col gap-2 p-5">
              <Link
                href="#trending"
                className="block px-3 py-2 rounded font-medium text-gray-700 dark:text-gray-200 hover:bg-cyan-100 dark:hover:bg-gray-900"
                onClick={() => setDrawerOpen(false)}
              >
                Trending
              </Link>
              <Link
                href="#polls"
                className="block px-3 py-2 rounded font-medium text-gray-700 dark:text-gray-200 hover:bg-cyan-100 dark:hover:bg-gray-900"
                onClick={() => setDrawerOpen(false)}
              >
                Polls
              </Link>
              <Link
                href="#editors-picks"
                className="block px-3 py-2 rounded font-medium text-gray-700 dark:text-gray-200 hover:bg-cyan-100 dark:hover:bg-gray-900"
                onClick={() => setDrawerOpen(false)}
              >
                Editor’s Picks
              </Link>
              <Link
                href="#categories"
                className="block px-3 py-2 rounded font-medium text-gray-700 dark:text-gray-200 hover:bg-cyan-100 dark:hover:bg-gray-900"
                onClick={() => setDrawerOpen(false)}
              >
                Categories
              </Link>
            </nav>
            {/* Drawer Footer */}
            <div className="mt-auto p-4">
              <Link
                href="/auth/signup"
                className="w-full block text-center rounded-full bg-gradient-to-r from-emerald-500 to-sky-600 px-5 py-2 text-base font-semibold text-white shadow-md hover:scale-[1.03] hover:shadow-lg focus-visible:outline-none focus-visible:ring focus-visible:ring-sky-500 transition"
                onClick={() => setDrawerOpen(false)}
              >
                Join the Movement
              </Link>
            </div>
          </aside>
          {/* Animate keyframes */}
          <style jsx global>{`
            @keyframes slideIn {
              from { transform: translateX(-110%); opacity: 0.5 }
              to { transform: translateX(0); opacity: 1 }
            }
            @keyframes fadeIn {
              from { opacity: 0 }
              to { opacity: 1 }
            }
            .animate-slideIn { animation: slideIn 0.3s cubic-bezier(.77,0,.18,1) both; }
            .animate-fadeIn { animation: fadeIn 0.2s both; }
          `}</style>
        </>
      )}

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative bg-white dark:bg-gray-900 w-full max-w-lg rounded-2xl shadow-2xl p-6 mx-4">
            <button
              aria-label="Close search"
              className="absolute top-3 right-3 p-1 text-gray-500 hover:text-cyan-700 dark:hover:text-emerald-400"
              onClick={closeSearch}
            >
              <X size={24} />
            </button>
            <input
              autoFocus
              type="search"
              placeholder="Search articles, news, topics..."
              className="w-full p-4 pr-12 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            />
            {/* Add dynamic search results below as needed */}
          </div>
        </div>
      )}
    </header>
  );
}
