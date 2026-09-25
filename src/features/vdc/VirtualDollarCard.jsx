import Header from "../../components/Header";
import WhatWeOffer from "../../components/WhatWeOffer";
import VDCHeroImg from "../../assets/hero/vdc-hero-img.webp";
import FeaturesPageOverview from "../../components/FeaturesPageOverview";
import ContentItem from "../../components/ContentItem";
import VDCSecondaryImg from "../../assets/secondary/vdc-content-img-1.svg";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";

const offer = {
  bgImg: "./assets/hero/hero-section-bg-aesthetics.svg",
  headerText: "Obtain virtual cards that truly function.",
  paragraphText:
    "Shop effortlessly online with our Virtual Visa and Mastercard. Whether you're paying for services or making international purchases, we've got you covered!",
  heroImg: VDCHeroImg,
  type: "mockup",
};

const pageOverview = {
  headerIntro: "Get Virtual USD Cards on FinQard",
  paragraphs: [
    "In Nigeria, accessing international services typically necessitates a dollar card. Although a few platforms accept naira debit cards, most global services still bill in dollars.",
    "FinQard provides you with immediate access to a dependable USD card designed for online, international, and contactless transactions. You can shop, subscribe to worldwide services, and make international payments without needing a physical debit card or a domiciliary bank account.",
  ],
};

const pageOverviewCardContent = [
  {
    contentHeaderText: "Global Acceptance",
    contentParagraph:
      "Shop online, make global purchases, and enjoy contactless payments wherever Visa or Mastercards are accepted.",
  },
  {
    contentHeaderText: "Fund with Naira or Stablecoins",
    contentParagraph:
      "No need for a separate dollar account. Instantly fund your card from your Cardtonic Naira wallet or directly with supported stablecoins like USDT and USDC.",
  },
  {
    contentHeaderText: "Convenience On the Go",
    contentParagraph:
      "Access your virtual card details anytime in the app, allowing you to make international payments whenever necessary.",
  },
  {
    contentHeaderText: "Best Conversion Fees",
    contentParagraph:
      "Shop globally with transparent currency conversion fees and no hidden costs.",
  },
];

const virtualCardUseOptions = [
  "Works for online payments, subscriptions, and airline bookings",
  "Accepted on platforms that support Visa or Mastercard",
  "Funded easily with naira from your FinQard wallet",
  "Manage card details directly in the app",
  "Can be added to Apple Pay and Google Pay",
];

function VirtualDollarCard() {
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
        <section className="px-4 mt-15">
          <div>
            <h2 className="text-[28px] font-[550] text-center mb-8 m-auto">
              More use options on FinQard Virtual Card
            </h2>
            <p className="text-center text-[16px] font-light w-[85%] m-auto text-grey-700">
              FinQard provides multiple virtual dollar card options built for
              online, international, and contactless payments. Each option is
              designed to work reliably, depending on how and where you need to
              pay.
            </p>
            <ul className="mt-11 grid gap-y-4 pl-8">
              {virtualCardUseOptions.map((option) => (
                <li className="list-disc text-[20px] font-[350] text-grey-700 leading-6">
                  {option}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#F9F9FA] mt-15 py-9 px-7 rounded-3xl bg-linear-to-bl from-[#F9F9FA]  to-white ">
            <img src={VDCSecondaryImg} alt="card-img" />
          </div>
        </section>
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default VirtualDollarCard;
