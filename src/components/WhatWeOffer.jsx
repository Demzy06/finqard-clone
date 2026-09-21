import AboutUsImg from "../assets/hero/about-us.webp";
// import xoxo from "../assets/hero/hero-section-bg-aesthetics.svg";

function WhatWeOffer({ bgImg, headerText, paragraphText, heroImg }) {
  return (
    <div className="px-5 pb-10 pt-15 bg-[#F5F4FC] bg-[url('./assets/hero/hero-section-bg-aesthetics.svg')] ">
      <div className=" ">
        <div className="text-center mb-10">
          <h1 className="text-black-700 text-[32px] font-[550] leading-11">
            We're building the future of giftcard trading
          </h1>
          <p className="text-[15px] font-[450] text-grey-700 mt-9 ">
            We're revolutionizing the world of virtual card payments and bill
            management. Our app equips users to enable them to manage their
            finances effortlessly, from handling payments and tracking gift card
            trading.
          </p>
        </div>
        <img
          src={AboutUsImg}
          alt=""
          className="h-80 object-cover rounded-4xl"
        />
      </div>
    </div>
  );
}

export default WhatWeOffer;
