import ContentItem from "../../../components/ContentItem";
import { values } from "../../../data/ourValues";

function OurValues() {
  return (
    <section className="px-5 mt-10 mb-12">
      <div className="text-center">
        <div className="flex ">
          <span className="p-3">
            <div className="rounded-full text-80 text-purple-700 w-[100px]" />
          </span>
          <h2 className="text-[16px] font-normal text-black-700">Our Values</h2>
        </div>
        <p className="text-[24px] font-[450] mt-5 text-black-700">
          The principles that guild everything we do
        </p>
        <p className="text-[18px] font-[320] mt-3 text-grey-600">
          Six core values that shape how we build, how we work, and how we serve
          our users every single day.
        </p>
      </div>
      <div className="mt-15 grid gap-y-5">
        {values.map((value, i) => (
          <ContentItem content={value} numbering={i} />
        ))}
      </div>
    </section>
  );
}

export default OurValues;
