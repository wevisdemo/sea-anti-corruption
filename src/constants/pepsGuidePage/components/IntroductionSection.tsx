import Image from "next/image";

type CardContent =
  | {
      icon: React.ReactNode;
      text: string;
      title?: undefined;
      bullets?: undefined;
    }
  | {
      icon: React.ReactNode;
      title: string;
      bullets: string[];
      text?: undefined;
    };

const contents: CardContent[] = [
  {
    icon: <Image src="/icons/chart.svg" alt="how-2" width={120} height={120} />,
    title: "Business",
    bullets: [
      "Reliable and extensive local PEPs data is helpful for risk assessment and analysis for investments and partnerships.",
    ],
  },
  {
    icon: <Image src="/icons/group.svg" alt="how-2" width={120} height={120} />,
    title: "Civil Society",
    bullets: [
      "Civil society organizations working on anti-corruption are better equipped to discover issues where corruption happens by rapidly identifying persons in power that ultimately gain from problematic uses of public funds.",
      "Reliable PEPs data based on regulatory definitions, helps protect them from legal threats when raising questions about involvements of persons holding positions of power or related to them.",
    ],
  },
  {
    icon: <Image src="/icons/media.svg" alt="how-2" width={120} height={120} />,
    title: "Media",
    bullets: [
      "Similar to civil society, able to rapidly discover involvement of key persons in power in reliable manners in stories, as well as connect them.",
      "PEPs definitions can also be used as an additional tool for mapping potential human sources for an investigative story.",
    ],
  },
  {
    icon: <Image src="/icons/bank.svg" alt="how-2" width={120} height={120} />,
    title: "Financial Institutions",
    bullets: [
      "Improved information for risk assessments and detection for money laundering activities.",
      "Better information helps reduce risks for investments and can lead to more competitive lending rates and higher profits.",
    ],
  },
];

const IntroductionSection = () => {
  return (
    <div
      className="flex flex-col gap-2.5 max-w-[776px] mx-auto md:p-8 md:mt-8 p-4 mt-2"
      id="introduction"
    >
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-blue-01 text-h5">Introduction</h2>
        <p className="text-b5 text-black-01">
          Political Exposed Persons (PEPs), is an individual who is or has been
          entrusted with a prominent function. Many PEPs hold positions that can
          be abused for the purpose of laundering illicit funds or other
          predicate offenses such as corruption or bribery.
        </p>
        <p className="text-b5 text-black-01">
          Making PEPs dataset available and opened would be a valuable resource
          for many use cases:
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
        {contents.map((content, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2.5 rounded-xl bg-blue-03 px-6 py-8 text-white"
          >
            <div>{content.icon}</div>
            {content.text ? (
              <p className="text-b5 font-bold text-center">{content.text}</p>
            ) : (
              <div className="flex flex-col gap-2 text-left">
                <h3 className="text-b5 font-bold">{content.title}</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {content.bullets?.map((bullet, i) => (
                    <li key={i} className="text-b5">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="text-b5 text-black-01">
        However, there are limited open data sets for political exposed persons
        in Southeast Asia. A more comprehensive set of open data for PEPs that
        is reusable across the region will be useful for multiple actors and for
        cross-border collaborations. Locally sourced data compliant to national
        laws and regulatory definitions will also ensure some level of
        protection from legal persecution when reporting on anti-corruption
        issues.
      </p>
      <p className="text-b5 text-black-01">
        This guide provides a practical framework in 2 main steps: 1) Defining
        who is PEPs by mapping PEPs definition in your context following FATF
        guideline, and 2) Structuring dataset following Popolo guideline, to
        align with the partnerships data standard. These 2 steps will enable
        knowledge sharing and empower the cross-border investigation between
        network partners and anyone who follows this guideline.
      </p>
    </div>
  );
};

export default IntroductionSection;
