import DefinitionCard from "./DefinitionCard";
import CollapseSection from "./CollapseSection";
import { foreignPepsData } from "./defineData";

const DefineSection = () => {
  return (
    <div
      className="flex flex-col gap-2.5 max-w-[776px] mx-auto md:p-8 md:mt-8 p-4 mt-2"
      id="defining:-who-is-peps?"
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-blue-01 text-h5">
          Defining: Who is PEPs?
        </h2>
        <p className="text-b5 text-black-01">
          The Financial Action Task Force (FATF) published{" "}
          <a
            href="https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Peps-r12-r22.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-01 underline font-bold"
          >
            FATF Guidance: Politically Exposed Persons (Recommendations 12 and
            22)
          </a>{" "}
          ​ categorized PEPs into 5 groups.
        </p>
      </div>

      <div className="w-[calc(100vw-2.1rem)] max-w-[776px] md:w-full flex flex-col gap-2.5">
        {foreignPepsData.map((item, index) => (
          <DefinitionCard
            key={item.id}
            data={item}
            showSwipeHint
            defaultExpanded={index === 0}
          />
        ))}
      </div>

      <CollapseSection title="References">
        <p>References content goes here.</p>
      </CollapseSection>

      <CollapseSection title="Findings">
        <p>
          This guideline is a great starting point and a main standard we
          decided to build upon. However, each country will have different
          legislative and regulatory context to support the definition of each
          group. The following are initial frameworks to map FATF definitions to
          national regulatory definitions and where definitions are still not
          clearly defined from 3 countries in the network.
        </p>
      </CollapseSection>
    </div>
  );
};

export default DefineSection;
