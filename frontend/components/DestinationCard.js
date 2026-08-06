"use client";

import { useState, useRef } from "react";
import { Heart, MapPin, Star } from "lucide-react";
import Link from "next/link";

export default function DestinationCard({ destination }) {
  const [currentImage, setCurrentImage] = useState(0);
const intervalRef = useRef(null);
const handleMouseEnter = () => {
  if (!destination.images || destination.images.length <= 1) return;

  intervalRef.current = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % destination.images.length);
  }, 800);
};

const handleMouseLeave = () => {
  if (intervalRef.current) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }
  setCurrentImage(0);
};
  const {
    city,
    country,
    image,
    rating,
    price,
  } = destination;

  return (
    <div
  className="group overflow-hidden rounded-3xl border border-slate-700 bg-[#111827] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/20"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
       <img
       src={destination.images?.[currentImage] || "/images/placeholder.jpg"}
       alt={destination.city}
       className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
/>

        {/* Rating */}
        <div className="absolute top-4 left-4 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-yellow-400 backdrop-blur">
          <Star size={15} fill="currentColor" />
          {rating}
        </div>

        {/* Favorite */}
        <button className="absolute top-4 right-4 rounded-full bg-black/60 p-2 text-white transition hover:bg-red-500">
          <Heart size={18} />
        </button>

        {/* Gradient */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {city}
        </h3>

        <div className="mt-2 flex items-center gap-2 text-slate-400">
          <MapPin size={18} />
          <span>{country}</span>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">
              Starting From
            </p>

            <h2 className="text-2xl font-bold text-cyan-400">
              ${price}
            </h2>
          </div>

      <Link
      href={`/destinations/${city.toLowerCase().replace(/\s+/g, "-")}`}
      className="rounded-xl bg-cyan-600 px-5 py-3 font-semibold text-white transition hover:bg-cyan-700"
     >
      Explore
    </Link>
        </div>
      </div>
    </div>
  );
}