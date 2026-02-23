import Image from "next/image";
import RevealOnScroll from "./RevealOnScroll";

export default function DeuceCaseStudy() {
  const accent = "text-neon-green";
  const accentBg = "bg-neon-green";

  return (
    <section className="py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Text side */}
        <div>
          <RevealOnScroll>
            <div className={`w-14 h-[3px] ${accentBg} mb-4`} />
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Deuce Tennis Score
            </h2>
            <p className={`mt-2 text-base font-medium ${accent}`}>
              Score every point, right from your wrist
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <div className="mt-6">
              <span className={`text-xs font-bold tracking-widest uppercase ${accent}`}>
                The Brief
              </span>
              <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                A tennis coach needed a fast, glanceable scoring app for Apple
                Watch. Existing apps were clunky and required too many taps
                during play. He wanted one-tap scoring with automatic deuce and
                tiebreak handling.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={2}>
            <div className="mt-5">
              <span className={`text-xs font-bold tracking-widest uppercase ${accent}`}>
                Delivered
              </span>
              <ul className="mt-2 space-y-2">
                {[
                  "Watch-first UI with one-tap scoring",
                  "Automatic deuce & tiebreak logic",
                  "Full match history + undo support",
                  "iPhone & iPad companion app",
                ].map((item) => (
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

          <RevealOnScroll delay={3}>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-bg-card-alt text-xs font-bold border border-text-dim/30">
                <span className={accent}>11 Days</span>
              </span>
              {["watchOS", "iOS", "iPadOS"].map((p) => (
                <span
                  key={p}
                  className={`px-3 py-1 rounded-full bg-bg-card-alt text-xs font-bold ${accent} border border-text-dim/30`}
                >
                  {p}
                </span>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={4}>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { value: "4.8K", label: "Downloads" },
                { value: "28K", label: "Matches" },
                { value: "4.7\u2605", label: "Rating" },
                { value: "62%", label: "D7 Retain" },
              ].map((kpi) => (
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

        {/* Screenshots: Phone + Watch side by side */}
        <div>
          <RevealOnScroll delay={2}>
            <div className="flex gap-4">
              {/* Phone screenshots */}
              <div className="flex-[3] bg-bg-card rounded-2xl p-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="screenshot-hover rounded-lg overflow-hidden">
                    <Image
                      src="/screenshots/deuce/phone-01.png"
                      alt="Deuce Quick Start"
                      width={400}
                      height={800}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="screenshot-hover rounded-lg overflow-hidden">
                    <Image
                      src="/screenshots/deuce/phone-02.png"
                      alt="Deuce Live Scoring"
                      width={400}
                      height={800}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <p className="mt-3 text-center text-text-dim text-xs">iPhone</p>
              </div>

              {/* Watch screenshots */}
              <div className="flex-[1] bg-bg-card rounded-2xl p-3">
                <div className="flex flex-col gap-3">
                  <div className="screenshot-hover rounded-lg overflow-hidden">
                    <Image
                      src="/screenshots/deuce/watch-01.png"
                      alt="Deuce Watch Quick Start"
                      width={200}
                      height={200}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                  <div className="screenshot-hover rounded-lg overflow-hidden">
                    <Image
                      src="/screenshots/deuce/watch-02.png"
                      alt="Deuce Watch Live Scoring"
                      width={200}
                      height={200}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
                <p className="mt-3 text-center text-text-dim text-xs">
                  Apple Watch
                </p>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
