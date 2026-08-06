import {
  Globe,
  Bot,
  Database,
  ShieldCheck,
  Code2,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold">
          About
          <span className="text-cyan-400"> AI Travel Planner</span>
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-400 leading-8">
          AI Travel Planner is a modern web application that helps travelers
          create personalized itineraries using Artificial Intelligence.
          It combines live weather, hotel recommendations, destination
          information, and AI-generated travel plans in one platform.
        </p>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto px-8 py-12">

        <div className="bg-slate-900 rounded-3xl p-10 border border-slate-700">

          <h2 className="text-4xl font-bold mb-6 text-cyan-400">
            Our Mission
          </h2>

          <p className="text-slate-300 leading-8 text-lg">
            Our mission is to simplify travel planning by combining
            artificial intelligence with real-time travel information.
            Whether you're planning a weekend getaway or an international
            vacation, AI Travel Planner helps you build smarter and faster
            itineraries.
          </p>

        </div>

      </section>

      {/* Technologies */}
      <section className="max-w-7xl mx-auto px-8 py-16">

        <h2 className="text-4xl font-bold text-center mb-12">
          Technologies Used
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
            <Code2 className="text-cyan-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold">Next.js & React</h3>
            <p className="mt-4 text-slate-400">
              Built with the latest App Router architecture for speed,
              scalability, and a modern user experience.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
            <Bot className="text-cyan-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold">Groq AI</h3>
            <p className="mt-4 text-slate-400">
              Generates intelligent and personalized travel itineraries
              tailored to each destination.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
            <Database className="text-cyan-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold">Supabase</h3>
            <p className="mt-4 text-slate-400">
              Stores user accounts, saved trips, and travel information
              securely in the cloud.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
            <Globe className="text-cyan-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold">Travel APIs</h3>
            <p className="mt-4 text-slate-400">
              Uses weather, destination, and mapping services to provide
              useful travel insights.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
            <ShieldCheck className="text-cyan-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold">Authentication</h3>
            <p className="mt-4 text-slate-400">
              Secure user authentication allows travelers to save and
              manage their own trips.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-700">
            <Sparkles className="text-cyan-400 mb-4" size={40} />
            <h3 className="text-2xl font-bold">Modern UI</h3>
            <p className="mt-4 text-slate-400">
              Designed with Tailwind CSS to provide a clean, responsive,
              and engaging user interface.
            </p>
          </div>

        </div>

      </section>

      {/* Highlights */}
      <section className="bg-slate-900 py-20">

        <div className="max-w-6xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-center mb-12">
            What You Can Do
          </h2>

          <div className="grid md:grid-cols-2 gap-8 text-lg">

            <ul className="space-y-4">
              <li>✅ Generate AI-powered itineraries</li>
              <li>✅ Browse popular destinations</li>
              <li>✅ View weather forecasts</li>
              <li>✅ Discover hotel recommendations</li>
            </ul>

            <ul className="space-y-4">
              <li>✅ Save favorite trips</li>
              <li>✅ Download itineraries as PDF</li>
              <li>✅ Access trips from anywhere</li>
              <li>✅ Explore destinations interactively</li>
            </ul>

          </div>

        </div>

      </section>

      {/* Developer */}
      <section className="max-w-6xl mx-auto px-8 py-20 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Built as a Full-Stack Portfolio Project
        </h2>

        <p className="text-slate-400 max-w-3xl mx-auto leading-8 text-lg">
          AI Travel Planner demonstrates modern web development using
          Next.js, React, Tailwind CSS, Supabase, AI integration,
          authentication, API consumption, PDF generation, and responsive UI.
          It was created to showcase practical full-stack development skills.
        </p>

      </section>

    </main>
  );
}