import Header from "../../components/Header";
import WhatWeOffer from "../../components/WhatWeOffer";
import MockupGiftcard from "../../assets/hero/mockup-giftcard.webp";
import FinqardGiftCardImg from "../../assets/secondary/fingard-gift-card-art.webp";
import TickerSection from "../../components/TickerSection";
import FeaturesPageOverview from "../../components/FeaturesPageOverview";
import ContentItem from "../../components/ContentItem";
import Testimonals from "../../components/Testimonials";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import { scrollToTop } from "../../helpers/scrollToTop";

const offer = {
  bgImg: "./assets/hero/hero-section-bg-aesthetics.svg",
  headerText: "Sell gift card and earn Naira in Seconds",
  paragraphText:
    "Turn your unused gift cards into cash instantly at unbeatable rates!",
  heroImg: MockupGiftcard,
  type: "mockup",
};

const xo = [
  "We often find ourselves with gift cards we don't use or balances we forget about.",
  "FinQard helps by letting you convert gift cards to naira at great rates, turning unused cards into real cash.",
  " Say farewell to wasted gift cards and welcome extra money in your wallet.",
];

const pageOverview = {
  headerIntro: "Why is FinQard the best palce to sell gift cards",
  paragraphs: [
    "Discover the advantages of trading gift cards with FinQard in Nigeria.Enjoy seamless transactions, competitive rates, and a user-friendly platform that makes selling gift cards easier than ever!",
  ],
};

const pageOverviewCardContent = [
  {
    contentHeaderText: "Instant Payments",
    contentParagraph:
      "With our top-notch payment methods, you'll get paid for your gift card swap in just a few minutes!",
  },
  {
    contentHeaderText: "Competitive Rates",
    contentParagraph:
      "Unlock the highest returns on your gift cards with our unbeatable rates, helping you make the most money when you sell!",
  },
  {
    contentHeaderText: "Cross Platform",
    contentParagraph:
      "Purchase gift cards in Naira effortlessly, anytime and anywhere, with our sleek app available on both Android and iOS.",
  },
  {
    contentHeaderText: "Trusted and Secure",
    contentParagraph:
      "Trade gift cards securely using top-notch encryption and a thoroughly reviewed exchange platform.",
  },
];

function SellGiftCard() {
  useEffect(function () {
    scrollToTop();
  }, []);

  return (
    <>
      <Header />
      <main>
        <WhatWeOffer offer={offer} />
        <section className="mt-12 xl:w-[90%] xl:m-auto xl:py-20">
          <div className="w-[85%] m-auto text-center lg:flex lg:justify-between lg:items-center">
            <div className="lg:w-[45%]">
              <h2 className="text-[30px] font-[550]text-black-700 mb-8 lg:text-[40px] lg:font-[550] lg:text-start">
                The best giftcard trading platform in Nigeria
              </h2>
              {xo.map((item) => (
                <p className="text-[16px] text-grey-600 mb-4 font-light lg:text-[20px] lg:font-[350] lg:text-start">
                  {item}
                </p>
              ))}
            </div>
            <div className="bg-[#F9F9FA] mt-15 p-4 rounded-3xl lg:w-[45%] lg:mt-0">
              <img src={FinqardGiftCardImg} alt="finQard-art-img" />
            </div>
          </div>
        </section>
        <section>
          <TickerSection text="Accepted Giftcards" styles="text-center" />
        </section>
        <section className="lg:px-20 xl:w-[90%] xl:m-auto xl:py-20">
          <FeaturesPageOverview
            headerIntro={pageOverview.headerIntro}
            paragraphs={pageOverview.paragraphs}
          />
          <div className="grid gap-y-5 px-4 mt-12 lg:grid lg:grid-cols-2 lg:gap-5">
            {pageOverviewCardContent.map((content, i) => (
              <ContentItem content={content} numbering={i} />
            ))}
          </div>
        </section>
      </main>
      <Testimonals />
      <Footer />
    </>
  );
}

export default SellGiftCard;
