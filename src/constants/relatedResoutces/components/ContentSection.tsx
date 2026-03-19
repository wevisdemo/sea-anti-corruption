import { getDataset } from "@/src/lib/getDataset";
import { Dataset } from "@/src/services/type";
import Image from "next/image";
import Link from "next/link";

const CatalogCard = ({ item }: { item: Dataset }) => (
  <div className="rounded-lg border border-background-01 overflow-hidden">
    <div className="flex flex-col gap-2 bg-background-01 px-6 pt-4 pb-2">
      <h3 className="font-bold text-black-01 text-b5">{item.title}</h3>
      <div className="flex flex-wrap gap-x-6 gap-y-1 text-b7 text-black-01">
        <span className="flex items-center gap-1">
          <Image
            src="/icons/folder.svg"
            alt="category"
            width={12}
            height={12}
          />
          <b className="font-normal text-[#60696F]">Categories:</b>{" "}
          {item.categories?.join(" , ")}
        </span>
        <span className="flex items-center gap-1">
          <Image
            src="/icons/data-definition.svg"
            alt="category"
            width={12}
            height={12}
          />
          <b className="font-normal text-[#60696F]">Data Type:</b>{" "}
          {item.dataType?.join(" , ")}
        </span>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-1 text-b7 text-black-01">
        <span className="flex items-center gap-1">
          <Image
            src="/icons/publisher.svg"
            alt="category"
            width={12}
            height={12}
          />
          <b className="font-normal text-[#60696F]">Publisher:</b>{" "}
          {item.publisher}
        </span>
        <span className="flex items-center gap-1">
          <Image
            src="/icons/location.svg"
            alt="category"
            width={12}
            height={12}
          />
          <b className="font-normal text-[#60696F]">Countries:</b>{" "}
          {item.countries}
        </span>
        <span className="flex items-center gap-1">
          <Image src="/icons/wikis.svg" alt="category" width={12} height={12} />
          <b className="font-normal text-[#60696F]">Languages:</b>{" "}
          {item.languages?.join(" , ")}
        </span>
      </div>
    </div>
    <div className="border-t border-background-01 p-4 flex flex-col gap-3">
      <p className="text-b7 text-black-01">{item.description}</p>
      <Link
        href={item.url || ""}
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-01 text-b7 font-bold underline flex items-center gap-1 hover:underline w-fit"
      >
        {item.url || ""}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000"
          strokeWidth="2"
        >
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </Link>
    </div>
  </div>
);

const ContentSection = async () => {
  const dataset = await getDataset();
  return (
    <div
      className="flex flex-col gap-4 max-w-[776px] mx-auto md:p-8 md:mt-16 p-4 mt-2"
      id="data-catalog"
    >
      <h2 className="font-bold text-blue-01 text-h5">Data Catalog</h2>

      <div className="flex flex-col gap-4">
        {dataset.map((item) => (
          <CatalogCard key={item.title || ""} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ContentSection;
