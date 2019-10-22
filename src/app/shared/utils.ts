export function ArrayCopy<T>(array: T[]): T[] {
  return array.map(item => Object.assign({}, item));
}