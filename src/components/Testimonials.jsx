import BriefHighlight from "./BriefSectionHighlight";
import { briefSectionHighlight, testimonials } from "../data/Testimonials";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  return (
    <section className="pt-15 pb-10 ">
      <BriefHighlight
        title={briefSectionHighlight.title}
        headerText={briefSectionHighlight.headerText}
        paragraphText={briefSectionHighlight.paragraphText}
      />

      <div className="px-4">
        {testimonials.map((testimony) => (
          <TestimonialCard testimony={testimony} />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
