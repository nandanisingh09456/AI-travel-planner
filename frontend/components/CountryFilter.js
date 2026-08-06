"use client";

export default function CountryFilter({
  countries,
  selectedCountry,
  setSelectedCountry,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {countries.map((country) => (
        <button
          key={country}
          onClick={() => setSelectedCountry(country)}
          className={`px-5 py-2 rounded-full border transition-all duration-300 font-medium
            ${
              selectedCountry === country
                ? "bg-cyan-600 border-cyan-600 text-white"
                : "bg-slate-900 border-slate-700 text-slate-300 hover:border-cyan-500 hover:text-white"
            }`}
        >
          {country}
        </button>
      ))}
    </div>
  );
}