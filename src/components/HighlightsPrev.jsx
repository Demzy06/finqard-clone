import HighlightPreviewCard from "./HighlightPreviewCard";
import { features, briefHighlight } from "../data/HighlightPrev";
import BriefHighlight from "./BriefSectionHighlight";

function HighlightsPrev() {
  return (
    <section className="py-6 pb-4 bg-grey-300 lg:pt-22 lg:pb-20">
      <BriefHighlight
        title={briefHighlight.title}
        headerText={briefHighlight.headerText}
        paragraphText={briefHighlight.paragraphText}
      />
      <section className="card px-4 lg:grid lg:grid-cols-6 lg:gap-9 lg:gap-y-1 lg:px-18 xl:px-35 ">
        {features.map((feature) => (
          <HighlightPreviewCard feature={feature} />
        ))}
      </section>
    </section>
  );
}

export default HighlightsPrev;
