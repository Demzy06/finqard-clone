import HandMockup from "../../../assets/hero/mockup-hand.webp";

function HomePageHeroSection() {
  return (
    <section className="mt-10 px-4 lg:px-15 xl:px-35">
      <article>
        <h2 className=" text-[28px] font-[550] text-dark-600 md:text-[61px] lg:font-semibold xl:w-[70%]">
          Explore
          <span className="text-purple-700"> virtual dollar cards</span>,
          <span className="text-purple-300"> gift cards </span>
          and
          <span className="text-grey-500"> digital payment solutions</span>
        </h2>
        <p className="mt-6 text-grey-700 lg:mt-12 lg:text-[24px] lg:w-[75%] lg:font-normal xl:w-[52%] xl:leading-8">
          FinQard is the best and most trusted platform to trade your gift cards
          for instant cash or instant digital assets
        </p>
      </article>
      <div className="bg-[url('./assets/decorative/home-hero-img-sm.svg')] bg-cover bg-center bg-no-repeat h-110  w-full mt-4 rounded-[50px] z-1 overflow-hidden relative flex md:overflow-visible md:overflow-x-hdden xl:mt-15">
        <img
          src={HandMockup}
          alt="mockup-img"
          className="ml-15 scale-x-180 scale-y-120 lg:left-65 lg:scale-110 lg:bottom-10 lg:absolute lg:z-1000 xl:left-99 xl:scale-100 xl:bottom-0 "
        />
      </div>
    </section>
  );
}

export default HomePageHeroSection;
