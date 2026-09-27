import BriefSectionHighlight from "../components/BriefSectionHighlight";
import { accordionData, briefHighlight } from "../data/Faqs";
import Accordion from "./Accordion";

function Faqs() {
  return (
    <section
      className="bg-grey-200 py-6 lg:py-23 xl:w-[90%] xl:m-auto"
      id="faqs"
    >
      <BriefSectionHighlight
        title={briefHighlight.title}
        headerText={briefHighlight.headerText}
        paragraphText={briefHighlight.paragraphText}
      />

      <ul className="px-4 mt-5 lg:w-[80%] lg:m-auto xl:w-[55%]">
        {accordionData.map((accordion) => (
          <Accordion accordion={accordion} />
        ))}
      </ul>
    </section>
  );
}

export default Faqs;
