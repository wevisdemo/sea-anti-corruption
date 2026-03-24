import DefinitionDataCard from "./DefinitionDataCard";
import { dataStandard } from "./defineData";

const DataSection = () => {
  return (
    <div
      className="flex flex-col gap-2.5 max-w-[776px] mx-auto md:p-8 md:mt-8 p-4 mt-2"
      id="data-standard:-put-peps-into-a-structure"
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-blue-01 text-h5">
          Data Standard: Put PEPs Into a Structure
        </h2>
        <p className="text-b5 text-black-01">
          After we know who should be considered as PEPs, we can start
          collecting the data. Data standard is a “Set of designed data
          structures for a specific purpose​”. In this study, we want to propose
          one for PEPs because it will provide the following benefits:
          <br />
          <ol className="text-b5 text-black-01 list-decimal pl-5 marker:font-bold">
            <li className="ml-2">
              {" "}
              <b className="font-bold">
                Easy to get started for any organization​​.
              </b>{" "}
              Anyone can follow this guideline without rethinking the data
              structure again.
            </li>
            <li className="ml-2">
              <b className="font-bold">Reusable knowledge and tools.</b>{" "}
              Organizations can use the same tools and knowledge to understand
              PEPs datasets from different regions.
            </li>
            <li className="ml-2">
              <b className="font-bold">
                Ability to join datasets across sources​​.
              </b>{" "}
              We can connect PEPs across regions to analyze cross-border
              connections.
            </li>
          </ol>
        </p>
        <p className="text-b5 text-black-01">
          Our proposed standard is based on{" "}
          <a
            href="https://www.popoloproject.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-01 underline font-bold"
          >
            Popolo: International open government data specifications
          </a>{" "}
          ​ which were adopted by many public sectors and civic tech e.g.  My
          Society (UK), g0v (Taiwan), and Sinar Project (Malaysia). The standard
          itself is not tied to any specific data storage and formats, you can
          use a full feature database or starting with just Google Sheets which
          is highly recommended if you want to get started with limited
          technical resources.
        </p>
        <p className="text-b5 text-black-01">
          The PEPS dataset should contain 6 entities, each entity might be
          represented as a table or a spreadsheet.
        </p>
      </div>

      <div className="w-[calc(100vw-2.1rem)] max-w-[776px] md:w-full flex flex-col gap-2.5">
        {dataStandard.map((item, index) => (
          <DefinitionDataCard
            key={item.id}
            data={item}
            defaultExpanded={index === 0}
          />
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-h7 font-bold text-black-01">Internationalization</p>
        <p className="text-b5 text-black-01">
          To be able to use across datasets with the same standard at the
          international level, English name, and translation is important.
          However, we propose to use the local official language by default,
          then if the English name and translation for each column will be
          appended <b className="font-normal text-[#60696F]">_en</b> at the end
          of column name e.g. <b className="font-normal text-[#60696F]">name</b>{" "}
          and <b className="font-normal text-[#60696F]">name_en</b>
        </p>
        <p className="text-b5 text-black-01">
          Why use the local language by default?
          <br />
          <ol className="text-b5 text-black-01 list-decimal pl-5 ">
            <li className="ml-2">
              Local people should be the main target group who will have the
              main opportunity and benefit of using the PEPs dataset. Using
              English would decrease local people's accessibility to the
              dataset.
            </li>
            <li className="ml-2">
              If a country doesn't use English as an official language, like
              Thailand, where almost every official document is in Thai, adding
              an English translation would take a lot of effort. Therefore, it
              would be advisable to release in an official language first as a
              main priority, then translation can be followed.
            </li>
          </ol>
        </p>
      </div>
    </div>
  );
};

export default DataSection;
