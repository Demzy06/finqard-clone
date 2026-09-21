function Statements({ statement }) {
  return (
    <div className="mb- text-center">
      <h3 className="text-[24px] font-[450] text-black-700 mb-5 w-fit m-auto">
        {statement.title}
      </h3>
      <p className="text-grey-700 font-[350] text-[15px] mb-7">
        {statement.statementParagraphOne}
      </p>
      <p className="text-grey-700 font-[350] text-[15px]">
        {statement.statementParagraphTwo}
      </p>
    </div>
  );
}

export default Statements;
