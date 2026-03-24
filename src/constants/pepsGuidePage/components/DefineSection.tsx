"use client";
import DefinitionCard from "./DefinitionCard";
import CollapseSection from "./CollapseSection";
import {
  foreignPepsData,
  referencePepsData,
  findingPepsData,
} from "./defineData";
import { useState } from "react";
import Image from "next/image";

const DefineSection = () => {
  const [hintVisible, setHintVisible] = useState(true);
  const data = referencePepsData[0];
  const findingData = findingPepsData[0];
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
        <>
          {/* Desktop: table layout */}
          <div className="hidden md:block rounded-b-lg bg-white">
            <table className="w-full table-fixed text-left text-b6">
              <thead>
                <tr className="border-b border-2 border-white bg-[#E6E6E6]">
                  {data.countries.map((c) => (
                    <th
                      key={c.country}
                      className="px-6 py-3 font-bold text-black-01 text-b5 border-r border-2 border-white"
                    >
                      {c.country}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-2 border-white bg-[#E6E6E6]">
                  {data.countries.map((c) => (
                    <td
                      key={c.country}
                      className="p-4 align-top text-b6 text-black-01 border-r border-white border-2 last:border-r-0"
                    >
                      {c.content}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile: table layout with horizontal scroll */}
          <div className="md:hidden rounded-b-lg relative bg-white">
            <div className="overflow-x-auto scrollbar-hide">
              <table
                className="text-left text-b6"
                style={{ minWidth: `${data.countries.length * 240}px` }}
              >
                <thead>
                  <tr className="border-b border-2 border-white bg-[#E6E6E6]">
                    {data.countries.map((c) => (
                      <th
                        key={c.country}
                        className="px-6 py-3 font-bold text-black-01 text-b5 border-r border-2 border-white"
                        style={{ minWidth: "240px" }}
                      >
                        {c.country}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-2 border-white bg-[#E6E6E6]">
                    {data.countries.map((c) => (
                      <td
                        key={c.country}
                        className="p-4 align-top text-b6 text-black-01 border-r border-white border-2 last:border-r-0"
                        style={{ minWidth: "240px" }}
                      >
                        {c.content}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            {hintVisible && (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={() => setHintVisible(false)}
              >
                <div className="flex items-center justify-center flex-col gap-3 bg-black/60 px-4 py-2 text-white text-b6 h-full w-full">
                  <Image
                    src="/icons/swipe.svg"
                    alt="swipe"
                    width={60}
                    height={63}
                  />
                  <span className="text-center text-h9 font-bold text-white">
                    Swipe for more information
                  </span>
                </div>
              </div>
            )}
          </div>
        </>
      </CollapseSection>

      <CollapseSection title="Findings">
        <>
          {/* Desktop: table layout */}
          <div className="hidden md:block rounded-b-lg bg-white">
            <table className="w-full table-fixed text-left text-b6">
              <thead>
                <tr className="border-b border-2 border-white bg-[#E6E6E6]">
                  {findingData.countries.map((c) => (
                    <th
                      key={c.country}
                      className="px-6 py-3 font-bold text-black-01 text-b5 border-r border-2 border-white"
                    >
                      {c.country}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-2 border-white bg-[#E6E6E6]">
                  {findingData.countries.map((c) => (
                    <td
                      key={c.country}
                      className="p-4 align-top text-b6 text-black-01 border-r border-white border-2 last:border-r-0"
                    >
                      {c.content}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile: table layout with horizontal scroll */}
          <div className="md:hidden rounded-b-lg relative bg-white">
            <div className="overflow-x-auto scrollbar-hide">
              <table
                className="text-left text-b6"
                style={{ minWidth: `${findingData.countries.length * 240}px` }}
              >
                <thead>
                  <tr className="border-b border-2 border-white bg-[#E6E6E6]">
                    {findingData.countries.map((c) => (
                      <th
                        key={c.country}
                        className="px-6 py-3 font-bold text-black-01 text-b5 border-r border-2 border-white"
                        style={{ minWidth: "240px" }}
                      >
                        {c.country}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-2 border-white bg-[#E6E6E6]">
                    {findingData.countries.map((c) => (
                      <td
                        key={c.country}
                        className="p-4 align-top text-b6 text-black-01 border-r border-white border-2 last:border-r-0"
                        style={{ minWidth: "240px" }}
                      >
                        {c.content}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            {hintVisible && (
              <div
                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                onClick={() => setHintVisible(false)}
              >
                <div className="flex items-center justify-center flex-col gap-3 bg-black/60 px-4 py-2 text-white text-b6 h-full w-full">
                  <Image
                    src="/icons/swipe.svg"
                    alt="swipe"
                    width={60}
                    height={63}
                  />
                  <span className="text-center text-h9 font-bold text-white">
                    Swipe for more information
                  </span>
                </div>
              </div>
            )}
          </div>
        </>
      </CollapseSection>

      <p className="text-b5 text-black-01">
        This guideline is a great starting point and a main standard we decided
        to build upon. However, each country will have different legislative and
        regulatory context to support the definition of each group. The
        following are initial frameworks to map FATF definitions to national
        regulatory definitions and where definitions are still not clearly
        defined from 3 countries in the network.
      </p>
    </div>
  );
};

export default DefineSection;
