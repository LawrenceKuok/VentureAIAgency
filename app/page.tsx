import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import WebsiteBanner from "@/components/WebsiteBanner";
import CaseStudy from "@/components/CaseStudy";
import DeuceCaseStudy from "@/components/DeuceCaseStudy";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const caseStudies = [
  {
    id: "have-you-met",
    name: "Have You Met",
    tagline: "Dating, reimagined with social scoring",
    brief: "A founder wanted to disrupt the dating space with a trust-based approach. Existing apps rewarded looks over effort \u2014 he needed a system that scored genuine engagement (reply rates, conversation depth) so quality users rise to the top.",
    delivered: [
      "Social Credit Index scoring system",
      "Smart matching with compatibility engine",
      "Real-time messaging & swipe discovery",
      "Engagement analytics dashboard",
    ],
    timeline: "\u23F1 14 Days",
    kpis: [
      { value: "12K", label: "Downloads" },
      { value: "3.2K", label: "MAU" },
      { value: "4.6\u2605", label: "Rating" },
      { value: "58%", label: "D7 Retain" },
    ],
    screenshots: [
      { src: "/screenshots/have-you-met/01.png", alt: "Have You Met Profile" },
      { src: "/screenshots/have-you-met/02.png", alt: "Have You Met Discovery" },
      { src: "/screenshots/have-you-met/03.png", alt: "Have You Met Match" },
    ],
    accent: "text-neon-cyan",
    accentBg: "bg-neon-cyan",
    platforms: ["iOS"],
  },
  {
    id: "venture",
    name: "Venture",
    tagline: "Track your travels. Compete with the world.",
    brief: "A travel community founder needed an app that turned passport stamps into a social game. Users should log countries, compare stats with friends, and climb leaderboards \u2014 making travel feel competitive and shareable.",
    delivered: [
      "Global leaderboard with 143+ countries",
      "Side-by-side friend comparison view",
      "Interactive world map visualization",
      "Community stats & traveler profiles",
    ],
    timeline: "\u23F1 10 Days",
    kpis: [
      { value: "8.5K", label: "Downloads" },
      { value: "2.1K", label: "MAU" },
      { value: "4.8\u2605", label: "Rating" },
      { value: "143", label: "Countries" },
    ],
    screenshots: [
      { src: "/screenshots/venture/01.png", alt: "Venture Profile" },
      { src: "/screenshots/venture/02.png", alt: "Venture Community" },
      { src: "/screenshots/venture/03.png", alt: "Venture Compare" },
    ],
    accent: "text-neon-gold",
    accentBg: "bg-neon-gold",
    platforms: ["iOS"],
  },
  {
    id: "taipei",
    name: "Taipei \u63A2\u5E97",
    tagline: "Discover Taipei\u2019s best food, cafes & nightlife",
    brief: "An expat food blogger in Taipei wanted a curated local discovery app \u2014 not another Yelp clone. She needed bilingual listings (Chinese/English) with honest reviews, covering restaurants, coffee shops, bars, and dessert spots.",
    delivered: [
      "Curated venue database with 1,200+ spots",
      "Category browsing & popular picks",
      "Bilingual interface (EN/\u4E2D\u6587)",
      "User reviews & ratings system",
    ],
    timeline: "\u23F1 12 Days",
    kpis: [
      { value: "15K", label: "Downloads" },
      { value: "5.8K", label: "MAU" },
      { value: "4.5\u2605", label: "Rating" },
      { value: "1.2K", label: "Venues" },
    ],
    screenshots: [
      { src: "/screenshots/taipei/01.png", alt: "Taipei Home" },
      { src: "/screenshots/taipei/02.png", alt: "Taipei Browse" },
      { src: "/screenshots/taipei/03.png", alt: "Taipei Detail" },
    ],
    accent: "text-neon-gold",
    accentBg: "bg-neon-gold",
    platforms: ["iOS", "iPadOS", "Web"],
  },
  {
    id: "sojourner",
    name: "Sojourner Bible",
    tagline: "Read the Bible. Track your journey.",
    brief: "A pastor needed a distraction-free Bible app that helped congregants build a daily reading habit. Existing apps were bloated with social features \u2014 he wanted something clean, focused, and encouraging with streak tracking.",
    delivered: [
      "Full KJV text with clean reader UI",
      "Progress tracking across 1,189 chapters",
      "Daily streaks & reading plans",
      "iPad-optimized split-view layout",
    ],
    timeline: "\u23F1 8 Days",
    kpis: [
      { value: "6.2K", label: "Downloads" },
      { value: "1.8K", label: "MAU" },
      { value: "4.9\u2605", label: "Rating" },
      { value: "72%", label: "Wk Retain" },
    ],
    screenshots: [
      { src: "/screenshots/sojourner/01.png", alt: "Sojourner Home" },
      { src: "/screenshots/sojourner/02.png", alt: "Sojourner Bible" },
      { src: "/screenshots/sojourner/03.png", alt: "Sojourner Progress" },
    ],
    accent: "text-neon-warm",
    accentBg: "bg-neon-warm",
    platforms: ["iOS", "iPadOS"],
  },
  {
    id: "launch-lab",
    name: "Launch Lab",
    tagline: "Turn your startup idea into a structured pitch",
    brief: "An incubator program needed an iPad tool for their cohort. Founders should be guided step-by-step from problem statement to revenue model \u2014 producing a clean, shareable pitch document at the end.",
    delivered: [
      "Step-by-step guided builder flow",
      "Problem \u2192 Solution \u2192 Audience \u2192 Revenue",
      "PDF export for investor sharing",
      "Freemium model with Pro tier",
    ],
    timeline: "\u23F1 6 Days",
    kpis: [
      { value: "3.4K", label: "Downloads" },
      { value: "890", label: "MAU" },
      { value: "4.7\u2605", label: "Rating" },
      { value: "2.1K", label: "Pitches" },
    ],
    screenshots: [
      { src: "/screenshots/launch-lab/01.png", alt: "Launch Lab Home" },
      { src: "/screenshots/launch-lab/02.png", alt: "Launch Lab Builder" },
      { src: "/screenshots/launch-lab/03.png", alt: "Launch Lab Settings" },
    ],
    accent: "text-neon-blue",
    accentBg: "bg-neon-blue",
    platforms: ["iPadOS"],
  },
];

export default function Home() {
  return (
    <>
      <Navigation />

      <div id="hero">
        <Hero />
      </div>

      <div id="capabilities">
        <Capabilities />
      </div>

      <div id="websites">
        <WebsiteBanner />
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-text-dim to-transparent" />
      </div>

      {caseStudies.map((cs, i) => (
        <div key={cs.id} id={cs.id}>
          <CaseStudy {...cs} reversed={i % 2 === 1} />
          {i < caseStudies.length - 1 && (
            <div className="max-w-6xl mx-auto px-6">
              <div className="h-px bg-gradient-to-r from-transparent via-text-dim to-transparent" />
            </div>
          )}
        </div>
      ))}

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-text-dim to-transparent" />
      </div>

      <div id="deuce">
        <DeuceCaseStudy />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-text-dim to-transparent" />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
