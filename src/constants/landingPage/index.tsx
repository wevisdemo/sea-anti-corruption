import Image from "next/image";
import HowSection from "./components/HowSection";
import FocusingSection from "./components/FocusingSection";
import GroupSection from "./components/GroupSection";
import ResoureSection from "./components/ResoureSection";

const sidebarLinks = [
  "How?",
  "Focusing Dataset",
  "SEA-ACN Open Data Focus Group",
  "Network Resources & Update",
];

const LandingPage = () => {
  return (
    <div className="flex flex-col w-full bg-white ">
      <div className="relative w-full md:h-[388px] h-[308px]">
        <Image
          src="/img/bg.svg"
          alt="background"
          fill
          className="object-cover"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
          <h1 className="text-h5 font-bold text-white">
            Embrace opennes <br /> and collaboration <br /> to fight against
            Corruption
          </h1>
          <p className="mt-8 max-w-2xl text-h9 font-bold text-orange-02 ">
            Learn and join the open data <br />
            for anti-corruption movement with SEA-ACN
          </p>
        </div>
      </div>

      <div className="flex flex-1">
        <div className="hidden lg:block w-0 overflow-visible">
          <nav className="sticky top-16 flex flex-col gap-1 pl-8 pt-16">
            {sidebarLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="whitespace-nowrap text-black-01 text-b5 font-bold w-fit hover:bg-blue-04 py-1 px-2 "
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col mx-auto min-w-0">
          <HowSection />
          <FocusingSection />
          <GroupSection />
          <ResoureSection />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
