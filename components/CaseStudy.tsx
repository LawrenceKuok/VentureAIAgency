import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export interface CaseStudyProps {
  name: string;
  tagline: string;
  brief: string;
  delivered: string[];
  timeline: string;
  kpis: { value: string; label: string }[];
  screenshots: { src: string; alt: string }[];
  accent: string;
  accentBg: string;
  platforms: string[];
  reversed?: boolean;
}

export default function CaseStudy({
  name,
  tagline,
  brief,
  delivered,
  timeline,
  kpis,
  screenshots,
  accent,
  accentBg,
  platforms,
  reversed = false,
}: CaseStudyProps) {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24">
      <div
        className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${
          reversed ? "lg:direction-rtl" : ""
        }`}
      >
        {/* Text side */}
        <div className={reversed ? "lg:order-2" : ""}>
          <RevealOnScroll>
            <div className={`w-14 h-[3px] ${accentBg} mb-4`} />
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              {name}
            </h2>
            <p className={`mt-2 text-base font-medium ${accent}`}>{tagline}</p>
          </RevealOnScroll>

          {/* The Brief */}
          <RevealOnScroll delay={1}>
            <div className="mt-6">
              <span
                className={`text-xs font-bold tracking-widest uppercase ${accent}`}
              >
                The Brief
              </span>
              <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                {brief}
              </p>
            </div>
          </RevealOnScroll>

          {/* Delivered */}
          <RevealOnScroll delay={2}>
            <div className="mt-5">
              <span
                className={`text-xs font-bold tracking-widest uppercase ${accent}`}
              >
                Delivered
              </span>
              <ul className="mt-2 space-y-2">
                {delivered.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-text-secondary text-sm"
                  >
                    <span className={`mt-1.5 w-2 h-0.5 shrink-0 ${accentBg}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

          {/* Pills row */}
          <RevealOnScroll delay={3}>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-bg-card-alt text-xs font-bold border border-text-dim/30">
                <span className={accent}>{timeline}</span>
              </span>
              {platforms.map((p) => (
                <span
                  key={p}
                  className={`px-3 py-1 rounded-full bg-bg-card-alt text-xs font-bold ${accent} border border-text-dim/30`}
                >
                  {p}
                </span>
              ))}
            </div>
          </RevealOnScroll>

          {/* KPIs */}
          <RevealOnScroll delay={4}>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="kpi-card bg-bg-card rounded-lg px-3 py-3 text-center"
                >
                  <div className={`text-lg font-heading font-bold ${accent}`}>
                    {kpi.value}
                  </div>
                  <div className="text-[11px] text-text-secondary mt-0.5">
                    {kpi.label}
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        {/* Screenshots side */}
        <div className={reversed ? "lg:order-1" : ""}>
          <RevealOnScroll delay={2}>
            <div className="bg-bg-card rounded-2xl p-4 md:p-6">
              <div
                className={`grid gap-3 ${
                  screenshots.length === 1
                    ? "grid-cols-1"
                    : screenshots.length === 2
                    ? "grid-cols-2"
                    : "grid-cols-3"
                }`}
              >
                {screenshots.map((ss, i) => (
                  <div key={i} className="screenshot-hover rounded-lg overflow-hidden">
                    <Image
                      src={ss.src}
                      alt={ss.alt}
                      width={400}
                      height={800}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
