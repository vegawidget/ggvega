export interface Mapping {
  x?: Encoding;
  y?: Encoding;
  colour?: Encoding;
  size?: Encoding;
  shape?: Encoding;
  stroke?: Encoding;
  alpha?: Encoding;
  fill?: Encoding;
  group?: Encoding;
}

export interface Encoding {
  field: string;
}

export interface AesParams {
  size?: number;
  shape?: number;
  colour?: string;
  stroke?: number;
  alpha?: number;
  fill?: string;
}
