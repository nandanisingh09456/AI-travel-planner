"use client";

import { ShieldCheck } from "lucide-react";

export default function DeveloperBadge() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <div className="flex items-center gap-4 rounded-2xl border border-slate-700 bg-[#0F172A]/95 px-5 py-4 shadow-2xl backdrop-blur-lg transition-all duration-300 hover:border-blue-500 hover:shadow-blue-500/20">

        {/* NS Logo */}

        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-600">

          <div className="absolute inset-[3px] rounded-full bg-[#030712]" />

          <span className="relative text-2xl font-extrabold text-white">
            NS
          </span>

        </div>

        {/* Text */}

        <div>

          <p className="text-xs uppercase tracking-widest text-slate-400">
            Designed & Developed by
          </p>

          <div className="mt-1 flex items-center gap-2">

            <h3 className="font-bold text-blue-400">
              Nandani Singh
            </h3>

            <ShieldCheck
              size={18}
              className="text-blue-500"
            />

          </div>

        </div>

      </div>

      {/* Hover Card */}

      <div className="pointer-events-none absolute -top-20 left-1/2 hidden -translate-x-1/2 rounded-xl border border-slate-700 bg-[#020617] px-5 py-3 text-center shadow-xl group-hover:block">

        <h4 className="font-bold text-white">
          Nandani Singh
        </h4>

        <p className="text-sm text-slate-400">
          Full Stack Developer
        </p>

      </div>
    </div>
  );
}