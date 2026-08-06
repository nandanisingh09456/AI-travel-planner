import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DeveloperBadge from "@/components/DeveloperBadge";
import MiraButton from "@/components/MiraButton";

export const metadata = {
  title: "AI Travel Planner",
  description: "AI Powered Travel Planner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background text-text">
        <Navbar />

        {children}

        <Footer />

        <DeveloperBadge />
        <MiraButton  />
      </body>
    </html>
  );
}