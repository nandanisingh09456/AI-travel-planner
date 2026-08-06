import Link from "next/link";
import { Plane, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12 grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <div className="flex items-center gap-3">
            <Plane className="text-cyan-400" size={30} />
            <h2 className="text-2xl font-bold">
              AI Travel
              <span className="text-cyan-400"> Planner</span>
            </h2>
          </div>

          <p className="mt-4 text-slate-400 leading-7">
            Plan smarter journeys with AI-generated itineraries,
            live weather, destination guides, hotel recommendations,
            and downloadable travel plans.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-xl mb-4">Quick Links</h3>

          <div className="flex flex-col gap-3 text-slate-400">
            <Link href="/">Home</Link>
            <Link href="/planner">Planner</Link>
            <Link href="/destinations">Destinations</Link>
            <Link href="/my-trips">Saved Trips</Link>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-bold text-xl mb-4">Resources</h3>

          <div className="flex flex-col gap-3 text-slate-400">
            <Link href="/features">Features</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-xl mb-4">Connect</h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <span className="text-slate-400">
                nandanisingh09456@gmail.com.com
              </span>
            </div>

        <div className="flex gap-4 mt-4">
  <a
    href="https://github.com/nandanisingh09456"
    target="_blank"
    rel="noopener noreferre"
  >
    <Github
      size={24}
      className="hover:text-cyan-400 transition duration-300"
    />
  </a>

  <a
    href="https://www.linkedin.com/in/nandani-singh-6a2b2333b/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Linkedin
      size={24}
      className="hover:text-cyan-400 transition duration-300"
    />
  </a>
</div>   

          </div>
        </div>

      </div>

      <div className="border-t border-slate-800 py-6 text-center text-slate-500">
        © {new Date().getFullYear()} AI Travel Planner. All rights reserved.
      </div>
    </footer>
  );
}