export interface Dataset {
  metadata?: {[key: string]: Metadata};
  observations: InlineDataset;
}

interface Metadata {
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
