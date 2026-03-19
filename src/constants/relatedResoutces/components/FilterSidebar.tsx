"use client";

import { useState } from "react";

interface FilterOption {
  label: string;
  count: number;
}

export interface FilterSection {
  key: string;
  title: string;
  options: FilterOption[];
}

interface FilterSidebarProps {
  sections: FilterSection[];
  selectedFilters: Record<string, string[]>;
  onToggleFilter: (sectionKey: string, value: string) => void;
  onRemoveFilter: (sectionKey: string, value: string) => void;
  onClearAll: () => void;
  onClose?: () => void;
  hideSelectedChips?: boolean;
  defaultCollapsed?: boolean;
}

const FilterSidebar = ({
  sections,
  selectedFilters,
  onToggleFilter,
  onRemoveFilter,
  onClearAll,
  onClose,
  hideSelectedChips = false,
  defaultCollapsed = false,
}: FilterSidebarProps) => {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >(() => {
    const initial: Record<string, boolean> = {};
    sections.forEach((s) => {
      initial[s.key] = !defaultCollapsed;
    });
    return initial;
  });

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const allSelectedFilters = Object.entries(selectedFilters).flatMap(
    ([key, values]) => values.map((v) => ({ sectionKey: key, value: v })),
  );

  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center gap-2 pb-2 px-2">
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
        <span className="font-bold text-h11 text-black-01">Filter</span>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-auto cursor-pointer hover:text-orange-01"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        )}
      </div>

      <hr className="border-black-01" />

      {sections.map((section) => (
        <div key={section.key}>
          <button
            onClick={() => toggleSection(section.key)}
            className="flex items-center justify-between w-full py-2 cursor-pointer"
          >
            <span className="font-bold text-h11 text-black-01">
              {section.title}
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              className={`transition-transform ${
                expandedSections[section.key] ? "rotate-180" : ""
              }`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {expandedSections[section.key] && (
            <div className="flex flex-col gap-2 pb-2 pl-1">
              {section.options.map((option) => {
                const isChecked =
                  selectedFilters[section.key]?.includes(option.label) ?? false;
                return (
                  <label
                    key={option.label}
                    className="flex items-center gap-2 cursor-pointer text-b6 text-black-01"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => onToggleFilter(section.key, option.label)}
                      className="appearance-none w-[11px] h-[11px] min-w-[11px] border border-black-01 rounded-[4px] bg-white checked:bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%220%200%2016%2016%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M13%204.5L6%2011.5L3%208.5%22%20stroke%3D%22black%22%20stroke-width%3D%222.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] checked:bg-center checked:bg-no-repeat cursor-pointer"
                    />
                    <span>
                      {option.label}{" "}
                      <span className="text-orange-01">({option.count})</span>
                    </span>
                  </label>
                );
              })}
            </div>
          )}

          <hr className="border-black-01" />
        </div>
      ))}

      {!hideSelectedChips && allSelectedFilters.length > 0 && (
        <div className="flex flex-col gap-2 pt-2">
          <div className="flex flex-wrap gap-2">
            {allSelectedFilters.map((filter) => (
              <span
                key={`${filter.sectionKey}-${filter.value}`}
                className="inline-flex items-center gap-1 bg-background-01 rounded-full px-3 py-1 text-b7 text-black-01"
              >
                {filter.value}
                <button
                  onClick={() =>
                    onRemoveFilter(filter.sectionKey, filter.value)
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
          <button
            onClick={onClearAll}
            className="text-b7 text-black-01 underline self-end cursor-pointer hover:text-orange-01"
          >
            Clear All
          </button>
          <hr className="border-black-01" />
        </div>
      )}
    </div>
  );
};

export default FilterSidebar;
