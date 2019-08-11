function fieldName(name: string): string {
  // use regular expression to replaces all matches
  return name.replace(/[.]/g, "\\.")
}