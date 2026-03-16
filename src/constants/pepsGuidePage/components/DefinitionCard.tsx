"use client";

import Image from "next/image";
import { useState } from "react";

export type CountryDefinition = {
  country: string;
  content: React.ReactNode;
};

export type PepCategory = {
  id: string;
  title: string;
  description: string;
  countries: CountryDefinition[];
};

const DefinitionCard = ({
  data,
  showSwipeHint = false,
  defaultExpanded = false,
}: {
  data: PepCategory;
  showSwipeHint?: boolean;
  defaultExpanded?: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);
  const [hintVisible, setHintVisible] = useState(showSwipeHint);

  return (
    <div
      className={`rounded-lg overflow-hidden ${isExpanded ? "bg-orange-04" : "bg-orange-03"}`}
      id={data.id}
    >
      <div className="p-6">
        <h3 className="text-h8 font-bold text-black-01">{data.title}</h3>
        <p className="mt-2 text-b5 text-black-01">{data.description}</p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 flex items-center gap-1 text-b6 text-black-01 underline font-medium hover:underline cursor-pointer"
        >
          See definitions from {data.countries.length} countries
          <svg
            className={`h-4 w-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {isExpanded && (
        <>
          {/* Desktop: table layout */}
          <div className="hidden md:block border border-orange-04 rounded-b-lg bg-white p-2">
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
          <div className="md:hidden border border-orange-04 rounded-b-lg relative p-2 bg-white">
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
      )}
    </div>
  );
};

export default DefinitionCard;
