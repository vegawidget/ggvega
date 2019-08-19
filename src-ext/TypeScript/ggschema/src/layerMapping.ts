export interface MappingObject {
  x?: Mapping;
  y?: Mapping;
  colour?: Mapping;
  size?: Mapping;
  shape?: Mapping;
  stroke?: Mapping;
  alpha?: Mapping;
  fill?: Mapping;
  group?: Mapping;
}

export interface Mapping {
  field: string;
}

export interface AesParamsObject {
  size?: number;
  shape?: number;
  colour?: string;
  stroke?: number;
  alpha?: number;
  fill?: string;
}
