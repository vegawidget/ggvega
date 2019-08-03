import * as gs from '../../ggschema/src/gsSpec';
import * as ggSpecJsonSchema from '../../ggschema/build/ggschema.json';
import Ajv from 'ajv';

const ajv = new Ajv({
  validateSchema: true,
  allErrors: true,
  extendRefs: 'fail',
  schemaId: 'auto'
});

const gsValidate = ajv.compile(ggSpecJsonSchema);

export function validateGs(spec: gs.TopLevelSpec) {
  const valid = gsValidate(spec);
  const errors = gsValidate.errors;

  if (errors)
    errors.map((err: Ajv.ErrorObject) => {
      console.warn('ggSpec' + err.dataPath + ' ' + err.message);

      // throw new Error('ggSpec' + err.dataPath + ' ' + err.message);
    });

  return valid;
}

/**
 * This function remove empty object in the vlSpec
 * @param obj
 */
export function removeEmpty(obj: any) {
  if (!(obj != null && typeof obj === 'object')) return;

  Object.keys(obj).forEach(function(key) {
    if (obj[key] && typeof obj[key] === 'object') {
      if (Object.keys(obj[key]).length === 0) {
        delete obj[key];
        return;
      }

      removeEmpty(obj[key]);

      if (Object.keys(obj[key]).length === 0) {
        delete obj[key];
        return;
      }
    } else if (obj[key] === null) {
      delete obj[key];
      return;
    }
  });
}
