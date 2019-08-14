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
function contains(a: Array, obj: any): boolean {
  var i: num = a.length;
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
function fieldName(name: string): string {
  // use regular expression to replaces all matches
  return name.replace(/[.]/g, "\\.")
}