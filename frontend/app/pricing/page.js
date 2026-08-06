import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for exploring AI Travel Planner.",
    features: [
      "AI Trip Planner",
      "Explore Destinations",
      "Live Weather",
      "Hotel Recommendations",
      "Save Trips",
    ],
    button: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    description: "For frequent travelers who want more.",
    features: [
      "Everything in Free",
      "Unlimited AI Trips",
      "Priority AI Responses",
      "Advanced PDF Export",
      "Priority Support",
      "Premium Destinations",
    ],
    button: "Upgrade Now",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Best for travel agencies and businesses.",
    features: [
      "Everything in Pro",
      "Multi-user Accounts",
      "API Access",
      "Dedicated Support",
      "Custom Integrations",
      "Business Dashboard",
    ],
    button: "Contact Us",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold">
          Simple
          <span className="text-cyan-400"> Pricing</span>
        </h1>

        <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto">
          Choose a plan that fits your travel needs. Start free and
          upgrade whenever you're ready.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-8 pb-20">

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 transition duration-300 hover:-translate-y-2 ${
                plan.highlight
                  ? "border-cyan-400 bg-slate-900 shadow-lg shadow-cyan-500/20"
                  : "border-slate-700 bg-slate-900"
              }`}
            >
              {plan.highlight && (
                <span className="inline-block bg-cyan-500 text-black font-bold px-4 py-1 rounded-full mb-6">
                  Most Popular
                </span>
              )}

              <h2 className="text-3xl font-bold">
                {plan.name}
              </h2>

              <p className="text-5xl font-bold mt-4">
                {plan.price}
                {plan.price !== "Custom" && (
                  <span className="text-lg text-slate-400">/month</span>
                )}
              </p>

              <p className="mt-4 text-slate-400">
                {plan.description}
              </p>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3"
                  >
                    <Check className="text-green-400" size={20} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-10 w-full py-3 rounded-xl font-semibold transition ${
                  plan.highlight
                    ? "bg-cyan-500 hover:bg-cyan-600 text-black"
                    : "bg-slate-800 hover:bg-slate-700"
                }`}
              >
                {plan.button}
              </button>
            </div>
          ))}

        </div>

      </section>

      {/* FAQ */}
      <section className="bg-slate-900 py-20">

        <div className="max-w-5xl mx-auto px-8">

          <h2 className="text-4xl font-bold text-center">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-8">

            <div>
              <h3 className="text-2xl font-semibold">
                Can I use AI Travel Planner for free?
              </h3>

              <p className="mt-3 text-slate-400">
                Yes. The Free plan includes AI itinerary generation,
                destination browsing, weather updates, and hotel
                recommendations.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Is the Pro plan available?
              </h3>

              <p className="mt-3 text-slate-400">
                This project showcases a demo pricing page. No payment
                system is currently integrated.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Can I export my trips?
              </h3>

              <p className="mt-3 text-slate-400">
                Yes! Saved trips can be downloaded as PDF documents
                from the Saved Trips page.
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}