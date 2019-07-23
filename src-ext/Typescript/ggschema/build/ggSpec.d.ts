import { Dataset } from './data';
import { Layer } from './layer';
import { Labels } from './labels';
export interface TopLevelSpec {
    data: {
        [key: string]: Dataset;
    };
    layers: Layer[];
    scales: object[];
    labels: Labels;
}
