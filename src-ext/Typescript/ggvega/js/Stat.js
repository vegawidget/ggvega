import { AggregateOp } from './vlSpec';
export function TranslateStat(ggStat) {
    var aggregate;
    if (ggStat['class'] == 'StatCount') {
        aggregate = AggregateOp.Count;
    }
    if (ggStat['class'] == 'StatSum') {
        aggregate = AggregateOp.Sum;
    }
    return aggregate;
}
