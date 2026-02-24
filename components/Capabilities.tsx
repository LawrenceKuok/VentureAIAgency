import RevealOnScroll from "./RevealOnScroll";

const cards = [
  {
    icon: "⚡",
    title: "Websites in <24 Hours",
    desc: "Landing pages, e-commerce, dashboards, and business sites — designed, built, and deployed in under a day.",
    color: "text-neon-magenta",
    border: "bg-neon-magenta",
  },
  {
    icon: "◆",
    title: "Native iOS & watchOS",
    desc: "Swift & SwiftUI apps for iPhone, iPad, and Apple Watch with native performance.",
    color: "text-neon-blue",
    border: "bg-neon-blue",
  },
  {
    icon: "◈",
    title: "Full-Stack Web Apps",
    desc: "Responsive platforms with modern frameworks, APIs, and scalable cloud infrastructure.",
    color: "text-neon-cyan",
    border: "bg-neon-cyan",
  },
  {
    icon: "✦",
    title: "AI-Powered Features",
    desc: "Smart recommendations, NLP, and intelligent automation baked into every product.",
    color: "text-neon-gold",
    border: "bg-neon-gold",
  },
  {
    icon: "◎",
    title: "UI/UX Design",
    desc: "Beautiful interfaces with dark mode, accessibility, and pixel-perfect craft.",
    color: "text-neon-green",
    border: "bg-neon-green",
  },
];

export default function Capabilities() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <div className="w-16 h-[3px] bg-neon-cyan glow-line mb-4" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold">
            What We Build
          </h2>
          <p className="mt-3 text-text-secondary text-base max-w-2xl">
            From concept to App Store — we ship production-ready apps at AI
            speed.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-12">
          {cards.map((card, i) => (
            <RevealOnScroll key={card.title} delay={i + 1}>
              <div className="bg-bg-card rounded-xl p-6 h-full hover:bg-bg-card-alt transition-colors">
                <div className={`w-8 h-[3px] ${card.border} mb-4`} />
                <span className={`text-2xl ${card.color}`}>{card.icon}</span>
                <h3 className="mt-4 font-heading font-bold text-sm">
                  {card.title}
                </h3>
                <p className="mt-2 text-text-secondary text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={5}>
          <p className="mt-12 text-center text-text-dim text-sm">
            Every app in this portfolio was built in days, not months.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
