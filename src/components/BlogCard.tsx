"use client";
import { motion } from "framer-motion";
import Link from "next/link";

interface BlogCardProps {
  category: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  thumbnail: {
    gradient: string;
    icon: string;
    label: string;
  };
}

export default function BlogCard({ category, title, date, excerpt, slug, thumbnail }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(0,0,0,0.10)" }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col"
    >
      {/* Thumbnail */}
      <div
        className="h-44 flex flex-col items-center justify-center gap-2 relative"
        style={{ background: thumbnail.gradient }}
      >
        <span className="text-4xl">{thumbnail.icon}</span>
        <span className="text-xs font-bold uppercase tracking-widest text-white/60">{thumbnail.label}</span>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col gap-3 flex-1">
        <span className="text-xs font-semibold uppercase tracking-widest text-[#D4A017]">
          {category}
        </span>
        <h3 className="text-lg font-bold text-[#0A0A0A] leading-snug" style={{ fontFamily: "var(--font-playfair)" }}>
          {title}
        </h3>
        <p className="text-xs text-[#4A4A4A]">{date}</p>
        <p className="text-sm text-[#4A4A4A] leading-relaxed flex-1">{excerpt}</p>
        <Link
          href={`/writing/${slug}`}
          className="text-sm font-semibold text-[#D4A017] hover:underline mt-1"
        >
          Read &rarr;
        </Link>
      </div>
    </motion.div>
  );
}
