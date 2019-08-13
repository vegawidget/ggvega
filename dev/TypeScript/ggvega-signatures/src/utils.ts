// https://stackoverflow.com/a/237176
function contains(a: Array, obj: any): boolean {
  var i: num = a.length;
  while (i--) {
    if (a[i] === obj) {
      return true;
    }
  }
  return false;
}

// this function does not depend on Geom
function fieldName(name: string): string {
  // use regular expression to replaces all matches
  return name.replace(/[.]/g, "\\.")
}