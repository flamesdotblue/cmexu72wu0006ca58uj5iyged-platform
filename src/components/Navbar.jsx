import React from 'react';
import { Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto mt-4 px-4 md:px-6">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg py-3 px-4 md:px-6 shadow-lg shadow-black/20">
          <a href="#home" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 to-cyan-400 text-white">
              <Rocket size={18} />
            </span>
            <span className="text-lg md:text-xl font-semibold tracking-tight">Spacy</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#suites" className="text-white/70 hover:text-white transition">Suites</a>
            <a href="#booking" className="text-white/70 hover:text-white transition">Book</a>
            <a href="#about" className="text-white/70 hover:text-white transition">About</a>
          </nav>
          <a href="#booking" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-4 py-2 text-sm font-semibold shadow-md hover:shadow-indigo-500/25 transition">
            Book Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
