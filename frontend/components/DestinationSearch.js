"use client";

export default function DestinationSearch({ searchTerm, setSearchTerm }) {
  return (
    <div className="w-full max-w-xl mx-auto mb-10">
      <div className="relative">
        <input
          type="text"
          placeholder="Search destinations..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-slate-900/70 border border-slate-700 rounded-full px-5 py-3 pl-12 text-white placeholder:text-slate-400 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.8}
          stroke="currentColor"
          className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.2-5.2m2.2-5.3a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
      </div>
    </div>
  );
}