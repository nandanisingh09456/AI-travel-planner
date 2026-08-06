"use client";

import Link from "next/link";
import {
  Sparkles,
  Globe2,
  MapPinned,
  Plane,
  Hotel,
  Wallet,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#030712] text-white">

      {/* Background Blur */}

      <div className="absolute left-20 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="absolute right-20 bottom-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT */}

        <div>

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-700 bg-blue-900/20 px-5 py-2 text-blue-400">

            <Sparkles size={18} />

            AI Powered Travel Planner

          </div>

       <h1 className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">  

            Plan Your Dream Trip

            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">

              With Artificial Intelligence

            </span>

          </h1>

          <p className="mt-8 text-lg text-slate-400 leading-8">

            Discover destinations, generate AI itineraries,

            compare hotels, search flights,

            calculate budgets and explore attractions —

            all in one platform.

          </p>

         <div className="mt-10 flex flex-col sm:flex-row gap-4"> 

            <Link
              href="/planner"
         className="rounded-xl bg-blue-600 px-6 py-3 text-center font-semibold hover:bg-blue-700 transition"    
            >
              ✈ Start Planning
            </Link>

            <Link
              href="/dashboard"
              className="rounded-xl border border-slate-600 px-8 py-4 hover:border-blue-500 transition"
            >
              View Dashboard
            </Link>

          </div>

          {/* Statistics */}

     <div className="mt-12 grid grid-cols-3 gap-6 text-center sm:text-left">   

            <div>
              <h2 className="text-3xl font-bold text-blue-400">
                10K+
              </h2>

              <p className="text-slate-400">
                Happy Travelers
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">
                500+
              </h2>

              <p className="text-slate-400">
                Destinations
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-purple-400">
                98%
              </h2>

              <p className="text-slate-400">
                Satisfaction
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

      <div className="rounded-[32px] border border-slate-700 bg-[#111827] p-6 md:p-10 shadow-2xl">  

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <Feature
                icon={<Globe2 />}
                title="Destinations"
                subtitle="Worldwide"
              />

              <Feature
                icon={<Plane />}
                title="Flights"
                subtitle="Best Deals"
              />

              <Feature
                icon={<Hotel />}
                title="Hotels"
                subtitle="Luxury & Budget"
              />

              <Feature
                icon={<MapPinned />}
                title="Attractions"
                subtitle="Top Rated"
              />

              <Feature
                icon={<Wallet />}
                title="Budget"
                subtitle="AI Estimate"
              />

              <Feature
                icon={<Sparkles />}
                title="AI Planner"
                subtitle="Smart Itinerary"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

function Feature({ icon, title, subtitle }) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-[#1E293B] p-6 hover:border-blue-500 transition">

      <div className="text-blue-400 mb-4">
        {icon}
      </div>

      <h3 className="font-bold text-lg">
        {title}
      </h3>

      <p className="text-slate-400 mt-2">
        {subtitle}
      </p>

    </div>
  );
}