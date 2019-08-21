/**
 * The datasets should have at least one dataset
 * @minProperties 1
 */
export interface DatasetObject {
  [key: string]: Dataset;
}

export interface Dataset {
  metadata: MetadataObject;
  observations: InlineDataset;
}

export interface MetadataObject {
  [key: string]: Metadata;
}
export interface Metadata {
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
