// https://stackoverflow.com/a/237176
export function contains(a: Array<any>, obj: any): boolean {
  var i: number = a.length;
  while (i--) {
    if (a[i] === obj) {
      return true;
    }
  }
  return false;
}
