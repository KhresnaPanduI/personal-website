"use client";

import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/khresnapandu",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/khresnapandu",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:khresnapandu@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#a3a3a3] text-sm">
          &copy; {new Date().getFullYear()} Khresna Pandu. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#a3a3a3] hover:text-white transition-colors"
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
