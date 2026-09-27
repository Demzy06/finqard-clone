function BriefSectionHighlight({ title, headerText, paragraphText }) {
  return (
    <div className="flex flex-col text-center w-[75%] m-auto lg:w-[55%] lg:m-auto lg:mb-20 xl:w-[40%]">
      <div className="mb-6 w-fit rounded-xl m-auto">
        <p className="text-[16px] font-[350] text-purple-600 border px-5 py-0.75 rounded-4xl border-purple-200 bg-grey-100">
          {title}
        </p>
      </div>
      <h2 className="text-dark-600 mb-4 lg:text-[56px] lg:font-semibold lg:tracking-tighter">
        {headerText}
      </h2>
      <p className="text-grey-600 text-[16px] lg:text-[18px] lg:font-light lg:w-[85%] lg:m-auto">
        {paragraphText}
      </p>
    </div>
  );
}

export default BriefSectionHighlight;
