import { Spreadsheet, Column, Object, asString } from "sheethuahua";
import { RelatedResources } from "../services/type";

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

export async function getDataResoure(): Promise<RelatedResources[]> {
  const dataResoure = await Spreadsheet(
    "1g3dyZUDldmPnIgGik5k2SlfIcGJuOtP4i2PlDEvKSeA",
  ).get("Related Resources", schemaMap);
  return dataResoure;
}
