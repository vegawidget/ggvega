/**
 * The datasets should have at least one dataset
 * @minProperties 1
 */
export interface DatasetsObject {
  [key: string]: Dataset;
}

export interface Dataset {
  metadata: Metadata;
  observations: InlineDataset;
}

export interface Metadata {
  [key: string]: Metadatum;
}
export interface Metadatum {
  type: StandardType;
  levels?: string[];
}

export enum StandardType {
  Nominal = 'nominal',
  Ordinal = 'ordinal',
  Quantitative = 'quantitative',
  Temporal = 'temporal'
}

export type InlineDataset = InlineDatasetElement[] | {[key: string]: any} | string;

export type InlineDatasetElement = boolean | number | {[key: string]: any} | string;
