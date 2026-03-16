"use client";

import { useState } from "react";

type CollapseSectionProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

const CollapseSection = ({
  title,
  children,
  defaultOpen = false,
}: CollapseSectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between cursor-pointer py-2"
      >
        <h3 className="text-h9 font-bold text-black-01">{title}</h3>
        <svg
          className={`h-5 w-5 shrink-0 text-black-01 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
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
      <div className="h-0.5 bg-black" />
      {isOpen && (
        <div className="pt-4 pb-2 text-b5 text-black-01">{children}</div>
      )}
    </div>
  );
};

export default CollapseSection;
