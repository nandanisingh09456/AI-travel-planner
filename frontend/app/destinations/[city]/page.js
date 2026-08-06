import { destinations } from "@/data/destinations";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function DestinationPage({ params }) {
  const citySlug = (await params).city;
  
    
  const destination = destinations.find(
    (item) =>
      item.city.toLowerCase().replace(/\s+/g, "-") === citySlug
  );

  if (!destination) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      {/* Hero Image */}
      <div className="relative">
        <img
          src={destination.images[0]}
          alt={destination.city}
          className="h-[500px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="max-w-7xl mx-auto w-full p-8">
            <h1 className="text-5xl font-bold">
              {destination.city}
            </h1>

            <p className="mt-2 text-xl text-gray-200">
              📍 {destination.country}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Price & Rating */}
        <div className="flex flex-wrap justify-between gap-6 rounded-2xl bg-[#111827] p-6">

          <div>
            <h3 className="text-gray-400">Starting Price</h3>
            <p className="text-3xl font-bold text-cyan-400">
              ${destination.price}
            </p>
          </div>

          <div>
            <h3 className="text-gray-400">Rating</h3>
            <p className="text-3xl font-bold text-yellow-400">
              ⭐ {destination.rating}
            </p>
          </div>

          <div>
            <h3 className="text-gray-400">Best Time</h3>
            <p className="text-xl font-semibold">
              {destination.bestTime}
            </p>
          </div>

        </div>

        {/* Description */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-4">
            About {destination.city}
          </h2>

          <p className="text-gray-300 leading-8">
            {destination.description}
          </p>
        </section>

        {/* Gallery */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">
            Gallery
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {destination.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${destination.city} ${index + 1}`}
                className="h-72 w-full rounded-2xl object-cover transition duration-300 hover:scale-105"
              />
            ))}
          </div>
        </section>

        {/* Attractions */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">
            Top Attractions
          </h2>

          <ul className="grid gap-4 md:grid-cols-2">
            {destination.attractions.map((place) => (
              <li
                key={place}
                className="rounded-xl bg-[#111827] p-4 border border-slate-700"
              >
                📍 {place}
              </li>
            ))}
          </ul>
        </section>

        {/* Foods */}
        <section className="mt-12">
          <h2 className="text-3xl font-bold mb-6">
            Famous Foods
          </h2>

          <ul className="grid gap-4 md:grid-cols-2">
            {destination.foods.map((food) => (
              <li
                key={food}
                className="rounded-xl bg-[#111827] p-4 border border-slate-700"
              >
                🍽️ {food}
              </li>
            ))}
          </ul>
        </section>

        {/* AI Planner */}
        <section className="mt-16 rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-8 text-center">

          <h2 className="text-4xl font-bold">
            Plan Your AI Trip
          </h2>

          <p className="mt-4 text-lg text-gray-100">
            Let AI create a personalized itinerary for your visit to{" "}
            {destination.city}.
          </p>

          <Link
       href={`/planner?city=${destination.city}`}
       className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-cyan-700 transition hover:scale-105"
       >
         Generate AI Itinerary
       </Link>

        </section>

        {/* Back Button */}
        <div className="mt-12">
          <Link
            href="/"
            className="inline-block rounded-xl bg-slate-700 px-6 py-3 font-semibold hover:bg-slate-600"
          >
            ← Back to Home
          </Link>
        </div>

      </div>
    </main>
  );
}