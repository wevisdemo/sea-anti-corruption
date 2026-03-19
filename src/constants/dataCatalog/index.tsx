import { getDataset } from "@/src/lib/getDataset";
import DataCatalogClient from "./components/DataCatalogClient";

const DataCatalogPage = async () => {
  const dataset = await getDataset();
  return (
    <div className="flex flex-col w-full bg-white">
      <DataCatalogClient datasets={dataset} />
    </div>
  );
};

export default DataCatalogPage;
