import { Spreadsheet, Column, Object, asString } from "sheethuahua";
import { Dataset } from "../services/type";

const schemaMap = Object({
  publisher: Column("Publisher", asString().optional()),
  title: Column("Name", asString().optional()),
  description: Column("Description", asString().optional()),
  categories: Column("Categories", asString().optional()),
  languages: Column("Languages", asString().optional()),
  dataType: Column("Formats", asString().optional()),
  url: Column("URL", asString().optional()),
  countries: Column("Countries", asString().optional()),
});

export async function getDataset(): Promise<Dataset[]> {
  const dataset = await Spreadsheet(
    "1g3dyZUDldmPnIgGik5k2SlfIcGJuOtP4i2PlDEvKSeA",
  ).get("Datasets", schemaMap);

  return dataset.map((item) => ({
    title: item.title,
    categories: item.categories?.split(",").map((s) => s.trim()),
    dataType: item.dataType?.split(",").map((s) => s.trim()),
    publisher: item.publisher,
    countries: item.countries,
    languages: item.languages?.split(",").map((s) => s.trim()),
    description: item.description,
    url: item.url,
  }));
}
