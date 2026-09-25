function FeaturesPageOverview({ headerIntro, paragraphs }) {
  return (
    <div className="px-4 text-center">
      <div>
        <h2 className="text-[30px] font-[550] text-black-700 mb-4">
          {headerIntro}
        </h2>
        {paragraphs.map((paragraph) => (
          <p className="text-[17px] text-grey-700 font-[320]">{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default FeaturesPageOverview;
