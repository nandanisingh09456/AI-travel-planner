"use client";

import { useState } from "react";

export default function TripPlannerSection() {
  const [formData, setFormData] = useState({
    destination: "",
    travelers: 1,
    startDate: "",
    endDate: "",
    budget: "",
    tripType: "",
    interests: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    console.log(formData);

    setTimeout(() => {
      setLoading(false);
      alert("AI itinerary generation will be connected in the backend.");
    }, 1500);
  };

  return (
    <section
      id="trip-planner"
      className="bg-[#0B1120] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-white">
            Plan Your Dream Trip
          </h2>

          <p className="mt-4 text-slate-400 text-lg max-w-3xl mx-auto">
            Tell us about your trip and let AI create the perfect itinerary.
          </p>
        </div>

        <div className="max-w-5xl mx-auto rounded-3xl border border-slate-700 bg-slate-900/60 backdrop-blur-xl p-8 shadow-2xl">

          <form
            onSubmit={handleSubmit}
            className="grid gap-6 md:grid-cols-2"
          >
          {/* Destination */}
<div>
  <label className="mb-2 block text-sm font-medium text-slate-300">
    Destination
  </label>

  <input
    type="text"
    name="destination"
    value={formData.destination}
    onChange={handleChange}
    placeholder="e.g. Bali"
    required
    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none focus:border-cyan-500"
  />
</div>

{/* Travelers */}
<div>
  <label className="mb-2 block text-sm font-medium text-slate-300">
    Travelers
  </label>

  <input
    type="number"
    name="travelers"
    min="1"
    value={formData.travelers}
    onChange={handleChange}
    required
    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
  />
</div>

{/* Start Date */}
<div>
  <label className="mb-2 block text-sm font-medium text-slate-300">
    Start Date
  </label>

  <input
    type="date"
    name="startDate"
    value={formData.startDate}
    onChange={handleChange}
    required
    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
  />
</div>

{/* End Date */}
<div>
  <label className="mb-2 block text-sm font-medium text-slate-300">
    End Date
  </label>

  <input
    type="date"
    name="endDate"
    value={formData.endDate}
    onChange={handleChange}
    required
    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
  />
</div>

{/* Budget */}
<div>
  <label className="mb-2 block text-sm font-medium text-slate-300">
    Budget
  </label>

  <select
    name="budget"
    value={formData.budget}
    onChange={handleChange}
    required
    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
  >
    <option value="">Select Budget</option>
    <option value="$500-$1000">$500 - $1000</option>
    <option value="$1000-$3000">$1000 - $3000</option>
    <option value="$3000-$5000">$3000 - $5000</option>
    <option value="$5000+">$5000+</option>
  </select>
</div>

{/* Trip Type */}
<div>
  <label className="mb-2 block text-sm font-medium text-slate-300">
    Trip Type
  </label>

  <select
    name="tripType"
    value={formData.tripType}
    onChange={handleChange}
    required
    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-500"
  >
    <option value="">Select Trip Type</option>
    <option value="Adventure">Adventure</option>
    <option value="Luxury">Luxury</option>
    <option value="Family">Family</option>
    <option value="Solo">Solo</option>
    <option value="Friends">Friends</option>
    <option value="Romantic">Romantic</option>
    <option value="Business">Business</option>
  </select>
</div>

{/* Interests */}
<div className="md:col-span-2">
  <label className="mb-2 block text-sm font-medium text-slate-300">
    Interests
  </label>

  <textarea
    name="interests"
    value={formData.interests}
    onChange={handleChange}
    rows={5}
    placeholder="Beaches, Mountains, Food, Hiking, Museums..."
    className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder-slate-500 outline-none resize-none focus:border-cyan-500"
  />
</div>  
{/* Generate Button */}
<div className="md:col-span-2 pt-4">
  <button
    type="submit"
    disabled={loading}
    className="w-full rounded-xl bg-cyan-600 px-6 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-cyan-700 hover:shadow-lg hover:shadow-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-60"
  >
    {loading
      ? "Generating AI Itinerary..."
      : "✨ Generate AI Itinerary"}
  </button>
</div>

</form>

</div>

</div>

</section>
  );
}

