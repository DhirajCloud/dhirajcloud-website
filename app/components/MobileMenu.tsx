"use client";

import { useState } from "react";

const links = [
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:bg-white/10"
      >
        {open ? (
          <span className="text-xl">✕</span>
        ) : (
          <span className="text-xl">☰</span>
        )}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 border-b border-white/10 bg-slate-950 px-6 py-6 shadow-xl">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Start Your Project
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
