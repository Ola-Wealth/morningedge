import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/writing", label: "Writing" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Image
            src="/logo.png"
            alt="MorningEdge"
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
          />
          <p className="text-sm text-gray-400 max-w-xs">
            Built for clarity. Designed for scale.
          </p>
        </div>

        {/* Nav links */}
        <div className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-widest text-[#D4A017] mb-2">Navigation</p>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-300 hover:text-[#D4A017] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social */}
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-widest text-[#D4A017] mb-2">Connect</p>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-[#D4A017] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter / X" className="text-gray-300 hover:text-[#D4A017] transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="text-center text-sm text-gray-500">
          &copy; 2026 MorningEdge. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
