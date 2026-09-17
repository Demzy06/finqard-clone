function BriefSectionHighlight({ title, headerText, paragraphText }) {
  return (
    <div className="flex flex-col text-center w-[75%] m-auto">
      <div className="mb-6 px-8 w-fit py-1 rounded-xl bg-white m-auto">
        <p className="text-[16px] font-light text-purple-600">{title}</p>
      </div>
      <h2 className="text-dark-600 mb-4">{headerText}</h2>
      <p className="text-grey-600 text-[16px] ">{paragraphText}</p>
    </div>
  );
}

export default BriefSectionHighlight;
