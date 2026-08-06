"use client";

import {
  Sparkles,
  Plane,
  Hotel,
  Wallet,
  MapPinned,
  Utensils,
} from "lucide-react";

import FeatureCard from "./FeatureCard";

export default function FeaturesSection() {
  return (
    <section className="bg-[#030712] py-28">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <h2 className="text-5xl font-bold text-white">
            Everything You Need
          </h2>

          <p className="mt-5 text-slate-400 text-lg">
            Plan your complete journey with AI.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          <FeatureCard
            icon={<Sparkles size={30} />}
            title="AI Itinerary"
            subtitle="Generate smart day-by-day travel plans powered by AI."
            color="from-violet-500 to-purple-600"
          />

          <FeatureCard
            icon={<Hotel size={30} />}
            title="Hotel Finder"
            subtitle="Discover luxury and budget hotels instantly."
            color="from-blue-500 to-cyan-500"
          />

          <FeatureCard
            icon={<Plane size={30} />}
            title="Flight Search"
            subtitle="Compare airline prices and find the best deals."
            color="from-cyan-500 to-blue-500"
          />

          <FeatureCard
            icon={<Utensils size={30} />}
            title="Restaurants"
            subtitle="Explore local food, cafés and fine dining."
            color="from-pink-500 to-purple-500"
          />

          <FeatureCard
            icon={<MapPinned size={30} />}
            title="Attractions"
            subtitle="Visit the best places recommended by AI."
            color="from-indigo-500 to-blue-500"
          />

          <FeatureCard
            icon={<Wallet size={30} />}
            title="Budget Planner"
            subtitle="Estimate expenses before your journey starts."
            color="from-cyan-500 to-teal-500"
          />

        </div>

      </div>

    </section>
  );
}