"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How does AI Travel Planner work?",
    answer:
      "AI analyzes your travel preferences including destination, budget, travel dates, and interests to generate a personalized itinerary.",
  },
  {
    question: "Can I customize my itinerary?",
    answer:
      "Yes. You'll be able to edit destinations, activities, hotels, restaurants, and transportation before saving your trip.",
  },
  {
    question: "Is AI Travel Planner free?",
    answer:
      "Yes. The basic planner is free. Premium AI features can be added later as part of a subscription plan.",
  },
  {
    question: "Can I save my trips?",
    answer:
      "Yes. After signing in, you'll be able to save, edit, and revisit your travel plans anytime.",
  },
  {
    question: "Which countries are supported?",
    answer:
      "The planner supports destinations worldwide, including Asia, Europe, North America, Oceania, and many more.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-[#0B1120] py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg text-slate-400">
            Everything you need to know about AI Travel Planner.
          </p>
        </div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-700 bg-slate-900/60 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-white">
                  {faq.question}
                </h3>

                {openIndex === index ? (
                  <ChevronUp className="text-cyan-400" />
                ) : (
                  <ChevronDown className="text-cyan-400" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-400 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}