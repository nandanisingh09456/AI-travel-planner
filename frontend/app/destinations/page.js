import Link from "next/link";
import { destinations } from "@/data/destinations";

export default function DestinationsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        Popular Destinations
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <Link
            key={destination.city}
            href={`/destinations/${destination.city
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 text-center"
          >
            {destination.city}
          </Link>
        ))}
      </div>
    </main>
  );
}