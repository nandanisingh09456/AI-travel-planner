"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import jsPDF from "jspdf";
import { supabase } from "@/lib/supabase";


export default function TripDetailsPage() {
  const { id } = useParams();

  const [trip, setTrip] = useState(null);

  useEffect(() => {
    fetchTrip();
  }, []);

  async function fetchTrip() {
    const { data, error } = await supabase
      .from("trips")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(error);
      return;
    }

    setTrip(data);
  }

  if (!trip) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <h1 className="text-3xl">Loading...</h1>
      </main>
    );
  }

    if (!trip) {
    return (
      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <h1 className="text-3xl">Loading...</h1>
      </main>
    );
  }

  const t = trip.trip;

  // 👇 ADD THIS FUNCTION HERE
  function downloadPDF() {
    const pdf = new jsPDF();

    pdf.setFontSize(22);
    pdf.text(t.tripTitle, 20, 20);

    pdf.setFontSize(14);
    pdf.text(`City: ${trip.city}`, 20, 35);

    pdf.text(`Budget: ${t.estimatedBudget}`, 20, 45);

    pdf.text("Summary:", 20, 60);
    pdf.text(t.summary, 20, 70, { maxWidth: 170 });

    let y = 100;

    pdf.text("Itinerary", 20, y);
    y += 10;

    t.days.forEach((day) => {
      pdf.text(`Day ${day.day}`, 20, y);
      y += 10;
      pdf.text(`Morning: ${day.morning}`, 25, y);
      y += 8;
      pdf.text(`Afternoon: ${day.afternoon}`, 25, y);
      y += 8;
      pdf.text(`Evening: ${day.evening}`, 25, y);
      y += 8;
      pdf.text(`Food: ${day.food}`, 25, y);
      y += 15;
    });

    pdf.save(`${trip.city}-trip.pdf`);
  }


 return (
  <main className="min-h-screen bg-slate-950 text-white p-8">

   <div className="flex justify-between items-center mb-6">

  <Link
    href="/my-trips"
    className="bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-lg"
  >
    ← Back to My Trips
  </Link>

  <button
    onClick={downloadPDF}
    className="bg-green-600 hover:bg-green-700 px-5 py-3 rounded-lg"
  >
    📄 Download PDF
  </button>

</div>

    <img
      src={trip.image}
      alt={trip.city}
      className="w-full h-96 object-cover rounded-xl"
    />

      <h1 className="text-5xl font-bold text-cyan-400 mt-8">
        {t.tripTitle}
      </h1>

      <p className="text-gray-300 mt-4">
        {t.summary}
      </p>

      <div className="bg-slate-900 rounded-xl p-5 mt-6">
        <h2 className="text-xl font-bold">
          Estimated Budget
        </h2>

        <p className="text-green-400 text-2xl mt-2">
          {t.estimatedBudget}
        </p>
      </div>

      <h2 className="text-3xl font-bold mt-10 mb-6">
        📅 Itinerary
      </h2>

      {t.days?.map((day) => (
        <div
          key={day.day}
          className="bg-slate-900 rounded-xl p-6 mb-5"
        >
          <h3 className="text-2xl font-bold text-cyan-400">
            Day {day.day}
          </h3>

          <p className="mt-3">
            🌅 <strong>Morning:</strong> {day.morning}
          </p>

          <p className="mt-2">
            🍽 <strong>Afternoon:</strong> {day.afternoon}
          </p>

          <p className="mt-2">
            🌙 <strong>Evening:</strong> {day.evening}
          </p>

          <p className="mt-2">
            🍜 <strong>Food:</strong> {day.food}
          </p>
        </div>
      ))}

      <h2 className="text-3xl font-bold mt-10 mb-6">
        🏨 Recommended Hotels
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {t.hotels?.map((hotel, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-xl p-5"
          >
            <h3 className="text-xl font-bold">
              {hotel.name}
            </h3>

            <p className="text-gray-300 mt-2">
              {hotel.description}
            </p>

            <p className="mt-3">
              ⭐ {hotel.rating}
            </p>

            <p>
              💰 {hotel.price}
            </p>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                hotel.name + " " + trip.city
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              📍 View on Google Maps
            </a>
          </div>
        ))}
      </div>

    </main>
  );
}