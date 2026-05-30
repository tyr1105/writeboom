"use client";

import { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
            WriteBoom
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#tool" className="hover:text-orange-500 transition-colors">开始创作</a>
          <a href="#features" className="hover:text-orange-500 transition-colors">功能特色</a>
          <a href="#pricing" className="hover:text-orange-500 transition-colors">定价方案</a>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-4 py-3 space-y-2 text-sm">
          <a href="#tool" className="block py-2 text-gray-600 hover:text-orange-500" onClick={() => setMobileOpen(false)}>开始创作</a>
          <a href="#features" className="block py-2 text-gray-600 hover:text-orange-500" onClick={() => setMobileOpen(false)}>功能特色</a>
          <a href="#pricing" className="block py-2 text-gray-600 hover:text-orange-500" onClick={() => setMobileOpen(false)}>定价方案</a>
        </div>
      )}
    </header>
  );
}
