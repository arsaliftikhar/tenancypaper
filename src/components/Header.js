"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHomeClick = (e) => {
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-5 h-[64px] sm:h-[80px] flex items-center justify-between relative">
        
        {/* LEFT: Logo */}
        <Link href="/" onClick={handleHomeClick} className="flex items-center shrink-0">
          <img src="/logo-horizontal.png" alt="TenancyContract Logo" className="h-[34px] sm:h-10 md:h-12 w-auto object-contain" />
        </Link>

        {/* RIGHT: Desktop Navigation & CTA Button */}
        <div className="flex items-center gap-10 lg:gap-16">
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <Link href="/" onClick={handleHomeClick} className="text-[15px] font-bold text-gray-600 hover:text-[#0066FF] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-[15px] font-bold text-gray-600 hover:text-[#0066FF] transition-colors">
              About
            </Link>
            <Link href="/how-it-works" className="text-[15px] font-bold text-gray-600 hover:text-[#0066FF] transition-colors">
              How it Works
            </Link>
            <Link href="/blogs" className="text-[15px] font-bold text-gray-600 hover:text-[#0066FF] transition-colors">
              Blog
            </Link>
            <Link href="/faqs" className="text-[15px] font-bold text-gray-600 hover:text-[#0066FF] transition-colors">
              FAQs
            </Link>
            <Link href="/contact" className="text-[15px] font-bold text-gray-600 hover:text-[#0066FF] transition-colors">
              Contact
            </Link>
          </nav>

          <Link href="/generate" className="hidden lg:flex px-6 py-2.5 bg-[#0066FF] text-white rounded-xl text-[14px] font-bold hover:bg-blue-600 shadow-[0_4px_14px_rgba(0,102,255,0.25)] transition-all">
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-100"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg p-5 flex flex-col gap-4 animate-in slide-in-from-top-2">
          <Link href="/" onClick={handleHomeClick} className="text-[16px] font-bold text-gray-700 hover:text-[#0066FF] p-2 rounded-lg hover:bg-gray-50">
            Home
          </Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] font-bold text-gray-700 hover:text-[#0066FF] p-2 rounded-lg hover:bg-gray-50">
            About
          </Link>
          <Link href="/how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] font-bold text-gray-700 hover:text-[#0066FF] p-2 rounded-lg hover:bg-gray-50">
            How it Works
          </Link>
          <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] font-bold text-gray-700 hover:text-[#0066FF] p-2 rounded-lg hover:bg-gray-50">
            Blog
          </Link>
          <Link href="/faqs" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] font-bold text-gray-700 hover:text-[#0066FF] p-2 rounded-lg hover:bg-gray-50">
            FAQs
          </Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] font-bold text-gray-700 hover:text-[#0066FF] p-2 rounded-lg hover:bg-gray-50">
            Contact
          </Link>
          <div className="pt-4 border-t border-gray-100 mt-2">
            <Link href="/generate" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center w-full py-3 bg-[#0066FF] text-white rounded-xl text-[16px] font-bold hover:bg-blue-600 shadow-md">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
