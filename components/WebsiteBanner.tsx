import RevealOnScroll from "./RevealOnScroll";

const features = [
  { icon: "⚡", text: "Landing pages" },
  { icon: "🛒", text: "E-commerce stores" },
  { icon: "📊", text: "Dashboards" },
  { icon: "🏢", text: "Business sites" },
  { icon: "📱", text: "Portfolio sites" },
  { icon: "🔗", text: "SaaS marketing pages" },
];

export default function WebsiteBanner() {
  return (
    <section className="py-20 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-magenta/5 blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-neon-cyan/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <RevealOnScroll>
          <div className="bg-bg-card rounded-2xl border border-text-dim/20 p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              {/* Left: headline */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neon-magenta/10 border border-neon-magenta/30 mb-6">
                  <span className="w-2 h-2 rounded-full bg-neon-magenta animate-pulse" />
                  <span className="text-xs font-bold text-neon-magenta tracking-wide uppercase">
                    New Service
                  </span>
                </div>

                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
                  Websites in
                  <br />
                  <span className="text-neon-magenta">&lt;24 Hours</span>
                </h2>

                <p className="mt-5 text-text-secondary text-base md:text-lg leading-relaxed max-w-md">
                  Need a website yesterday? We design, build, and deploy
                  production-ready websites in under 24 hours. Responsive,
                  fast, and beautiful — live on your domain by tomorrow.
                </p>

                <div className="mt-6 inline-flex items-center gap-3 bg-neon-magenta/10 border border-neon-magenta/30 rounded-xl px-6 py-3.5 text-neon-magenta font-semibold text-sm hover:bg-neon-magenta/20 transition-colors cursor-pointer">
                  <span className="text-lg">⚡</span>
                  Get your site built today
                </div>
              </div>

              {/* Right: what we build */}
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-neon-magenta mb-4">
                  What we can build in a day
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {features.map((f) => (
                    <div
                      key={f.text}
                      className="flex items-center gap-3 bg-bg-card-alt rounded-lg px-4 py-3 border border-text-dim/10"
                    >
                      <span className="text-lg">{f.icon}</span>
                      <span className="text-sm text-text-primary font-medium">
                        {f.text}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { val: "<24h", label: "Turnaround" },
                    { val: "100", label: "Lighthouse Score" },
                    { val: "$0", label: "Hosting Setup" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-xl font-heading font-bold text-neon-magenta">
                        {s.val}
                      </div>
                      <div className="text-[11px] text-text-secondary mt-0.5">
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
