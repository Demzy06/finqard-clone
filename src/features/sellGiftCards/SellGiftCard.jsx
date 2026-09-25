import Header from "../../components/Header";
import WhatWeOffer from "../../components/WhatWeOffer";
import MockupGiftcard from "../../assets/hero/mockup-giftcard.webp";
import FinqardGiftCardImg from "../../assets/secondary/fingard-gift-card-art.webp";
import TickerSection from "../../components/TickerSection";
import FeaturesPageOverview from "../../components/FeaturesPageOverview";
import ContentItem from "../../components/ContentItem";
import Testimonals from "../../components/Testimonials";
import Footer from "../../components/Footer";

const offer = {
  bgImg: "./assets/hero/hero-section-bg-aesthetics.svg",
  headerText: " We're building the future of giftcard trading",
  paragraphText:
    "We're revolutionizing the world of virtual card payments and bill management. Our app equips users to enable them to manage their finances effortlessly, from handling payments and tracking gift card trading.",
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
  return (
    <>
      <Header />
      <main>
        <WhatWeOffer offer={offer} />
        <section className="mt-12">
          <div className="w-[85%] m-auto text-center">
            <h2 className="text-[30px] font-[550]text-black-700 mb-8">
              The best giftcard trading platform in Nigeria
            </h2>
            {xo.map((item) => (
              <p className="text-[16px] text-grey-600 mb-4 font-light">
                {item}
              </p>
            ))}
            <div className="bg-[#F9F9FA] mt-15 p-4 rounded-3xl">
              <img src={FinqardGiftCardImg} alt="finQard-art-img" />
            </div>
          </div>
        </section>
        <section>
          <TickerSection text="Accepted Giftcards" styles="text-center" />
        </section>
        <section>
          <FeaturesPageOverview
            headerIntro={pageOverview.headerIntro}
            paragraphs={pageOverview.paragraphs}
          />
          <div className="grid gap-y-5 px-4 mt-12">
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
