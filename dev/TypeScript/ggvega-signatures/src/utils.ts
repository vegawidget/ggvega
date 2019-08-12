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