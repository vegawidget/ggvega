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

export interface MappingField {
  field: string;
}

export interface MappingFieldExpression {
  fieldExpression: string;
}

export interface MappingStat {
  stat: string;
}

export interface MappingStatExpression {
  statExpression: string;
}

//TODO @wenyu: define Mapping
// export type Mapping = MappingField | MappingFieldExpression | MappingStat | MappingStatExpression;

export interface AesParams {
  size?: number;
  shape?: number;
  colour?: string;
  stroke?: number;
  alpha?: number;
  fill?: string;
}

export type Value = number | string;

//TODO @wenyu: define AesParams

// export interface AesParams {
//   size?: Value;
//   shape?: Value;
//   colour?: Value;
//   stroke?: Value;
//   alpha?: Value;
//   fill?: Value;
// }
