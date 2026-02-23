import RevealOnScroll from "./RevealOnScroll";

const stats = [
  { value: "6", label: "Apps Delivered" },
  { value: "4", label: "Platforms" },
  { value: "<2 wk", label: "Avg Build Time" },
];

export default function Contact() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-neon-cyan/5 blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        {/* Left side */}
        <div className="lg:col-span-3">
          <RevealOnScroll>
            <div className="w-20 h-[3px] bg-neon-cyan glow-line mb-5" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold leading-tight">
              Let&apos;s Build
              <br />
              Together
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={1}>
            <p className="mt-4 text-lg text-neon-cyan font-medium">
              Ready to turn your idea into a shipped product?
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={2}>
            <p className="mt-4 text-text-secondary leading-relaxed max-w-lg">
              Venture AI Agency partners with founders, startups, and
              enterprises to design, build, and launch beautiful applications —
              powered by AI for speed and quality you won&apos;t find anywhere
              else.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={3}>
            <div className="mt-8 inline-flex items-center gap-3 bg-bg-card rounded-xl px-6 py-4 text-neon-cyan font-semibold text-sm hover:bg-bg-card-alt transition-colors cursor-pointer">
              <span className="text-lg">✉</span>
              Get in touch to start your project
            </div>
          </RevealOnScroll>
        </div>

        {/* Stats card */}
        <div className="lg:col-span-2">
          <RevealOnScroll delay={2}>
            <div className="bg-bg-card rounded-2xl p-8">
              <div className="space-y-8">
                {stats.map((stat, i) => (
                  <div key={stat.label}>
                    <div className="text-4xl font-heading font-bold text-neon-cyan">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-text-secondary">
                      {stat.label}
                    </div>
                    {i < stats.length - 1 && (
                      <div className="mt-6 h-px bg-text-dim" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center text-text-dim text-xs">
        &copy; {new Date().getFullYear()} Venture AI Agency
      </div>
    </section>
  );
}
