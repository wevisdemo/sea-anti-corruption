import Image from "next/image";
import { getDataResoure } from "@/src/lib/getDataResoure";

const ResoureSection = async () => {
  const resources = await getDataResoure();

  return (
    <div
      className="flex flex-col gap-4 max-w-[776px] mx-auto md:p-8 md:mt-16 p-4 mt-2"
      id="network-resources-&-update"
    >
      <div className="flex gap-1">
        <h2 className="font-bold text-blue-01 text-h5">Related Resources</h2>
        <p className="text-b2 text-orange-02">({resources.length})</p>
      </div>

      <div className="flex gap-2 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-4 w-[95vw] -mr-4 max-w-[776px] md:w-full md:-mr-0">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="flex w-[232px] shrink-0 flex-col overflow-hidden rounded-xl border border-background-01 bg-white snap-start"
          >
            {resource.imageUrl && (
              <div className="relative h-[154.6666717529297px] w-full">
                <Image
                  src={resource.imageUrl}
                  alt={resource.title || ""}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="flex flex-1 flex-col gap-2 p-4 bg-[#D9D9D9]">
              <h3 className="text-b5 font-bold text-black-01">
                {resource.title}
              </h3>

              {resource.publicationDate && (
                <p className="text-b7 text-sub-text">
                  {resource.publicationDate}
                </p>
              )}

              <div className="w-full h-[0.5px] bg-black"></div>
              <div className="flex flex-col gap-1.5 text-b7 text-sub-text">
                {resource.categories && (
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
                      <p className="text-b7 text-black">
                        {resource.categories}
                      </p>
                    </span>
                  </div>
                )}
                {resource.countries && (
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
                      <p className="text-b7 text-black">{resource.countries}</p>
                    </span>
                  </div>
                )}
                {resource.languages && (
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
                      <p className="text-b7 text-black">{resource.languages}</p>
                    </span>
                  </div>
                )}
              </div>

              {resource.linkUrl && (
                <a
                  href={resource.linkUrl}
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
        ))}
      </div>

      <p className="text-b5 font-bold text-orange-01 text-end underline cursor-pointer">
        See All
      </p>
    </div>
  );
};

export default ResoureSection;
