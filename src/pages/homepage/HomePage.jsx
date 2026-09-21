import Faqs from "../../components/Faqs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HighlightsPrev from "../../components/HighlightsPrev";
import Testimonials from "../../components/Testimonials";
import TickerSection from "../../components/TickerSection";
import HomePageHeroSection from "./component/HomePageHeroSection";

function HomePage() {
  return (
    <div className="h-fit">
      <Header />

      <main className=" bg-white pb-10 h-fit">
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
