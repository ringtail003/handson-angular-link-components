export function ArrayCopy<T>(array: T[]): T[] {
  return array.map(item => Object.assign({}, item));
}

export function ObjectCopy<T>(obj: T): T {
  return Object.assign({}, obj);
}