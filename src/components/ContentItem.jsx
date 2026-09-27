function ContentItem({ content, numbering }) {
  return (
    <div className="bg-[#FAFAFA] p-5 py-7 rounded-4xl border border-gray-100 md:px-6.5 ">
      <h2 className="text-[22px] font-[550] text-purple-700 bg-grey-100 py-3 px-5 w-fit h-fit rounded-full">
        {numbering + 1}
      </h2>
      <div className="mt-10 w-[85%] md:w-[90%] ">
        <h2 className="text-[23px] font-semibold md:text-[24px] md:font-[550]">
          {content.contentHeaderText}
        </h2>
        <p className="mt-5 text-gray-600">{content.contentParagraph}</p>
      </div>
    </div>
  );
}

export default ContentItem;
