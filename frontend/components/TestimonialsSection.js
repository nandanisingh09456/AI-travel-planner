"use client";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Travel Blogger",
    review:
      "AI Travel Planner made planning my Europe trip effortless. The itinerary was well organized and saved me hours.",
    rating: 5,
  },
  {
    name: "David Wilson",
    role: "Photographer",
    review:
      "I discovered amazing destinations I had never considered before. The recommendations felt personalized.",
    rating: 5,
  },
   {
    name: "Sara Ali",
    role: "Traveller",
    review:
      "Recommendation is very nice.I think this is the best platform for travel planning",
    rating: 5,
  },
  {
    name: "Emily Brown",
    role: "Solo Traveler",
    review:
      "The interface is beautiful and easy to use. I can't wait for the AI itinerary generator to go live.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="bg-[#0F172A] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white">
            Loved by Travelers
          </h2>

          <p className="mt-4 text-lg text-slate-400">
            Thousands of travelers trust AI Travel Planner for smarter trip planning.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-3xl border border-slate-700 bg-slate-900/60 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/20"
            >
              <div className="mb-5 text-yellow-400 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-slate-300 leading-7">
                "{testimonial.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white">
                  {testimonial.name}
                </h3>

                <p className="text-cyan-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}