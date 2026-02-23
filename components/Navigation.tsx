"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "capabilities", label: "Services" },
  { id: "have-you-met", label: "Have You Met" },
  { id: "venture", label: "Venture" },
  { id: "taipei", label: "Taipei" },
  { id: "sojourner", label: "Sojourner" },
  { id: "launch-lab", label: "Launch Lab" },
  { id: "deuce", label: "Deuce" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [active, setActive] = useState("hero");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollY / docHeight) * 100 : 0);

      // Find active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop - 200 <= scrollY) {
          setActive(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-bg-card">
        <div
          className="h-full bg-neon-cyan transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Nav dots */}
      <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center gap-3 justify-end"
            aria-label={s.label}
          >
            <span className="text-[11px] text-text-dim opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {s.label}
            </span>
            <span
              className={`block rounded-full transition-all ${
                active === s.id
                  ? "w-3 h-3 bg-neon-cyan shadow-[0_0_8px_rgba(0,255,204,0.5)]"
                  : "w-2 h-2 bg-text-dim group-hover:bg-text-secondary"
              }`}
            />
          </a>
        ))}
      </nav>
    </>
  );
}
