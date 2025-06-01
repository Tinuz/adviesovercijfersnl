"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Sticky shadow bij scrollen
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll lock bij open mobiel menu
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Sluit menu bij klik buiten menu
  useEffect(() => {
    if (!mobileOpen) return;
    function handle(e: MouseEvent) {
      const nav = document.getElementById("mobile-nav");
      if (nav && !nav.contains(e.target as Node)) setMobileOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [mobileOpen]);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all ${scrolled ? "shadow-md" : "shadow-none"}`} style={{fontFamily: 'Inter, Manrope, sans-serif'}}>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logo & naam */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="font-bold text-2xl tracking-tight text-[#005B96] group-hover:text-blue-700 transition-all">Advies Over Cijfers</span>
        </Link>
        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-6 text-base font-semibold">
          <Link href="/" className="px-4 py-2 rounded text-[#005B96] hover:text-blue-700 transition-all">Home</Link>
          <Link href="/diensten" className="px-4 py-2 rounded text-[#005B96] hover:text-blue-700 transition-all">Diensten</Link>
          <Link href="/over" className="px-4 py-2 rounded text-[#005B96] hover:text-blue-700 transition-all">Over ons</Link>
          <a href="#contact" className="ml-4 px-6 py-2 rounded bg-[#00A86B] text-white font-semibold shadow hover:bg-[#008e59] transition-all focus:outline-none focus:ring-2 focus:ring-[#00A86B] focus:ring-offset-2">Gratis intake</a>
        </nav>
        {/* Hamburger */}
        <button
          type="button"
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#005B96]"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#005B96"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {/* Mobile overlay menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-white/95 flex flex-col items-center justify-center animate-fade-in">
          <button
            type="button"
            className="absolute top-6 right-6 p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#005B96]"
            aria-label="Sluit menu"
            onClick={() => setMobileOpen(false)}
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#005B96"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <nav id="mobile-nav" className="flex flex-col items-center gap-8 text-2xl font-semibold">
            <Link href="/" className="px-6 py-2 rounded text-[#005B96] hover:text-blue-700 transition-all" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/diensten" className="px-6 py-2 rounded text-[#005B96] hover:text-blue-700 transition-all" onClick={() => setMobileOpen(false)}>Diensten</Link>
            <Link href="/over" className="px-6 py-2 rounded text-[#005B96] hover:text-blue-700 transition-all" onClick={() => setMobileOpen(false)}>Over ons</Link>
            <a href="#contact" className="mt-6 px-8 py-3 rounded bg-[#00A86B] text-white font-semibold shadow hover:bg-[#008e59] transition-all text-xl" onClick={() => setMobileOpen(false)}>Gratis intake</a>
          </nav>
        </div>
      )}
    </header>
  );
}

// In globals.css toevoegen:
// @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
// .animate-fade-in { animation: fade-in 0.25s cubic-bezier(0.4,0,0.2,1); }
