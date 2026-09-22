import { statements } from "../../../data/finQardStatements";
import Statement from "../../../components/Statement";

function FinQardStatements() {
  return (
    <section className="px-5 py-14 gap-y-13 grid">
      {statements.map((statement) => (
        <Statement statement={statement} />
      ))}
    </section>
  );
}

export default FinQardStatements;
