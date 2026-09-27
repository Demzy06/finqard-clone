import Ticker from "./Ticker";

function TickerSection({ text, styles }) {
  return (
    <section className="mt-8 py-15 bg-grey-200 lg:py-23 lg:mb-11  xl:w-[90%] xl:m-auto">
      <h3
        className={`${styles} text-[30px] font-[450] tracking-tight leading-9 w-[80%] ml-7 mb-10 lg:text-[48px] lg:font-medium lg:w-full lg:text-center lg:ml-0 lg:leading-14 lg:tracking-tighter`}
      >
        {text}
      </h3>

      <Ticker start="0%" end="-50%" styles="mb-5" />
      <Ticker start="-50%" end="0%" />
    </section>
  );
}

export default TickerSection;
