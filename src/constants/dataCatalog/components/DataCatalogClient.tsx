"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Dataset } from "@/src/services/type";
import FilterSidebar, { FilterSection } from "./FilterSidebar";
import Image from "next/image";
import Link from "next/link";
import WhatNextSection from "./WhatNextSection";

function getFilterOptions(
  datasets: Dataset[],
  extractor: (item: Dataset) => string[],
): { label: string; count: number }[] {
  const counts: Record<string, number> = {};
  datasets.forEach((item) => {
    extractor(item).forEach((v) => {
      const trimmed = v.trim();
      if (trimmed) {
        counts[trimmed] = (counts[trimmed] || 0) + 1;
      }
    });
  });
  return Object.entries(counts)
    .map(([label, count]) => ({ label, count }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

const CatalogCard = ({ item }: { item: Dataset }) => (
  <div className="rounded-lg border border-background-01 overflow-hidden">
    <div className="flex flex-col gap-2 bg-background-01 px-6 pt-4 pb-2">
      <h3 className="font-bold text-black-01 text-b5">{item.title}</h3>
      <div className="flex flex-wrap gap-x-6 gap-y-1 text-b6 text-black-01">
        <span className="flex items-center gap-1">
          <Image
            src="/icons/folder.svg"
            alt="category"
            width={12}
            height={12}
          />
          <b className="font-normal text-[#60696F]">Categories:</b>{" "}
          {item.categories?.join(" , ")}
        </span>
        <span className="flex items-center gap-1">
          <Image
            src="/icons/data-definition.svg"
            alt="data type"
            width={12}
            height={12}
          />
          <b className="font-normal text-[#60696F]">Data Type:</b>{" "}
          {item.dataType?.join(" , ")}
        </span>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-b6 text-black-01">
        <span className="flex items-center gap-1">
          <Image
            src="/icons/publisher.svg"
            alt="publisher"
            width={12}
            height={12}
          />
          <b className="font-normal text-[#60696F]">Publisher:</b>{" "}
          {item.publisher}
        </span>
        <span className="flex items-center gap-1">
          <Image
            src="/icons/location.svg"
            alt="countries"
            width={12}
            height={12}
          />
          <b className="font-normal text-[#60696F]">Countries:</b>{" "}
          {item.countries}
        </span>
        <span className="flex items-center gap-1">
          <Image
            src="/icons/wikis.svg"
            alt="languages"
            width={12}
            height={12}
          />
          <b className="font-normal text-[#60696F]">Languages:</b>{" "}
          {item.languages?.join(" , ")}
        </span>
      </div>
    </div>
    <div className="border-t border-background-01 p-4 flex flex-col gap-3">
      <p className="text-b6 text-black-01">{item.description}</p>
      <Link
        href={item.url || ""}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-01 text-b7 font-bold underline flex items-center gap-1 hover:underline w-fit"
      >
        {item.url || ""}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </Link>
    </div>
  </div>
);

interface DataCatalogClientProps {
  datasets: Dataset[];
}

const DataCatalogClient = ({ datasets }: DataCatalogClientProps) => {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({
    category: [],
    country: [],
    format: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const mobileFilterRef = useRef<HTMLDivElement>(null);
  const ITEMS_PER_PAGE = 5;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileFilterRef.current &&
        !mobileFilterRef.current.contains(e.target as Node)
      ) {
        setIsMobileFilterOpen(false);
      }
    };
    if (isMobileFilterOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileFilterOpen]);

  const filterSections: FilterSection[] = useMemo(
    () => [
      {
        key: "category",
        title: "Category",
        options: getFilterOptions(datasets, (item) => item.categories || []),
      },
      {
        key: "country",
        title: "Country",
        options: getFilterOptions(datasets, (item) =>
          item.countries ? [item.countries] : [],
        ),
      },
      {
        key: "format",
        title: "Format",
        options: getFilterOptions(datasets, (item) => item.dataType || []),
      },
    ],
    [datasets],
  );

  const filteredDatasets = useMemo(() => {
    return datasets.filter((item) => {
      const categoryMatch =
        selectedFilters.category.length === 0 ||
        selectedFilters.category.some((c) => item.categories?.includes(c));
      const countryMatch =
        selectedFilters.country.length === 0 ||
        selectedFilters.country.includes(item.countries || "");
      const formatMatch =
        selectedFilters.format.length === 0 ||
        selectedFilters.format.some((f) => item.dataType?.includes(f));
      return categoryMatch && countryMatch && formatMatch;
    });
  }, [datasets, selectedFilters]);

  const totalPages = Math.ceil(filteredDatasets.length / ITEMS_PER_PAGE);

  const paginatedDatasets = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredDatasets.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredDatasets, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilters]);

  const handleToggleFilter = (sectionKey: string, value: string) => {
    setSelectedFilters((prev) => {
      const current = prev[sectionKey] || [];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [sectionKey]: next };
    });
  };

  const handleRemoveFilter = (sectionKey: string, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [sectionKey]: (prev[sectionKey] || []).filter((v) => v !== value),
    }));
  };

  const handleClearAll = () => {
    setSelectedFilters({ category: [], country: [], format: [] });
  };

  const allSelectedFilters = useMemo(
    () =>
      Object.entries(selectedFilters).flatMap(([key, values]) =>
        values.map((v) => ({ sectionKey: key, value: v })),
      ),
    [selectedFilters],
  );

  return (
    <div className="flex flex-1">
      <div className="hidden xl:block w-0 overflow-visible">
        <div className="sticky top-16 pl-8 pt-16 w-[240px]">
          <FilterSidebar
            sections={filterSections}
            selectedFilters={selectedFilters}
            onToggleFilter={handleToggleFilter}
            onRemoveFilter={handleRemoveFilter}
            onClearAll={handleClearAll}
          />
        </div>
      </div>

      <div className="flex flex-col mx-auto min-w-0">
        <div
          className="flex flex-col gap-4 max-w-[776px] mx-auto md:p-8 md:mt-16 p-4 mt-2"
          id="data-catalog"
        >
          <div className="flex gap-1">
            <h2 className="font-bold text-blue-01 text-h5">Data Catalog</h2>
            <p className="text-b2 text-orange-02">({datasets.length})</p>
          </div>
          <div className="block xl:hidden">
            <div ref={mobileFilterRef}>
              {!isMobileFilterOpen ? (
                <button
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="flex items-center justify-between w-full border-b border-black-01 px-2 pb-3 bg-white cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#000000"
                      strokeWidth="2"
                    >
                      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                    </svg>
                    <span className="font-bold text-h11 text-black-01">
                      Filter
                    </span>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              ) : (
                <div className=" bg-white">
                  <FilterSidebar
                    sections={filterSections}
                    selectedFilters={selectedFilters}
                    onToggleFilter={handleToggleFilter}
                    onRemoveFilter={handleRemoveFilter}
                    onClearAll={handleClearAll}
                    onClose={() => setIsMobileFilterOpen(false)}
                    hideSelectedChips
                    defaultCollapsed
                  />
                </div>
              )}
            </div>

            {allSelectedFilters.length > 0 && (
              <div className="mt-3">
                <div className="flex flex-wrap gap-2">
                  {allSelectedFilters.map((filter) => (
                    <span
                      key={`${filter.sectionKey}-${filter.value}`}
                      className="inline-flex items-center gap-1 bg-background-01 rounded-full px-3 py-1 text-b7 text-black-01"
                    >
                      {filter.value}
                      <button
                        onClick={() =>
                          handleRemoveFilter(filter.sectionKey, filter.value)
                        }
                        className="ml-0.5 hover:text-orange-01 cursor-pointer"
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="15" y1="9" x2="9" y2="15" />
                          <line x1="9" y1="9" x2="15" y2="15" />
                        </svg>
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex justify-end mt-1">
                  <button
                    onClick={handleClearAll}
                    className="text-b7 text-black-01 underline cursor-pointer hover:text-orange-01"
                  >
                    Clear All
                  </button>
                </div>
                <hr className="border-black-01 mt-2" />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-4">
            {paginatedDatasets.map((item) => (
              <CatalogCard key={item.title || ""} item={item} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-1 mt-6">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="p-2 text-black-01 disabled:opacity-30 cursor-pointer disabled:cursor-default"
                aria-label="Previous page"
              >
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-180"
                >
                  <path d="M0 0L5 4L0 8V0Z" fill="black" />
                </svg>
              </button>

              {(() => {
                const pages: (number | "ellipsis")[] = [];
                if (totalPages <= 6) {
                  for (let i = 1; i <= totalPages; i++) pages.push(i);
                } else {
                  pages.push(1);
                  if (currentPage <= 4) {
                    pages.push(2, 3, 4, 5, "ellipsis", totalPages);
                  } else if (currentPage >= totalPages - 3) {
                    pages.push(
                      "ellipsis",
                      totalPages - 4,
                      totalPages - 3,
                      totalPages - 2,
                      totalPages - 1,
                      totalPages,
                    );
                  } else {
                    pages.push(
                      "ellipsis",
                      currentPage - 1,
                      currentPage,
                      currentPage + 1,
                      "ellipsis",
                      totalPages,
                    );
                  }
                }
                return pages.map((page, idx) =>
                  page === "ellipsis" ? (
                    <span
                      key={`ellipsis-${idx}`}
                      className="w-8 h-8 flex items-center justify-center text-b7 font-medium text-[#60696F]"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 flex items-center justify-center text-b7 font-medium cursor-pointer ${
                        currentPage === page
                          ? "text-black-01 border-b-2 border-orange-01"
                          : "text-[#60696F] hover:text-black-01 hover:bg-orange-01"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                );
              })()}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
                disabled={currentPage === totalPages}
                className="p-2 text-black-01 disabled:opacity-30 cursor-pointer disabled:cursor-default"
                aria-label="Next page"
              >
                <svg
                  width="5"
                  height="8"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0L5 4L0 8V0Z" fill="black" />
                </svg>
              </button>
            </div>
          )}
        </div>
        <WhatNextSection />
      </div>
    </div>
  );
};

export default DataCatalogClient;
