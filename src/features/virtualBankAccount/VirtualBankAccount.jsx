import Header from "../../components/Header";
import WhatWeOffer from "../../components/WhatWeOffer";
import TopupHeroImg from "../../assets/hero/topup-hero-img.webp";
import FeaturesPageOverview from "../../components/FeaturesPageOverview";
import ContentItem from "../../components/ContentItem";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";

const offer = {
  bgImg: "./assets/hero/hero-section-bg-aesthetics.svg",
  headerText: "Top up your wallet with one time virtual account.",
  paragraphText:
    "Top up your FinQard wallet easily when you create a virtual bank account.",
  heroImg: TopupHeroImg,
  type: "mockup",
};

const pageOverview = {
  headerIntro: "Why you need a Virtual Bank Account",
  paragraphs: [
    "With FinQard's Virtual Bank Account, topping up your wallet is seamless and accessible. Here are a few things to look forward to",
  ],
};

const pageOverviewCardContent = [
  {
    contentHeaderText: "Swift Account Setup",
    contentParagraph:
      "With FinQard, you can open an account from the comfort of your home. There's no need to wait in long queues or fill out long forms.",
  },
  {
    contentHeaderText: "Zero Maintenance Charges",
    contentParagraph:
      "Your money is your money, period. There are no fees attached to your virtual bank account on Cardtonic. However, there are inflows fees.",
  },
  {
    contentHeaderText: "Protected and Reliable",
    contentParagraph:
      "Your funds are our top priority. You can fortify your wallet with multi-factor authentication to safeguard your info.",
  },
  {
    contentHeaderText: "Fast Transactions",
    contentParagraph:
      "With just a few taps, you can send money to anyone nationwide and they immediately receive it. No time to waste time!",
  },
];

function VirtualBankAccount() {
  return (
    <>
      <Header />
      <main>
        <WhatWeOffer offer={offer} />
        <section className="mt-12">
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
      <Testimonials />
      <Footer />
    </>
  );
}

export default VirtualBankAccount;
