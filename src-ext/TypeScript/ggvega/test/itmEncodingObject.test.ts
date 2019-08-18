import {itmEncodingObjectByMappingObject, ItmEncodingObject} from '../src/itmEncodingObject';
import * as GG from '../../ggschema/src/index';
import * as ggSpec from './ggSpec';
import * as itmLayer from './itmSpec';

describe('itmEncodingObject/itmEncodingObjectByMappingObject', () => {
  it('should create an intermediate `encoding` object using a `mapping` object', () => {
    const ggMapping = ggSpec.iris01.layers[0].mapping;

    const ggMetadataObject = ggSpec.iris01.data['data-00'].metadata;

    const itmEncodingObject = itmLayer.iris01.layer[0].encoding;

    expect(itmEncodingObjectByMappingObject(ggMapping as GG.Mapping, ggMetadataObject as GG.Metadata)).toEqual(
      itmEncodingObject as ItmEncodingObject
    );
  });
});
