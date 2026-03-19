"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { RelatedResourcesFilter } from "@/src/services/type";
import FilterSidebar, { FilterSection } from "./FilterSidebar";
import Image from "next/image";
import Link from "next/link";
import WhatNextSection from "./WhatNextSection";

function getFilterOptions(
  relatedResources: RelatedResourcesFilter[],
  extractor: (item: RelatedResourcesFilter) => string[],
): { label: string; count: number }[] {
  const counts: Record<string, number> = {};
  relatedResources.forEach((item) => {
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

interface DataCatalogClientProps {
  relatedResources: RelatedResourcesFilter[];
}

const CatalogCard = ({ item }: { item: RelatedResourcesFilter }) => {
  const categories = item.categories?.join(" , ");
  const countries = item.countries?.join(" , ");
  const languages = item.languages?.join(" , ");
  return (
    <div
      key={item.title || ""}
      className="flex w-[232px] shrink-0 flex-col overflow-hidden rounded-xl border border-background-01 bg-white snap-start"
    >
      <div className="relative h-[154.6666717529297px] w-full">
        <Image
          src={item.imageUrl || "/img/img-placeholder.svg"}
          alt={item.title || ""}
          fill
          className="object-cover"
          onError={(e) => {
            e.currentTarget.src = "/img/img-placeholder.svg";
          }}
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4 bg-[#D9D9D9]">
        <h3 className="text-b5 font-bold text-black-01 line-clamp-3">
          {item.title}
        </h3>

        {item.publicationDate && (
          <p className="text-b7 text-sub-text">{item.publicationDate}</p>
        )}

        <div className="w-full h-[0.5px] bg-black"></div>
        <div className="flex flex-col gap-1.5 text-b7 text-sub-text">
          {item.categories && (
            <div className="flex items-start gap-1.5">
              <svg
                className="mt-0.5 size-3.5 shrink-0"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 3.5A1.5 1.5 0 013.5 2h2.879a1.5 1.5 0 011.06.44l.622.621a1.5 1.5 0 001.06.439H12.5A1.5 1.5 0 0114 5v6.5a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 11.5v-8z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              <span className="flex gap-1">
                Categories:
                <span className="text-b7 text-black">{categories}</span>
              </span>
            </div>
          )}
          {item.countries && (
            <div className="flex items-start gap-1.5">
              <svg
                className="mt-0.5 size-3.5 shrink-0"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1.5a4.5 4.5 0 014.5 4.5c0 3.375-4.5 8.5-4.5 8.5S3.5 9.375 3.5 6A4.5 4.5 0 018 1.5z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <circle
                  cx="8"
                  cy="6"
                  r="1.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              <span className="flex gap-1">
                Countries:
                <span className="text-b7 text-black">{countries}</span>
              </span>
            </div>
          )}
          {item.languages && (
            <div className="flex items-start gap-1.5">
              <svg
                className="mt-0.5 size-3.5 shrink-0"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="6.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <ellipse
                  cx="8"
                  cy="8"
                  rx="3"
                  ry="6.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <path
                  d="M1.5 8h13M2.5 4.5h11M2.5 11.5h11"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              <span className="flex gap-1">
                Languages:
                <span className="text-b7 text-black">{languages}</span>
              </span>
            </div>
          )}
        </div>

        {item.linkUrl && (
          <a
            href={item.linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto flex items-center justify-end gap-1 pt-2 text-b7 underline font-bold text-orange-01"
          >
            View the full project
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 13H1C0.734893 12.9996 0.480747 12.8942 0.293288 12.7067C0.105829 12.5193 0.000357171 12.2651 0 12V2C0.000357171 1.73489 0.105829 1.48075 0.293288 1.29329C0.480747 1.10583 0.734893 1.00036 1 1H6V2H1V12H11V7H12V12C11.9996 12.2651 11.8942 12.5193 11.7067 12.7067C11.5193 12.8942 11.2651 12.9996 11 13Z"
                fill="#FF4700"
              />
              <path
                d="M8 0V1H11.293L7 5.293L7.707 6L12 1.707V5H13V0H8Z"
                fill="#FF4700"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

const DataCatalogClient = ({ relatedResources }: DataCatalogClientProps) => {
  const [selectedFilters, setSelectedFilters] = useState<
    Record<string, string[]>
  >({
    category: [],
    country: [],
    languages: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const mobileFilterRef = useRef<HTMLDivElement>(null);
  const ITEMS_PER_PAGE = 9;

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
        options: getFilterOptions(
          relatedResources,
          (item) => item.categories || [],
        ),
      },
      {
        key: "country",
        title: "Country",
        options: getFilterOptions(
          relatedResources,
          (item) => item.countries || [],
        ),
      },
      {
        key: "languages",
        title: "Language",
        options: getFilterOptions(
          relatedResources,
          (item) => item.languages || [],
        ),
      },
    ],
    [relatedResources],
  );

  const filteredRelatedResources = useMemo(() => {
    return relatedResources.filter((item) => {
      const categoryMatch =
        selectedFilters.category.length === 0 ||
        selectedFilters.category.some((c) => item.categories?.includes(c));
      const countryMatch =
        selectedFilters.country.length === 0 ||
        selectedFilters.country.some((c) => item.countries?.includes(c));
      const languageMatch =
        selectedFilters.languages.length === 0 ||
        selectedFilters.languages.some((l) => item.languages?.includes(l));
      return categoryMatch && countryMatch && languageMatch;
    });
  }, [relatedResources, selectedFilters]);

  const totalPages = Math.ceil(
    filteredRelatedResources.length / ITEMS_PER_PAGE,
  );

  const paginatedRelatedResources = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredRelatedResources.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredRelatedResources, currentPage]);

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
    setSelectedFilters({ category: [], country: [], languages: [] });
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
            <h2 className="font-bold text-blue-01 text-h5">
              Related Resources
            </h2>
            <p className="text-b2 text-orange-02">
              ({relatedResources.length})
            </p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-4">
            {paginatedRelatedResources.map((item) => (
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
