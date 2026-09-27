// import AboutUsImg from "../assets/hero/about-us.webp";
// import xoxo from ".";

const styles = {
  hero: "h-80 object-cover rounded-4xl md:h-140 xl:h-170 xl:mt-25",
  mockup: "w-[90%] m-auto lg:w-[48%] lg:mt-18 xl:w-[33%]",
};
function WhatWeOffer({ offer }) {
  return (
    <div
      className={`px-5 ${offer.type === "mockup" ? "pb-0" : "pb-10"} pt-15 bg-[#F5F4FC] bg-[url('./assets/hero/hero-section-bg-aesthetics.svg')] md:pt-25 md:px-8 xl:w-[90%] xl:m-auto`}
    >
      <div className="xl:w-[80%] xl:m-auto">
        <div className="text-center mb-10 md:px-0 xl:w-[80%] xl:m-auto lg:w-[80%] lg:m-auto">
          <h1 className="text-black-700 text-[32px] font-[550] leading-11 md:text-[48px] md:w-[70%] md:leading-15 md:m-auto">
            {offer.headerText}
          </h1>
          <p className="text-[15px] font-[450] text-grey-700 mt-9 md:text-[19px] md:font-[450]">
            {offer.paragraphText}
          </p>
        </div>
        <img src={offer.heroImg} alt="" className={styles[offer.type]} />
      </div>
    </div>
  );
}

export default WhatWeOffer;
