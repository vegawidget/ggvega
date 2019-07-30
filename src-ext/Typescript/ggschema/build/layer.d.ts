export interface Layer {
    data: string;
    geom: Geom;
    mapping: Mapping;
    aes_params?: object[];
    stat?: Stat;
}
interface Geom {
    class: GeomType;
}
interface Mapping {
    x?: Encoding;
    y?: Encoding;
    colour?: Encoding;
}
export declare enum GeomType {
    GeomPoint = "GeomPoint"
}
interface Encoding {
    field: string;
}
interface Stat {
    class: string;
}
export {};
