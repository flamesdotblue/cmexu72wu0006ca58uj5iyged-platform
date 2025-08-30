import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Suites from './components/Suites';
import BookingCTA from './components/BookingCTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Suites />
        <BookingCTA />
      </main>
      <footer className="border-t border-white/10 bg-black/60 backdrop-blur px-6 md:px-12 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Spacy — Orbital Hospitality</p>
          <div className="flex items-center gap-4 text-white/60 text-sm">
            <a href="#suites" className="hover:text-white transition">Suites</a>
            <a href="#booking" className="hover:text-white transition">Book</a>
            <a href="#" className="hover:text-white transition">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
