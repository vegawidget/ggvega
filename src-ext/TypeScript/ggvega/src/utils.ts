import * as gs from '../../ggschema/src/index';
import * as ggSpecJsonSchema from '../../ggschema/build/ggschema.json';
import Ajv from 'ajv';

const ajv = new Ajv({
  validateSchema: true,
  allErrors: true,
  extendRefs: 'fail',
  schemaId: 'auto'
});

const gsValidate = ajv.compile(ggSpecJsonSchema);

/**
 * This function is used to validate ggSpec
 * @param spec
 */
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
 * This function remove empty object in the an object
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

// https://stackoverflow.com/a/237176

/**
 * Determine if an array contains an object
 *
 * @remarks
 * **Called by**
 * a *lot* of functions
 *
 * @param a - `Array`
 * @param obj - `any`
 *
 * @returns `boolean`
 */
export function contains(a: Array<any>, obj: any): boolean {
  var i: number = a.length;
  while (i--) {
    if (a[i] === obj) {
      return true;
    }
  }
  return false;
}

/**
 * Make a field-name safe
 *
 * @remarks
 * Dots have a special meaning in Vega-Lite field-names, so if
 * we use them as variable names, we have to escape any dots.
 *
 *
 * @param name - `string`
 *
 * @returns `string`
 */
export function fieldName(name: string): string {
  // use regular expression to replaces all matches
  return name.replace(/[.]/g, '\\.');
}

/**
 * Check if an object has a key
 *
 * @param obj
 * @param key
 */
export function hasKey(obj: object, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key);
}
