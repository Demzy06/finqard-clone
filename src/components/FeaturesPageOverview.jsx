function FeaturesPageOverview({ headerIntro, paragraphs }) {
  return (
    <div className="px-4 text-center xl:w-[80%] xl:m-auto lg:w-[100%] lg:m-auto lg:px-0">
      <div className="">
        <h2 className="text-[30px] font-[550] text-black-700 mb-4 lg:text-[40px] lg:font-[550] lg:w-[85%] lg:m-auto lg:text-center xl:text-center xl:w-full xl:text-[48px] xl:font-[450]">
          {headerIntro}
        </h2>
        {paragraphs.map((paragraph) => (
          <p className="text-[17px] text-grey-700 font-[320] lg:text-[20px] lg:text-center lg:m-auto lg:w-full lg:px-0 xl:w-full xl:text-center xl:mb-3 lg:leading-7 xl:text-[18px] xl:font-[350]">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default FeaturesPageOverview;
