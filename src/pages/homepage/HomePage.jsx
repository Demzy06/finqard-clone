import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Faqs from "../../components/Faqs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HighlightsPrev from "../../components/HighlightsPrev";
import Testimonials from "../../components/Testimonials";
import TickerSection from "../../components/TickerSection";

import HomePageHeroSection from "./component/HomePageHeroSection";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

const tickerText = [
  " Explore our app to discover a variety of gift cards you can trade!",
];

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

  useEffect(function () {
    scrollToTop();
  }, []);

  return (
    <>
      <Header />

      <main className=" bg-white h-fit md:overflow-x-hidden xl:mt-10  :px-120">
        <HomePageHeroSection />
        <TickerSection text={tickerText} />
        <HighlightsPrev />
        <Testimonials />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
