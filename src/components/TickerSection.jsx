import Ticker from "./Ticker";

function TickerSection({ text, styles }) {
  return (
    <section className="mt-8 py-15 bg-grey-200">
      <h3
        className={`${styles} text-[30px] font-[450] tracking-tight leading-9 w-[80%] ml-7 mb-10`}
      >
        Explore our app to discover a variety of gift cards you can trade!
      </h3>

      <Ticker start="0%" end="-50%" styles="mb-5" />
      <Ticker start="-50%" end="0%" />
    </section>
  );
}

export default TickerSection;
