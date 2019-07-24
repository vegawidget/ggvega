import {AggregateOp} from './vlSpec';

export function TranslateStat(ggStat: any): AggregateOp | undefined {
  let aggregate: AggregateOp | undefined;

  if (ggStat['class'] == 'StatCount') {
    aggregate = AggregateOp.Count;
  }
  if (ggStat['class'] == 'StatSum') {
    aggregate = AggregateOp.Sum;
  }

  return aggregate;
}
