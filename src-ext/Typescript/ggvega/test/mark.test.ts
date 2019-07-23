import {gg2vl, removeEmpty} from '../src/compile';

describe('compile/gg2vl', () => {


  it('should translate shapes correctly', () => {

    expect(TranslatePointShape(0)).toEqual('circle');

  });

}
