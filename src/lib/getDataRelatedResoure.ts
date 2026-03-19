import { Spreadsheet, Column, Object, asString } from "sheethuahua";
import { RelatedResourcesFilter } from "../services/type";

const schemaMap = Object({
  publicationDate: Column("Publication Date", asString().optional()),
  title: Column("Title", asString().optional()),
  description: Column("Description", asString().optional()),
  countries: Column("Countries", asString().optional()),
  languages: Column("Languages", asString().optional()),
  categories: Column("Categories", asString().optional()),
  imageUrl: Column("ImageURL", asString().optional()),
  linkUrl: Column("LinkURL", asString().optional()),
});

export async function getDataRelatedResoure(): Promise<
  RelatedResourcesFilter[]
> {
  const dataResoure = await Spreadsheet(
    "1g3dyZUDldmPnIgGik5k2SlfIcGJuOtP4i2PlDEvKSeA",
  ).get("Related Resources", schemaMap);

  return dataResoure.map((item) => ({
    title: item.title,
    categories: item.categories?.split(",").map((s) => s.trim()),
    languages: item.languages?.split(",").map((s) => s.trim()),
    publicationDate: item.publicationDate,
    countries: item.countries?.split(",").map((s) => s.trim()),
    description: item.description,
    imageUrl: item.imageUrl,
    linkUrl: item.linkUrl,
  }));
}
