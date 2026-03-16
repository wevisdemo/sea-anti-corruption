"use client";

import { useState } from "react";

export type DataStandard = {
  id: string;
  title: string;
  description: string;
  tableColumns: { name: string; type: string; description: string }[];
};

const DefinitionDataCard = ({
  data,
  defaultExpanded = false,
}: {
  data: DataStandard;
  defaultExpanded?: boolean;
}) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

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
          See dataset table
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
        <div className="border border-orange-04 rounded-b-lg bg-white p-4">
          <div className="overflow-x-auto border border-[#E6E6E6] rounded-sm">
            <table className="w-full text-center text-b6">
              <thead>
                <tr>
                  <th className="px-4 py-2 font-bold text-black-01 text-h11 bg-[#C5CFFA] border-b border-[#E6E6E6]">
                    Field / Column Name
                  </th>
                  <th className="px-4 py-2 font-bold text-black-01 text-h11 bg-[#C5CFFA] border-b border-[#E6E6E6]">
                    Data Type
                  </th>
                  <th className="px-4 py-2 font-bold text-black-01 text-h11 bg-[#C5CFFA] border-b border-[#E6E6E6]">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.tableColumns.map((col) => (
                  <tr
                    key={col.name}
                    className="border-b border-[#E6E6E6] text-b6"
                  >
                    <td className="px-4 py-2 font-bold text-black-01 border-r border-[#E6E6E6]">
                      {col.name}
                    </td>
                    <td className="px-4 py-2 text-black-01 border-r border-[#E6E6E6]">
                      {col.type}
                    </td>
                    <td className="px-4 py-2 text-black-01">
                      {col.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default DefinitionDataCard;
