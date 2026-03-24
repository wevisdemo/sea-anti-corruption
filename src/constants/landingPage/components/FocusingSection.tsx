import Image from "next/image";
import Link from "next/link";

const FocusingSection = () => {
  return (
    <div
      className="flex flex-col gap-4 max-w-[776px] md:p-8 md:mt-16 p-4 mt-2"
      id="focusing-dataset"
    >
      <h2 className="font-bold text-blue-01 text-h5">Focusing Dataset</h2>
      <p className="text-b5 text-black-01">
        There are many useful datasets for anti-corruption investigation, but we
        need to start with something. We're focusing on Political Exposed
        Persons, or PEPs, because people who are exposed to politics are people
        who should be under the radar. PEPs dataset would allow us to understand
        the relationship between these people and their positions, could be used
        to match names in other resources, tracing conflicts of interest, and
        more.
      </p>

      <div className="flex flex-col gap-2 md:flex-row">
        <Link
          href="/peps-guide"
          className="w-full flex flex-col gap-2.5 rounded-2xl p-6 bg-background-01 hover:bg-orange-04 cursor-pointer items-center justify-center"
        >
          <Image src="/icons/book.svg" alt="pep" width={120} height={120} />
          <p className="text-b5 font-bold text-black-01 text-center">
            Learn how to define PEPs and start collecting data
          </p>
          <p className="text-b5 font-bold text-orange-01 underline">
            Explore Guideline
          </p>
        </Link>
        <Link
          href="/data-catalog"
          className="w-full flex flex-col gap-2.5 rounded-2xl p-6 bg-background-01 hover:bg-orange-04 cursor-pointer items-center justify-center"
        >
          <Image src="/icons/stack.svg" alt="pep" width={120} height={120} />
          <p className="text-b5 font-bold text-black-01 text-center">
            See open PEPs dataset you can use
          </p>
          <p className="text-b5 font-bold text-orange-01 underline">
            Explore Dataset Catalog
          </p>
        </Link>
      </div>
    </div>
  );
};

export default FocusingSection;
