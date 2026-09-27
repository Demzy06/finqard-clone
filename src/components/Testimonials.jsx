import BriefHighlight from "./BriefSectionHighlight";
import { briefSectionHighlight, testimonials } from "../data/Testimonials";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <section className="pt-15 pb-10 xl:w-[90%] xl:m-auto ">
      <BriefHighlight
        title={briefSectionHighlight.title}
        headerText={briefSectionHighlight.headerText}
        paragraphText={briefSectionHighlight.paragraphText}
      />

      <div className="px-4 lg:grid grid-cols-2 gap-x-4 lg:px-18 xl:px-60 xl:gap-x-0">
        {testimonials.map((testimony) => (
          <TestimonialCard testimony={testimony} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
