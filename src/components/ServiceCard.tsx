import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  closing: string;
}

export default function ServiceCard({ icon, title, description, closing }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div className="text-[#D4A017] w-12 h-12 flex items-center justify-center bg-amber-50 rounded-xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-[#0A0A0A]" style={{ fontFamily: "var(--font-playfair)" }}>
        {title}
      </h3>
      <p className="text-[#4A4A4A] text-sm leading-relaxed flex-1">{description}</p>
      <p className="text-sm font-semibold text-[#D4A017]">{closing}</p>
    </div>
  );
}
