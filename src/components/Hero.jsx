import React from 'react';
import { motion } from 'framer-motion';

const Starfield = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(56,189,248,.25),transparent_60%),radial-gradient(60%_40%_at_80%_10%,rgba(99,102,241,.25),transparent_60%),radial-gradient(40%_40%_at_20%_10%,rgba(147,51,234,.25),transparent_60%)]" />
    <div className="absolute inset-0 opacity-60" style={{backgroundImage: 'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,.6) 0, transparent 2px), radial-gradient(1px 1px at 80% 20%, rgba(255,255,255,.5) 0, transparent 2px), radial-gradient(1px 1px at 50% 70%, rgba(255,255,255,.5) 0, transparent 2px), radial-gradient(1px 1px at 10% 80%, rgba(255,255,255,.4) 0, transparent 2px), radial-gradient(1px 1px at 90% 60%, rgba(255,255,255,.4) 0, transparent 2px)'}} />
  </div>
);

const Hero = () => {
  return (
    <section id="home" className="relative pt-28 md:pt-36 pb-20 md:pb-28">
      <Starfield />
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <span className="inline-block mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs tracking-wider uppercase text-white/70">Now Boarding • Q4 2042</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight">
            Stay among the stars at
            <span className="block bg-gradient-to-r from-indigo-300 via-cyan-200 to-emerald-200 bg-clip-text text-transparent"> Spacy Orbital Hotel</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-white/70">
            Wake up to an Earthrise, float through serene lounges, and dine with cosmic panoramas. Luxury hospitality, reimagined in low Earth orbit.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#booking" className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 font-semibold shadow-lg hover:shadow-indigo-500/30 transition">
              Reserve Your Orbit
            </a>
            <a href="#suites" className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 hover:bg-white/10 transition">
              Explore Suites
            </a>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-b from-transparent to-black" />
    </section>
  );
};

export default Hero;
