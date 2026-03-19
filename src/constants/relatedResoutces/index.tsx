import { getDataRelatedResoure } from "@/src/lib/getDataRelatedResoure";
import DataCatalogClient from "./components/DataCatalogClient";

const RelatedResoutces = async () => {
  const relatedResources = await getDataRelatedResoure();
  return (
    <div className="flex flex-col w-full bg-white">
      <DataCatalogClient relatedResources={relatedResources} />
    </div>
  );
};

export default RelatedResoutces;
