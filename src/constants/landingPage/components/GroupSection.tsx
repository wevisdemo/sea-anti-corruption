"use client";

import Image from "next/image";
import { useState } from "react";

const GroupSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("kraccorruption@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div
      className="flex flex-col gap-4 max-w-[776px] md:p-8 md:mt-16 p-4 mt-2"
      id="sea-acn-open-data-focus-group"
    >
      <h2 className="font-bold text-blue-01 text-h5">
        SEA-CAN’s Open Data Focus Group
      </h2>

      <div className="flex flex-col gap-2 md:flex-row">
        <div className="w-full flex flex-col gap-2">
          <p className="text-b5 text-black-01">
            In 2024, civil society organizations across Southeast Asia working
            on anti-corruption came together at the ASEAN CSO Integrity Workshop
            in Kuala Lumpur under the broader regional framework of ASEAN.
            Through this engagement, participating organizations formed a
            regional coalition that later evolved into the{" "}
            <a
              href="https://kraccorruption.com/sea-acn-for-csos/"
              target="_blank"
              className="text-orange-01 font-bold underline hover:text-white hover:bg-orange-01"
            >
              Southeast Asia Anti-Corruption Network for CSOs (SEA-CAN).
            </a>
            <br />
            <br />
            The network focuses on four key thematic areas: Open Data, Business
            Integrity, Whistleblower Protection, and Public Procurement. The
            project is facilitated by the Knowledge Hub for Regional
            Anti-Corruption and Good Governance Collaboration (KRAC), which
            serves as the regional coordination and knowledge platform.
            <br />
            <br />
            One of the network’s core areas—Open Data—builds on the earlier
            study titled “Building the Capacity of Southeast Asian Civil Society
            on Anti-Corruption through the Use of Data.” Currently, the Open
            Data Working Group is expanding its work on Politically Exposed
            Persons (PEPs) under the project “South-East Asia CSO Network
            (SEA-CAN) Open Data Standards for Anti-Corruption.” This initiative
            is being implemented through collaboration among four organizing
            partners:
          </p>
          <br />
          <ul className="list-disc list-inside text-b5 text-black-01 ml-4 marker:text-orange-01">
            <li>
              <a
                href="https://hand.co.th/"
                target="_blank"
                className="text-orange-01 font-bold underline hover:text-white hover:bg-orange-01"
              >
                Hand Social Enterprise
              </a>{" "}
              (Thailand)
            </li>
            <li>
              <a
                href="https://sinarproject.org/"
                target="_blank"
                className="text-orange-01 font-bold underline hover:text-white hover:bg-orange-01"
              >
                Sinar Project
              </a>{" "}
              (Malaysia)
            </li>
            <li>
              <a
                href="https://wevis.info/"
                target="_blank"
                className="text-orange-01 font-bold underline hover:text-white hover:bg-orange-01"
              >
                WeVis
              </a>{" "}
              (Thailand)
            </li>
            <li>
              <a
                href="https://ti.or.id/"
                target="_blank"
                className="text-orange-01 font-bold underline hover:text-white hover:bg-orange-01"
              >
                TI
              </a>{" "}
              (Indonesia)
            </li>
          </ul>
          <div className="flex flex-col gap-2">
            <p className="text-b5 text-black-01">
              Have any questions or want to join the network? Contact us
            </p>
            <p
              className="text-b5 text-orange-01 font-bold underline cursor-pointer"
              onClick={handleCopyEmail}
            >
              kraccorruption@gmail.com
            </p>
          </div>
        </div>
        <div className="grid  gap-2 grid-cols-2 w-full h-fit">
          <div className="flex flex-col gap-1 p-2 items-center">
            <Image src="/icons/hands.svg" alt="pep" width={166} height={88} />
            <p className="text-b7 font-bold text-sub-text text-center">
              Hand Social Enterprise
              <br />
              (Thailand)
            </p>
          </div>
          <div className="flex flex-col gap-1 p-2 items-center">
            <Image src="/icons/sinar.svg" alt="pep" width={166} height={88} />
            <p className="text-b7 font-bold text-sub-text text-center">
              Sinar Project
              <br />
              (Malaysia)
            </p>
          </div>
          <div className="flex flex-col gap-1 p-2 items-center">
            <Image src="/icons/wv.svg" alt="pep" width={166} height={88} />
            <p className="text-b7 font-bold text-sub-text text-center">
              WeVis
              <br />
              (Thailand)
            </p>
          </div>
          <div className="flex flex-col gap-1 p-2 items-center">
            <Image src="/icons/tl.svg" alt="pep" width={166} height={88} />
            <p className="text-b7 font-bold text-sub-text text-center">
              TI
              <br />
              (Thailand)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupSection;
