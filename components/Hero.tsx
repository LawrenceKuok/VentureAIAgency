import RevealOnScroll from "./RevealOnScroll";

const stats = [
  { value: "6", label: "Apps Shipped" },
  { value: "4", label: "Platforms" },
  { value: "5", label: "Industries" },
  { value: "<2 wk", label: "Avg Delivery" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-24 grid-bg overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] rounded-full bg-neon-magenta/5 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl relative z-10">
        <RevealOnScroll>
          <div className="w-24 h-[3px] bg-neon-cyan glow-line mb-6" />
        </RevealOnScroll>

        <RevealOnScroll delay={1}>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05]">
            Venture AI
            <br />
            Agency
          </h1>
        </RevealOnScroll>

        <RevealOnScroll delay={2}>
          <p className="mt-5 text-xl md:text-2xl text-neon-cyan font-medium glow-cyan">
            We Build Apps. Fast.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={3}>
          <p className="mt-4 text-base md:text-lg text-text-secondary max-w-xl leading-relaxed">
            From idea to App Store in days, not months.
            <br />
            Native iOS, iPadOS, watchOS, Android & web — powered by AI.
          </p>
        </RevealOnScroll>
      </div>

      {/* Stats bar */}
      <RevealOnScroll className="mt-16 md:mt-20 relative z-10" delay={4}>
        <div className="bg-bg-card rounded-xl p-6 md:p-8 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center ${
                  i < stats.length - 1 ? "md:border-r md:border-text-dim" : ""
                }`}
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-neon-cyan">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-text-secondary">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-dim text-xs animate-bounce">
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 12L2 6h12L8 12z" />
        </svg>
      </div>
    </section>
  );
}
