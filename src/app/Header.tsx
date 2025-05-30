"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll lock bij open mobiel menu
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Sluit menu bij klik buiten menu
  useEffect(() => {
    if (!mobileOpen) return;
    function handleClick(e: MouseEvent) {
      const nav = document.getElementById("mobile-nav");
      if (nav && !nav.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-gray-200 pt-safe pb-0">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <div className="flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={36} height={36} />
          <span className="font-bold text-xl tracking-tight text-primary">Advies Over Cijfers</span>
        </div>
        <nav className="hidden md:flex gap-8 items-center text-base font-medium">
          <Link href="/" className="hover:text-primary transition">Home</Link>
          <Link href="/diensten" className="hover:text-primary transition">Diensten</Link>
          <Link href="/over" className="hover:text-primary transition">Over Ons</Link>
          <Link href="/contact" className="hover:text-primary transition">Contact</Link>
        </nav>
        <Link href="/contact" className="hidden md:inline-block bg-action text-white rounded-btn px-6 py-3 font-semibold shadow hover:bg-primary transition">Gratis intake</Link>
        {/* Hamburger */}
        <button type="button" className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Open menu" onClick={() => setMobileOpen(v => !v)}>
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          id="mobile-nav"
          className="md:hidden bg-white border-t border-gray-200 px-4 pb-8 pt-4 flex flex-col gap-3 shadow-lg animate-slide-in fixed inset-x-0 top-[64px] z-40 min-h-[calc(100vh-64px)]"
          style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
        >
          <Link href="/" className="py-3 px-2 rounded hover:bg-primary/10 transition text-lg" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link href="/diensten" className="py-3 px-2 rounded hover:bg-primary/10 transition text-lg" onClick={() => setMobileOpen(false)}>Diensten</Link>
          <Link href="/over" className="py-3 px-2 rounded hover:bg-primary/10 transition text-lg" onClick={() => setMobileOpen(false)}>Over Ons</Link>
          <Link href="/contact" className="py-3 px-2 rounded hover:bg-primary/10 transition text-lg" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link href="/contact" className="w-full bg-action text-white rounded-btn px-6 py-4 font-semibold shadow hover:bg-primary transition text-center mt-4 text-lg" onClick={() => setMobileOpen(false)}>Gratis intake</Link>
        </nav>
      )}
    </header>
  );
}

// Tailwind animatie toevoegen in globals.css:
// @keyframes slide-in { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: none; } }
// .animate-slide-in { animation: slide-in 0.25s cubic-bezier(0.4,0,0.2,1); }
