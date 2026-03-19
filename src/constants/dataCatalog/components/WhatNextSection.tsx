import Image from "next/image";

const WhatNextSection = () => {
  return (
    <div
      className="flex flex-col gap-4 max-w-[776px] md:p-8 md:mt-16 p-4 mt-2"
      id="what's-next?"
    >
      <h2 className="font-bold text-blue-01 text-h5">
        Encourage dataset owner to take actions
      </h2>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
        <div className=" flex flex-col gap-2.5 rounded-2xl p-6 bg-background-01 hover:bg-orange-04 cursor-pointer items-center justify-center">
          <Image src="/icons/book.svg" alt="pep" width={120} height={120} />
          <p className="text-b5 font-bold text-black-01 text-center">
            What to know more about our research?
          </p>
          <p className="text-b5 font-bold text-orange-01 underline text-center">
            View the full report
          </p>
        </div>
        <div className=" flex flex-col gap-2.5 rounded-2xl p-6 bg-background-01 hover:bg-orange-04 cursor-pointer items-center justify-center">
          <Image src="/icons/stack.svg" alt="pep" width={120} height={120} />
          <p className="text-b5 font-bold text-black-01 text-center">
            What to see the dataset you can use?
          </p>
          <p className="text-b5 font-bold text-orange-01 underline text-center">
            Explore Dataset Catalog
          </p>
        </div>
        <div className=" flex flex-col gap-2.5 rounded-2xl p-6 bg-background-01 hover:bg-orange-04 cursor-pointer items-center justify-center">
          {/* <Image src="/icons/stack.svg" alt="pep" width={120} height={120} /> */}
          <p className="text-b5 font-bold text-black-01 text-center">
            Have any questions or suggestions , need help with PEPs, or learn
            what to contribute to your country’s study result Contact us
          </p>
          <p className="text-b5 font-bold text-orange-01 underline text-center">
            kraccorruption@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatNextSection;
