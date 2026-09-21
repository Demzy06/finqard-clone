import WhatWeOffer from "../../components/WhatWeOffer";
import Header from "../../components/Header";
import FinQardStatement from "../../components/FinQardStatements";
import OurValues from "./component/OurValues";
import Faqs from "../../components/Faqs";
import Footer from "../../components/Footer";
function AboutUs() {
  return (
    <>
      <Header />
      <main className="">
        <WhatWeOffer />
        <FinQardStatement />
        <OurValues />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}

export default AboutUs;
