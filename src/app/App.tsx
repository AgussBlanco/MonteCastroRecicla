import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HowToRecycle } from "./components/HowToRecycle";
import { GreenPoints } from "./components/GreenPoints";
import { ClaimForm } from "./components/ClaimForm";
import { FAQ } from "./components/FAQ";
import { FeedbackBanner } from "./components/FeedbackBanner";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#F1EFE8" }}>
      {/* MARKER-MAKE-KIT-INVOKED — no kit present, using Tailwind + lucide-react */}
      <Navbar />
      <main>
        <Hero />
        <HowToRecycle />
        <GreenPoints />
        <ClaimForm />
        <FeedbackBanner />
        <FAQ />
      </main>
      <Footer />

      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(44,44,42,0.15); border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(44,44,42,0.3); }

        @media (max-width: 700px) {
          form { padding: 24px !important; }
        }
      `}</style>
    </div>
  );
}
