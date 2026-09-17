import HandMockup from "../../../assets/hero/mockup-hand.webp";

function HomePageHeroSection() {
  return (
    <section className="mt-10 px-4">
      <article>
        <h2 className=" text-[28px] font-[550] text-dark-600">
          Explore
          <span className="text-purple-700"> virtual dollar cards</span>,
          <span className="text-purple-300"> gift cards </span>
          and
          <span className="text-grey-500"> digital payment solutions</span>
        </h2>
        <p className="mt-6 text-grey-700">
          FinQard is the best and most trusted platform to trade your gift cards
          for instant cash or instant digital assets
        </p>
      </article>
      <div className="bg-[url('./assets/decorative/home-hero-img-sm.svg')] bg-cover bg-center bg-no-repeat h-110  w-full mt-4 rounded-[50px] z-1000 overflow-hidden">
        <img src={HandMockup} alt="" className=" ml-12 pt-7 scale-175 " />
      </div>
    </section>
  );
}

export default HomePageHeroSection;
