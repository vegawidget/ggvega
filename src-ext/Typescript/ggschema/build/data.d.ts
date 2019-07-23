export interface Dataset {
    metadata: {
        [key: string]: Metadata;
    };
    observations: InlineDataset;
}
interface Metadata {
    type: StandardType;
    levels?: string[];
}
export declare enum StandardType {
    Nominal = "nominal",
    Ordinal = "ordinal",
    Quantitative = "quantitative",
    Temporal = "temporal"
}
export declare type InlineDataset = InlineDatasetElement[] | {
    [key: string]: any;
} | string;
export declare type InlineDatasetElement = boolean | number | {
    [key: string]: any;
} | string;
export {};
