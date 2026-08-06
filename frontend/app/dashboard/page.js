import Link from "next/link";
import {
  Plane,
  Heart,
  MapPin,
  PlusCircle,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-8 py-12">
        <h1 className="text-5xl font-bold">
          Welcome to your
          <span className="text-cyan-400"> Dashboard</span>
        </h1>

        <p className="mt-4 text-slate-400 text-lg">
          Manage your trips, discover destinations, and create
          unforgettable journeys with AI.
        </p>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-8">

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
          <Plane className="text-cyan-400 mb-4" size={40} />
          <h2 className="text-4xl font-bold">Unlimited</h2>
          <p className="text-slate-400 mt-2">
            AI Trip Planning
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
          <Heart className="text-pink-500 mb-4" size={40} />
          <h2 className="text-4xl font-bold">Saved</h2>
          <p className="text-slate-400 mt-2">
            Favorite Trips
          </p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
          <MapPin className="text-green-400 mb-4" size={40} />
          <h2 className="text-4xl font-bold">25+</h2>
          <p className="text-slate-400 mt-2">
            Destinations
          </p>
        </div>

      </section>

      {/* Quick Actions */}
      <section className="max-w-7xl mx-auto px-8 mt-16">

        <h2 className="text-3xl font-bold mb-8">
          Quick Actions
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <Link
            href="/planner"
            className="bg-cyan-600 hover:bg-cyan-700 rounded-2xl p-8 transition"
          >
            <PlusCircle size={40} />
            <h3 className="text-2xl font-bold mt-4">
              Plan New Trip
            </h3>

            <p className="mt-3">
              Generate a personalized AI itinerary.
            </p>
          </Link>

          <Link
            href="/my-trips"
            className="bg-pink-600 hover:bg-pink-700 rounded-2xl p-8 transition"
          >
            <Heart size={40} />
            <h3 className="text-2xl font-bold mt-4">
              Saved Trips
            </h3>

            <p className="mt-3">
              View your saved itineraries.
            </p>
          </Link>

          <Link
            href="/destinations"
            className="bg-green-600 hover:bg-green-700 rounded-2xl p-8 transition"
          >
            <MapPin size={40} />
            <h3 className="text-2xl font-bold mt-4">
              Explore Destinations
            </h3>

            <p className="mt-3">
              Browse popular places around the world.
            </p>
          </Link>

        </div>

      </section>

      {/* Tips */}
      <section className="max-w-7xl mx-auto px-8 mt-16 pb-20">

        <div className="bg-slate-900 rounded-2xl p-10 border border-slate-700">

          <h2 className="text-3xl font-bold text-cyan-400">
            Travel Tips
          </h2>

          <ul className="mt-6 space-y-4 text-slate-300">
            <li>✈️ Plan your trip at least 2–3 weeks in advance.</li>
            <li>🌤 Always check the weather before packing.</li>
            <li>📄 Download your itinerary as a PDF for offline access.</li>
            <li>❤️ Save your favorite trips to revisit them later.</li>
            <li>🗺 Explore new destinations with AI recommendations.</li>
          </ul>

        </div>

      </section>

    </main>
  );
}