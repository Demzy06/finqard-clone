import WhatWeOffer from "../../components/WhatWeOffer";
import Header from "../../components/Header";
import FinQardStatement from "./component/FinQardStatements";
import OurValues from "./component/OurValues";
import Faqs from "../../components/Faqs";
import Footer from "../../components/Footer";
// import BackgroundImg from "../../assets/hero/hero-section-bg-aesthetics.svg";
import AboutUsImg from "../../assets/hero/about-us.webp";

const offer = {
  bgImg: "./assets/hero/hero-section-bg-aesthetics.svg",
  headerText: " We're building the future of giftcard trading",
  paragraphText:
    "We're revolutionizing the world of virtual card payments and bill management. Our app equips users to enable them to manage their finances effortlessly, from handling payments and tracking gift card trading.",
  heroImg: AboutUsImg,
  type: "hero",
};
function AboutUs() {
  return (
    <>
      <Header />
      <main className="">
        <WhatWeOffer offer={offer} />
        <FinQardStatement />
        <OurValues />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}

export default AboutUs;
