/**
 * The datasets should have at least one dataset
 * @minProperties 1
 */
export interface Datasets {
  [key: string]: Dataset;
}

export interface Dataset {
  metadata: {[key: string]: Metadata};
  observations: InlineDataset;
}

interface Metadata {
  type: VariableType;
  levels?: string[];
}

export enum VariableType {
  Nominal = 'nominal',
  Ordinal = 'ordinal',
  Quantitative = 'quantitative',
  Temporal = 'temporal'
}

export type InlineDataset = InlineDatasetElement[] | {[key: string]: any} | string;

export type InlineDatasetElement = boolean | number | {[key: string]: any} | string;
