import {
  Bot,
  MapPinned,
  CloudSun,
  Hotel,
  Heart,
  FileText,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Trip Generator",
    description:
      "Create personalized travel itineraries in seconds using advanced AI technology.",
  },
  {
    icon: MapPinned,
    title: "Explore Destinations",
    description:
      "Discover beautiful destinations around the world with detailed travel information.",
  },
  {
    icon: CloudSun,
    title: "Live Weather",
    description:
      "Check real-time weather conditions before planning your trip.",
  },
  {
    icon: Hotel,
    title: "Hotel Recommendations",
    description:
      "Find comfortable hotels near your destination with ease.",
  },
  {
    icon: Heart,
    title: "Save Trips",
    description:
      "Save your favorite itineraries and access them anytime.",
  },
  {
    icon: FileText,
    title: "PDF Export",
    description:
      "Download your complete itinerary as a beautifully formatted PDF.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "Sign up securely and keep all your trips linked to your account.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Enjoy a seamless experience across desktop, tablet, and mobile devices.",
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold">
          Powerful
          <span className="text-cyan-400"> Features</span>
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-lg text-slate-400">
          AI Travel Planner combines artificial intelligence,
          live travel data, and modern web technologies
          to make planning your next journey simple and enjoyable.
        </p>
      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-8 pb-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-700 rounded-2xl p-8 hover:border-cyan-400 transition duration-300 hover:-translate-y-2"
              >
                <Icon
                  size={42}
                  className="text-cyan-400 mb-6"
                />

                <h2 className="text-2xl font-bold mb-3">
                  {feature.title}
                </h2>

                <p className="text-slate-400 leading-7">
                  {feature.description}
                </p>
              </div>
            );
          })}

        </div>

      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-900 py-20">

        <div className="max-w-6xl mx-auto px-8 text-center">

          <h2 className="text-4xl font-bold">
            Why Choose
            <span className="text-cyan-400"> AI Travel Planner?</span>
          </h2>

          <p className="mt-8 text-slate-400 text-lg max-w-4xl mx-auto leading-8">
            Whether you're planning a weekend getaway or an international
            vacation, AI Travel Planner helps you discover destinations,
            build personalized itineraries, monitor weather, find hotels,
            save your trips, and download travel plans—all from one platform.
          </p>

        </div>

      </section>

    </main>
  );
}