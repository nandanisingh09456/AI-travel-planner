"use client";

import { useState } from "react";
import MiraChat from "@/components/MiraChat";

export default function MiraButton({ trip }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-cyan-500 hover:bg-cyan-600 shadow-2xl flex items-center justify-center text-3xl transition-transform hover:scale-110"
        >
          🤖
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 w-96 h-[650px] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl z-50 flex flex-col">

          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700">
            <h2 className="text-xl font-bold text-cyan-400">
              🤖 Mira AI
            </h2>

            <button
              onClick={() => setIsOpen(false)}
              className="text-2xl text-slate-300 hover:text-red-500 transition"
            >
              ✕
            </button>
          </div>

          {/* Chat */}
          <div className="flex-1 overflow-hidden">
            <MiraChat trip={trip} />
          </div>

        </div>
      )}
    </>
  );
}