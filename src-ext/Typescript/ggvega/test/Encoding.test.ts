import {TranslateEncoding} from '../src/Encoding';
import * as ggSpec from './ggSpec';
import * as vlSpec from './vlSpec';

describe('Encoding/TranslateEncoding', () => {
  it('should translate ggSpec `mapping` to vega-lite `encoding`, including `x`, `y`, `colour`, `size`, `shape`, `fill`, `stroke`', () => {
    expect(
      TranslateEncoding(
        ggSpec.ggSpec04['layers'][0],
        ggSpec.ggSpec04['labels'],
        ggSpec.ggSpec04['data'][ggSpec.ggSpec04['layers'][0]['data']],
        ggSpec.ggSpec04['scales']
      )
    ).toEqual(vlSpec.vlSpec04['layer'][0]['encoding']);

    expect(
      TranslateEncoding(
        ggSpec.ggSpec05['layers'][0],
        ggSpec.ggSpec05['labels'],
        ggSpec.ggSpec05['data'][ggSpec.ggSpec05['layers'][0]['data']],
        ggSpec.ggSpec05['scales']
      )
    ).toEqual(vlSpec.vlSpec05['layer'][0]['encoding']);

    expect(
      TranslateEncoding(
        ggSpec.ggSpec06['layers'][0],
        ggSpec.ggSpec06['labels'],
        ggSpec.ggSpec06['data'][ggSpec.ggSpec06['layers'][0]['data']],
        ggSpec.ggSpec06['scales']
      )
    ).toEqual(vlSpec.vlSpec06['layer'][0]['encoding']);

    expect(
      TranslateEncoding(
        ggSpec.ggSpec07['layers'][0],
        ggSpec.ggSpec07['labels'],
        ggSpec.ggSpec07['data'][ggSpec.ggSpec07['layers'][0]['data']],
        ggSpec.ggSpec07['scales']
      )
    ).toEqual(vlSpec.vlSpec07['layer'][0]['encoding']);

    expect(
      TranslateEncoding(
        ggSpec.ggSpec08['layers'][0],
        ggSpec.ggSpec08['labels'],
        ggSpec.ggSpec08['data'][ggSpec.ggSpec08['layers'][0]['data']],
        ggSpec.ggSpec08['scales']
      )
    ).toEqual(vlSpec.vlSpec08['layer'][0]['encoding']);

    expect(
      TranslateEncoding(
        ggSpec.ggSpec09['layers'][0],
        ggSpec.ggSpec09['labels'],
        ggSpec.ggSpec09['data'][ggSpec.ggSpec09['layers'][0]['data']],
        ggSpec.ggSpec09['scales']
      )
    ).toEqual(vlSpec.vlSpec09['layer'][0]['encoding']);

    expect(
      TranslateEncoding(
        ggSpec.ggSpec10['layers'][0],
        ggSpec.ggSpec10['labels'],
        ggSpec.ggSpec10['data'][ggSpec.ggSpec10['layers'][0]['data']],
        ggSpec.ggSpec10['scales']
      )
    ).toEqual(vlSpec.vlSpec10['layer'][0]['encoding']);
  });

  it('should translate `.` in ggSpec field to `..` in vega-lite spec field. For example, `Sepal.Length` should translate to `Sepal\\.Length`', () => {
    expect(
      TranslateEncoding(
        ggSpec.ggSpec05['layers'][0],
        ggSpec.ggSpec05['labels'],
        ggSpec.ggSpec05['data'][ggSpec.ggSpec04['layers'][0]['data']],
        ggSpec.ggSpec05['scales']
      )
    ).toEqual(vlSpec.vlSpec05['layer'][0]['encoding']);
  });
});
