import React from 'react';
import { Calendar, Users, Rocket } from 'lucide-react';

const BookingCTA = () => {
  return (
    <section id="booking" className="relative py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative min-h-[280px] md:min-h-[360px]">
              <img
                src="https://images.unsplash.com/photo-1447433819943-74a20887a81e?q=80&w=1600&auto=format&fit=crop"
                alt="Earth view from orbit"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 text-cyan-200">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                    <Rocket size={18} />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">Your orbit awaits</h3>
                    <p className="text-white/80 text-sm">Complimentary shuttle transfer from LEO Gateport.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold">Reserve your stay</h3>
              <p className="mt-2 text-white/70 text-sm">Select your launch window and crew size. Our concierge will confirm within 12 minutes.</p>
              <form className="mt-6 grid grid-cols-1 gap-4">
                <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                  <Calendar size={18} className="text-white/70" />
                  <input type="date" className="w-full bg-transparent outline-none placeholder-white/50 text-white" aria-label="Check-in" />
                </label>
                <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                  <Calendar size={18} className="text-white/70" />
                  <input type="date" className="w-full bg-transparent outline-none placeholder-white/50 text-white" aria-label="Check-out" />
                </label>
                <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
                  <Users size={18} className="text-white/70" />
                  <select className="w-full bg-transparent outline-none text-white/90">
                    <option className="bg-black">1 guest</option>
                    <option className="bg-black">2 guests</option>
                    <option className="bg-black">3 guests</option>
                    <option className="bg-black">4 guests</option>
                  </select>
                </label>
                <button type="button" className="mt-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 font-semibold shadow-lg hover:shadow-indigo-500/30 transition">
                  Request Availability
                </button>
                <p className="text-xs text-white/60">By requesting, you agree to our orbital safety briefing and station policies.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
