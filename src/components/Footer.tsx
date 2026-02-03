"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/khresna-pandu",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/KhresnaPanduI",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:khresna.pandu10@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-slate-200">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#64748b] text-sm">
          &copy; {new Date().getFullYear()} Khresna Pandu. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-[#0f172a] transition-colors"
              aria-label={link.name}
            >
              <link.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
