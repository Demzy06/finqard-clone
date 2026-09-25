import Header from "../../components/Header";
import WhatWeOffer from "../../components/WhatWeOffer";
import BillPaymentMockup from "../../assets/hero/paybills-mobile-mock-hero.webp";
import FeaturesPageOverview from "../../components/FeaturesPageOverview";
import ContentItem from "../../components/ContentItem";
import AirtimeDecorativeImg from "../../assets/decorative/airtime-decorative.webp";
import BettingDecorativeImg from "../../assets/decorative/betting-decorative.png";
import DataDecorativeImg from "../../assets/decorative/data-decorative.webp";
import ElectricityDecorativeImg from "../../assets/decorative/electricity-decorative.webp";
import TvDecorativeImg from "../../assets/decorative/tv-decorative.webp";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";

const offer = {
  bgImg: "./assets/hero/hero-section-bg-aesthetics.svg",
  headerText: "Pay Bills like No Tomorrow",
  paragraphText:
    "With FinQard, you can manage and pay all your essential bills in one place. Be it Airtime, Data, Internet , Cable TV and Betting",
  heroImg: BillPaymentMockup,
  type: "mockup",
};

const pageOverview = {
  headerIntro: "Bill Payment Categories",
  paragraphs: [
    "With FinQard, you can organise and pay all your essential bills in one place. Find the available categories below",
  ],
};

const pageOverviewCardContent = [
  {
    contentHeaderText: "Airtime",
    contentDecorativeImg: AirtimeDecorativeImg,
  },
  {
    contentHeaderText: "Data",
    contentDecorativeImg: DataDecorativeImg,
  },
  {
    contentHeaderText: "Electricity",
    contentDecorativeImg: ElectricityDecorativeImg,
  },
  {
    contentHeaderText: "Cable TV",
    contentDecorativeImg: TvDecorativeImg,
  },
  {
    contentHeaderText: "Betting",
    contentDecorativeImg: BettingDecorativeImg,
  },
];

function BillPayment() {
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
              <div className="bg-[#FAFAFA] p-5 pr-0 py-7 rounded-4xl border border-gray-100 relative">
                <h2 className="text-[22px] font-[550] text-purple-700 bg-grey-100 py-3 px-5 w-fit h-fit rounded-full">
                  {i + 1}
                </h2>
                <div className="mt-10 w-[85%] flex justify-between">
                  <h2 className="text-[23px] font-semibold">
                    {content.contentHeaderText}
                  </h2>
                </div>
                <img
                  src={content.contentDecorativeImg}
                  alt={`${content.contentHeaderText.toLowerCase()}-icon`}
                  className="w-40  object-cover absolute bottom-0 right-0 overflow-hidden"
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Testimonials />
      <Footer />
    </>
  );
}

export default BillPayment;
