"use client";

export default function FeatureCard({
  icon,
  title,
  subtitle,
  color = "from-blue-500 to-cyan-500",
}) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-700
        bg-[#111827]
        p-7
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-2xl
        hover:shadow-blue-500/20
      "
    >
      {/* Glow */}

      <div
        className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${color} opacity-10 blur-3xl transition-all duration-500 group-hover:opacity-30`}
      />

      {/* Icon */}

      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg`}
      >
        {icon}
      </div>

      {/* Title */}

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      {/* Subtitle */}

      <p className="mt-3 text-slate-400 leading-7">
        {subtitle}
      </p>
    </div>
  );
}