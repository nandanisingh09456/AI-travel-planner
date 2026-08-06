"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/lib/supabase";
import MiraChat from "@/components/MiraChat";

export default function PlannerPage() {
  const searchParams = useSearchParams();

  const defaultCity = searchParams.get("city") || "";

  const [city, setCity] = useState(defaultCity);
  const [days, setDays] = useState(3);
  const [budget, setBudget] = useState("Standard");
  const [travelers, setTravelers] = useState(2);
  const [startDate, setStartDate] = useState("");
  const [travelStyle, setTravelStyle] = useState("Adventure");
  const [question, setQuestion] = useState("");
const [chatLoading, setChatLoading] = useState(false);
const [messages, setMessages] = useState([
  {
    role: "assistant",
    content:
      "👋 Hi! I'm Mira AI. Ask me anything about your trip.",
  },
]);

  const [loading, setLoading] = useState(false);
  const [trip, setTrip] = useState(null);
  const [image, setImage] = useState("");
  const [weather, setWeather] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [amount, setAmount] = useState(100);
  const [conversion, setConversion] = useState(null);
  // ==========================
  // Save Trip
  // ==========================

  const saveTrip = async () => {
    if (!trip) {
      alert("Generate a trip first!");
      return;
    }
    const {
  data: { user },
} = await supabase.auth.getUser();

if (!user) {
  alert("Please login first.");
  return;
}

    const { data,error } = await supabase.from("trips").insert([
      {
        city,
        trip,
        image,
          user_id: user.id,
      },
    ])
    .select();

    console.log("Saved Data:", data)

    if (error) {
      
      alert(error.message);
      return;

    } else {
      alert("🎉 Trip saved successfully!");
    }
  };

  // ==========================
  // Google Maps
  // ==========================

  const getGoogleMapsLink = (place) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${place} ${city}`
    )}`;
  };

  const askMira = async () => {
  if (!question.trim()) {
    alert("Please ask Mira a question.");
    return;
  }

  if (!trip) {
    alert("Generate a trip first.");
    return;
  }

  try {
    setChatLoading(true);

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        trip,
        question,
      }),
    });

    const data = await response.json();

    if (data.error) {
      alert(data.error);
      return;
    }

    setAnswer(data.answer);

  } catch (error) {
    console.error(error);
    alert("Failed to contact Mira AI.");
  } finally {
    setChatLoading(false);
  }
};

  // ==========================
  // Generate AI Trip
  // ==========================

  const generateItinerary = async () => {
    try {
      setLoading(true);
      setTrip(null);
      setImage("");
      setWeather(null);

      const response = await fetch("/api/generate-trip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          city,
          days,
          budget,
          travelers,
          startDate,
          travelStyle,
        }),
      });

      const data = await response.json();
       console.log(data);
    
      const imageResponse = await fetch(
        `/api/destination-image?city=${encodeURIComponent(city)}`
      );

      const imageData = await imageResponse.json();

      setImage(imageData.image || "");

      const weatherResponse = await fetch(
  `/api/weather?city=${encodeURIComponent(city)}`
);

const weatherData = await weatherResponse.json();

console.log("Weather Response:", weatherData);

setWeather(weatherData);
setTrip(data);

// 🍜 Fetch AI Restaurant Recommendations
const restaurantResponse = await fetch("/api/restaurants", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    city,
  }),
});

const restaurantData = await restaurantResponse.json();

console.log("Restaurants:", restaurantData);

setRestaurants(restaurantData.restaurants || []);

    } catch (error) {
      console.error(error);
      alert("Failed to generate itinerary.");
    } finally {
      setLoading(false);
    }
  };
  const convertCurrency = async () => {
  try {
    const response = await fetch(
      `/api/currency?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
    );

    const data = await response.json();

    setConversion(data);
  } catch (error) {
    console.error(error);
    alert("Currency conversion failed.");
  }
};

  return (
    <main className="min-h-screen bg-slate-950 text-white py-10 px-4">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-center text-cyan-400 mb-2">
          AI Travel Planner
        </h1>

        <p className="text-center text-slate-400 mb-10">
          Plan your perfect vacation using AI.
        </p>

        <div className="bg-slate-900 rounded-2xl shadow-xl p-8">

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 font-semibold">
                Destination
              </label>

              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Number of Days
              </label>

              <input
                type="number"
                min="1"
                max="30"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Budget
              </label>

              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
              >
                <option>Budget</option>
                <option>Standard</option>
                <option>Luxury</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Travelers
              </label>

              <input
                type="number"
                min="1"
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
                className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Start Date
              </label>

              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Travel Style
              </label>

              <select
                value={travelStyle}
                onChange={(e) => setTravelStyle(e.target.value)}
                className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3"
              >
                <option>Adventure</option>
                <option>Relaxation</option>
                <option>Family</option>
                <option>Romantic</option>
                <option>Luxury</option>
                <option>Backpacking</option>
              </select>
            </div>

          </div>

          <button
            onClick={generateItinerary}
            disabled={loading}
            className="mt-8 w-full bg-cyan-500 hover:bg-cyan-600 disabled:bg-gray-600 py-4 rounded-xl text-lg font-bold transition"
          >
            {loading ? "Generating AI Trip..." : "Generate AI Trip"}
          </button>

          {trip && (
          <>
            <div className="mt-10">

  <img
    src={
      image ||
      "https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg"
    }
    alt={trip.tripTitle}
    className="w-full h-80 object-cover rounded-xl mb-6"
  />

  {weather && (
    <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 mb-6">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">
        🌤 Current Weather
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

        <div>
          <p className="text-slate-400">Temperature</p>
          <p className="text-2xl font-bold">
            {weather.temperature}°C
          </p>
        </div>

        <div>
          <p className="text-slate-400">Condition</p>
          <p>{weather.condition}</p>
        </div>

        <div>
          <p className="text-slate-400">Humidity</p>
          <p>{weather.humidity}%</p>
        </div>

        <div>
          <p className="text-slate-400">Wind</p>
          <p>{weather.wind} m/s</p>
        </div>

      </div>
    </div>
  )}

  <h2 className="text-3xl font-bold text-cyan-400">
    {trip.tripTitle}
  </h2>

  <p className="mt-2 text-slate-300">
    {trip.summary}
  </p>

  <div className="mt-4 rounded-lg bg-cyan-900/20 border border-cyan-600 p-4">
    <strong>Estimated Budget:</strong> {trip.estimatedBudget}
  </div>

  <div className="mt-8 space-y-6">

    {trip.days?.map((day) => (

      <div
        key={day.day}
        className="rounded-xl bg-slate-800 border border-slate-700 p-6"
      >

        <h3 className="text-2xl font-bold text-cyan-400 mb-4">
          Day {day.day}
        </h3>

        <p>
          🌅 <strong>Morning:</strong><br />
          {day.morning}
        </p>

        <a
          href={getGoogleMapsLink(day.morning)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline text-sm"
        >
          📍 Open in Google Maps
        </a>

        <p className="mt-3">
          🍽 <strong>Afternoon:</strong><br />
          {day.afternoon}
        </p>

        <a
          href={getGoogleMapsLink(day.afternoon)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline text-sm"
        >
          📍 Open in Google Maps
        </a>

        <p className="mt-3">
          🌙 <strong>Evening:</strong><br />
          {day.evening}
        </p>

        <a
          href={getGoogleMapsLink(day.evening)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline text-sm"
        >
          📍 Open in Google Maps
        </a>

        <p className="mt-3">
          🍜 <strong>Food:</strong><br />
          {day.food}
        </p>

        <a
          href={getGoogleMapsLink(day.food)}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:underline text-sm"
        >
          📍 Open in Google Maps
        </a>

      </div>

    ))}

  </div>
  

  </div>
  {/* Currency Converter */}

<div className="mt-12 rounded-2xl bg-slate-800 border border-slate-700 p-6">
  <h2 className="text-3xl font-bold text-cyan-400 mb-6">
    💱 Currency Converter
  </h2>

  <div className="grid md:grid-cols-4 gap-4">

    <select
      value={fromCurrency}
      onChange={(e) => setFromCurrency(e.target.value)}
      className="bg-slate-900 border border-slate-700 rounded-lg p-3"
    >
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="INR">INR</option>
      <option value="GBP">GBP</option>
      <option value="JPY">JPY</option>
      <option value="AUD">AUD</option>
      <option value="CAD">CAD</option>
    </select>

    <select
      value={toCurrency}
      onChange={(e) => setToCurrency(e.target.value)}
      className="bg-slate-900 border border-slate-700 rounded-lg p-3"
    >
      <option value="INR">INR</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
      <option value="JPY">JPY</option>
      <option value="AUD">AUD</option>
      <option value="CAD">CAD</option>
    </select>

    <input
      type="number"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      placeholder="Amount"
      className="bg-slate-900 border border-slate-700 rounded-lg p-3"
    />

    <button
      onClick={convertCurrency}
      className="bg-cyan-600 hover:bg-cyan-700 rounded-lg font-bold"
    >
      Convert
    </button>

  </div>

  {conversion && (
    <div className="mt-6 rounded-xl bg-slate-900 p-5 border border-slate-700">
      <p className="text-lg">
        <span className="font-bold">
          {conversion.amount} {conversion.from}
        </span>
        {" = "}
        <span className="text-cyan-400 font-bold text-2xl">
          {conversion.converted} {conversion.to}
        </span>
      </p>

      <p className="mt-2 text-slate-400">
        Exchange Rate: 1 {conversion.from} ={" "}
        {conversion.rate} {conversion.to}
      </p>
    </div>
  )}
</div>


  {trip.hotels && trip.hotels.length > 0 && (
    <div className="mt-10">
      <h2 className="text-3xl font-bold text-cyan-400 mb-6">
        🏨 Recommended Hotels
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {trip.hotels.map((hotel, index) => (
          <div
            key={index}
            className="bg-slate-800 border border-slate-700 rounded-xl p-5"
          >
            <h3 className="text-xl font-bold">{hotel.name}</h3>

            <p className="text-slate-300 mt-2">
              {hotel.description}
            </p>

            <p className="mt-3">
              ⭐ {hotel.rating}
            </p>

            <p>
              💲 {hotel.price}
            </p>

            <a
              href={getGoogleMapsLink(hotel.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              📍 View on Google Maps
            </a>
          </div>
        ))}
      </div>
    </div>
  )}

{trip.flights && trip.flights.length > 0 && (
  <div className="mt-10">
    <h2 className="text-3xl font-bold text-cyan-400 mb-6">
      ✈️ Recommended Flights
    </h2>

    <div className="grid md:grid-cols-2 gap-6">
      {trip.flights.map((flight, index) => (
        <div
          key={index}
          className="bg-slate-800 border border-slate-700 rounded-xl p-5"
        >
          <h3 className="text-xl font-bold">
            {flight.airline}
          </h3>

          <p className="mt-2 font-medium">
            {flight.from} → {flight.to}
          </p>

          <p className="mt-2">
            🛫 Departure: {flight.departure}
          </p>

          <p>
            🛬 Arrival: {flight.arrival}
          </p>

          <p>
            ⏱ Duration: {flight.duration}
          </p>

          <p className="mt-2 text-green-400 font-bold">
            💰 {flight.price}
          </p>

          <a
            href={`https://www.google.com/travel/flights?q=${encodeURIComponent(
              `${flight.from} ${flight.to}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 rounded-lg bg-blue-600 px-4 py-2 hover:bg-blue-700 transition"
          >
            ✈️ Book Flight
          </a>
        </div>
      ))}
    </div>
  </div>
)}

{restaurants.length > 0 && (
  <div className="mt-10">
    <h2 className="text-3xl font-bold text-cyan-400 mb-6">
      🍜 AI Recommended Restaurants
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {restaurants.map((restaurant, index) => (
        <div
          key={index}
          className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-cyan-500 transition"
        >
          <h3 className="text-xl font-bold">
            {restaurant.name}
          </h3>

          <p className="mt-2">
            🍽 {restaurant.cuisine}
          </p>

          <p>
            ⭐ {restaurant.rating}
          </p>

          <p>
            💲 {restaurant.price}
          </p>

          <p className="text-slate-300 mt-3">
            {restaurant.description}
          </p>

          <a
            href={`https://www.google.com/maps/search/${encodeURIComponent(
              restaurant.name + " " + city
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 rounded-lg bg-orange-600 px-4 py-2 hover:bg-orange-700 transition"
          >
            📍 View on Google Maps
          </a>
        </div>
      ))}
    </div>
  </div>
)}
 
 
  <button
    onClick={saveTrip}
    className="mt-10 w-full bg-green-600 hover:bg-green-700 py-4 rounded-xl text-lg font-bold"
  >
    ❤️ Save Trip
  </button>
  

   </>
  )}
  </div>
  </div>
</main>
  );
}


