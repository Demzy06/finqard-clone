import Faqs from "../../components/Faqs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HighlightsPrev from "../../components/HighlightsPrev";
import Testimonials from "../../components/Testimonials";
import TickerSection from "../../components/TickerSection";

import HomePageHeroSection from "./component/HomePageHeroSection";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function HomePage() {
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (location.hash === "#faqs") {
      document.getElementById("faqs")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <div className="h-fit">
      <Header />

      <main className=" bg-white h-fit">
        <HomePageHeroSection />
        <TickerSection />
        <HighlightsPrev />
        <Testimonials />
        <Faqs />
        <Footer />
      </main>
    </div>
  );
}

export default HomePage;
