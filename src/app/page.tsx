import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CenterSection from "./components/CenterSection";
import WorkSection from "./components/Work";
import SponsorSection from "./components/Sponsor";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
      </main>
      <HeroSection />
      <CenterSection />
      <WorkSection />
      <SponsorSection />
      <Footer />
    </div>
  )
}