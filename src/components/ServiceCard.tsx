"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  closing: string;
}

export default function ServiceCard({ icon, title, description, closing }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 20px 48px rgba(0,0,0,0.10)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col gap-4 cursor-default"
    >
      <div className="text-[#D4A017] w-12 h-12 flex items-center justify-center bg-amber-50 rounded-xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#0A0A0A]" style={{ fontFamily: "var(--font-playfair)" }}>
        {title}
      </h3>
      <p className="text-[#4A4A4A] text-sm leading-relaxed flex-1">{description}</p>
      <p className="text-sm font-semibold text-[#D4A017]">{closing}</p>
    </motion.div>
  );
}
