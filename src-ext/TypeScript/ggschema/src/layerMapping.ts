import {StatClass} from './layerStat';

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
  weight?: Mapping;
}

//TODO @wenyu: define Mapping
export type Mapping = MappingField | MappingFieldExpression | MappingStat | MappingStatExpression;

export interface MappingField {
  field: string;
}

// this uses the classes of all the Stats we have defined
// we might have to redefine this manually
export interface MappingStat {
  stat: string;
}

//NOTE@ian: we will not expect to implement MappingFieldExpression
// or MappingStatExpression any time soon.
export interface MappingFieldExpression {
  field_expression: string;
}

export interface MappingStatExpression {
  stat_expression: string;
}

export interface AesParams {
  size?: number;
  shape?: number;
  colour?: string;
  stroke?: number;
  alpha?: number;
  fill?: string;
}
