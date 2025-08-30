import React from 'react';
import { Star, Moon, Sun } from 'lucide-react';

const cards = [
  {
    title: 'Nebula Suites',
    icon: Star,
    desc: 'Panoramic Earth views, private observation dome, zero-g silk bedding.',
    img: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Lunar Lofts',
    icon: Moon,
    desc: 'Minimalist design with lunar-inspired textures and mood lighting.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Solar Penthouses',
    icon: Sun,
    desc: 'Expansive living area, private stargazing terrace, dedicated AI butler.',
    img: 'https://images.unsplash.com/photo-1447433909565-04bfc496fe9d?q=80&w=1600&auto=format&fit=crop',
  },
];

const Suites = () => {
  return (
    <section id="suites" className="relative py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-10 md:mb-14 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Suites crafted for the cosmos</h2>
            <p className="mt-3 text-white/70 max-w-2xl">Each suite balances tranquility and wonder so you can float, dream, and gaze beyond.</p>
          </div>
          <a href="#booking" className="hidden md:inline-flex rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold hover:bg-white/10 transition">Check Availability</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map(({ title, icon: Icon, desc, img }) => (
            <article key={title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img src={img} alt={title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>
              <div className="p-5 md:p-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500/80 to-cyan-500/80 text-white">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
                </div>
                <p className="mt-3 text-sm md:text-base text-white/70">{desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-300/90">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" className="opacity-90" />
                    ))}
                  </div>
                  <a href="#booking" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200 transition">Book this suite →</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Suites;
