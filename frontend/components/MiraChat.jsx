"use client";

import { useState, useRef, useEffect } from "react";

export default function MiraChat({ trip }) {
  const [question, setQuestion] = useState("");
  const [chatLoading, setChatLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "👋 Hi! I'm Mira AI. Ask me anything about your trip.",
    },
  ]);

  const messagesEndRef = useRef(null);

 

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, chatLoading]);

  const askMira = async (customQuestion) => {
    const text =
      typeof customQuestion === "string"
        ? customQuestion
        : question;

    if (!text.trim()) return;

    const userMessage = {
      role: "user",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setChatLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          trip,
          question: text,
        }),
      });

      const data = await response.json();

      console.log("API Response:", data);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.answer || "Sorry, I couldn't generate a reply.",
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "❌ Sorry, something went wrong.",
        },
      ]);
    } finally {
      setChatLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col bg-slate-800 rounded-2xl p-6">

      <h2 className="text-3xl font-bold text-cyan-400">
        🤖 Mira AI
      </h2>

      <p className="mt-2 text-slate-400">
        Your personal AI travel companion.
      </p>

      {/* Input */}

      <textarea
        rows={3}
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            askMira();
          }
        }}
        placeholder="Ask Mira anything..."
        className="mt-6 w-full rounded-xl bg-slate-900 border border-slate-700 p-4 resize-none"
      />

      {/* Buttons */}

      <div className="flex gap-3 mt-4">

        <button
          onClick={() => askMira()}
          disabled={chatLoading}
          className="rounded-xl bg-cyan-600 px-6 py-3 font-bold hover:bg-cyan-700 disabled:opacity-50"
        >
          {chatLoading ? "Thinking..." : "Ask Mira"}
        </button>

        <button
          onClick={() =>
            setMessages([
              {
                role: "assistant",
                content:
                  "👋 Hi! I'm Mira AI. Ask me anything about your trip.",
              },
            ])
          }
          className="rounded-xl bg-red-600 px-6 py-3 font-bold hover:bg-red-700"
        >
          Clear Chat
        </button>

      </div>

      {/* Chat */}

      <div className="mt-8 flex-1 overflow-y-auto space-y-4 pr-2">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${
              msg.role === "user"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`max-w-[90%] rounded-2xl p-4 ${
                msg.role === "user"
                  ? "bg-cyan-600"
                  : "bg-slate-900 border border-slate-700"
              }`}
            >
              <p className="font-bold mb-2">
                {msg.role === "user"
                  ? "👤 You"
                  : "🤖 Mira"}
              </p>

              <p className="whitespace-pre-wrap">
                {msg.content}
              </p>
            </div>
          </div>
        ))}

        {chatLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-4 animate-pulse">
              🤖 Thinking...
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />

      </div>

    </div>
  );
}