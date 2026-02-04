"use client";

const links = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/khresna-pandu",
  },
  {
    name: "GitHub",
    href: "https://github.com/KhresnaPanduI",
  },
  {
    name: "Email",
    href: "mailto:khresna.pandu10@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="py-8 px-6 lg:px-8 border-t border-[#e5e5e5]">
      <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#666666] text-sm">
          &copy; {new Date().getFullYear()} Khresna Pandu
        </p>

        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666666] hover:text-[#1a1a1a] transition-colors text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
