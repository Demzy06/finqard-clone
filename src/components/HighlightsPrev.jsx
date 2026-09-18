import HighlightPreviewCard from "./HighlightPreviewCard";
import { features, briefHighlight } from "../data/HighlightPrev";
import BriefHighlight from "./BriefSectionHighlight";

function HighlightsPrev() {
  return (
    <section className="py-6 pb-4 bg-grey-300">
      <BriefHighlight
        title={briefHighlight.title}
        headerText={briefHighlight.headerText}
        paragraphText={briefHighlight.paragraphText}
      />
      <section className="card px-4  ">
        {features.map((feature) => (
          <HighlightPreviewCard feature={feature} />
        ))}
      </section>
    </section>
  );
}

export default HighlightsPrev;
