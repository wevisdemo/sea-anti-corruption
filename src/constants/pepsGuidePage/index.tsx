import IntroductionSection from "./components/IntroductionSection";
import DefineSection from "./components/DefineSection";
import DataSection from "./components/DataSection";
import WhatNextSection from "./components/WhatNextSection";

type SidebarItem = {
  label: string;
  children?: string[];
};

const sidebarLinks: SidebarItem[] = [
  { label: "Introduction" },
  {
    label: "Defining: Who is PEPs?",
    children: [
      "Foreign PEPs",
      "Domestic PEPs",
      "International organization PEPs",
      "Family members",
      "Close associates",
    ],
  },
  {
    label: "Data Standard: Put PEPs Into a Structure",
    children: ["Person", "Organization", "Post", "Membership"],
  },
  { label: "What's next?" },
];

const toAnchor = (text: string) =>
  `#${text.toLowerCase().replace(/\s+/g, "-")}`;

const PepsGuidePage = () => {
  return (
    <div className="flex flex-col w-full bg-white ">
      <div className="flex flex-1">
        <div className="hidden xl:block w-0 overflow-visible">
          <nav className="sticky top-16 flex flex-col gap-1 pl-8 pt-16">
            {sidebarLinks.map((item) => (
              <div key={item.label} className="flex flex-col">
                <a
                  href={toAnchor(item.label)}
                  className=" text-black-01 text-b5 font-bold w-2xs hover:bg-blue-04 py-1 px-2"
                >
                  {item.label}
                </a>
                {item.children?.map((child) => (
                  <a
                    key={child}
                    href={toAnchor(child)}
                    className="whitespace-nowrap text-sub-text text-b6 w-fit hover:bg-blue-04 py-1 px-2 pl-6"
                  >
                    {child}
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex flex-col mx-auto min-w-0">
          <IntroductionSection />
          <DefineSection />
          <DataSection />
          <WhatNextSection />
        </div>
      </div>
    </div>
  );
};

export default PepsGuidePage;
