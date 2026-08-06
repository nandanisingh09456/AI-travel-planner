"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plane, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Planner", href: "/planner" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Destinations", href: "/destinations" },
    { name: "Saved", href: "/my-trips" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
  ];

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    };

    getUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#030712]/90 backdrop-blur-xl border-b border-slate-800">

      <header className="sticky top-0 z-50 bg-[#030712]/90 backdrop-blur-xl border-b border-slate-800">
      </header>
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-10 py-5">

        {/* Logo */}

        <Link href="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30">
            <Plane className="text-white" size={24} />
          </div>

          <h2 className="text-2xl font-bold text-white">
            AI Travel
            <span className="text-blue-500"> Planner</span>
          </h2>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`transition hover:text-blue-500 ${
                pathname === item.href
                  ? "text-blue-500"
                  : "text-slate-300"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-slate-300">
                {user.email}
              </span>

              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-xl border border-slate-600 hover:bg-slate-800 transition text-white"
              >
                Logout
              </button>

              <Link
                href="/planner"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl text-white font-semibold transition"
              >
                Plan Trip
              </Link>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-5 py-2 rounded-xl border border-slate-600 hover:bg-slate-800 transition text-white"
              >
                Login
              </Link>

              <Link
                href="/login"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-xl text-white font-semibold transition"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-[#0B1120] border-t border-slate-700">
          <div className="flex flex-col gap-5 px-6 py-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-blue-500"
              >
                {item.name}
              </Link>
            ))}

            {user ? (
              <>
                <p className="text-slate-300 text-sm">
                  {user.email}
                </p>

                <button
                  onClick={handleLogout}
                  className="border border-slate-600 rounded-xl py-2 text-white"
                >
                  Logout
                </button>

                <Link
                  href="/planner"
                  onClick={() => setOpen(false)}
                  className="bg-blue-600 rounded-xl py-2 text-center text-white"
                >
                  Plan Trip
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="border border-slate-600 rounded-xl py-2 text-center text-white"
                >
                  Login
                </Link>

                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="bg-blue-600 rounded-xl py-2 text-center text-white"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}