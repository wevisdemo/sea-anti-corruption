export interface RelatedResources {
  publicationDate?: string;
  title?: string;
  description?: string;
  countries?: string;
  languages?: string;
  categories?: string;
  imageUrl?: string;
  linkUrl?: string;
}

export interface Dataset {
  title?: string;
  categories?: string[];
  dataType?: string[];
  publisher?: string;
  countries?: string;
  languages?: string[];
  description?: string;
  url?: string;
}
