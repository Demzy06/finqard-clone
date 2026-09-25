// import AboutUsImg from "../assets/hero/about-us.webp";
// import xoxo from ".";

const styles = {
  hero: "h-80 object-cover rounded-4xl",
  mockup: "w-[90%] m-auto",
};
function WhatWeOffer({ offer }) {
  return (
    <div
      className={`px-5 ${offer.type === "mockup" ? "pb-0" : "pb-10"} pt-15 bg-[#F5F4FC] bg-[url('${offer.bgImg}')]`}
    >
      <div className="">
        <div className="text-center mb-10">
          <h1 className="text-black-700 text-[32px] font-[550] leading-11">
            {offer.headerText}
          </h1>
          <p className="text-[15px] font-[450] text-grey-700 mt-9 ">
            {offer.paragraphText}
          </p>
        </div>
        <img src={offer.heroImg} alt="" className={styles[offer.type]} />
      </div>
    </div>
  );
}

export default WhatWeOffer;
