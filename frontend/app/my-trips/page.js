"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function MyTripsPage() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetchTrips();
  }, []);

  async function fetchTrips() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    setTrips([]);
    return;
  }

  const { data, error } = await supabase
    .from("trips")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  setTrips(data);
}

async function deleteTrip(id) {
  const confirmDelete = confirm("Delete this trip?");

  if (!confirmDelete) return;

  const { data, error } = await supabase
    .from("trips")
    .delete()
    .eq("id", id)
    .select();

  console.log("Deleted:", data);
  console.log("Error:", error);

  if (error) {
    alert(error.message);
    return;
  }

  fetchTrips();
}

  return (
    <main className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-4xl font-bold text-cyan-400 mb-8">
        ❤️ My Saved Trips
      </h1>

      {trips.length === 0 ? (
        <p className="text-gray-400">No trips saved yet.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trips.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.city}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h2 className="text-2xl font-bold">
                  {item.trip.tripTitle}
                </h2>

                <p className="text-cyan-400 mt-2">
                  📍 {item.city}
                </p>

                <p className="text-gray-400 mt-2 line-clamp-3">
                  {item.trip.summary}
                </p>

                <p className="mt-3 font-semibold text-green-400">
                  💰 {item.trip.estimatedBudget}
                </p>

                <div className="flex gap-3 mt-5">
                  <Link
                    href={`/my-trips/${item.id}`}
                    className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg"
                  >
                    View
                  </Link>

                  <button
                    onClick={() => deleteTrip(item.id)}
                    className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}