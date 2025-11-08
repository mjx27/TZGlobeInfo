export type TAssertKeysMatch<T extends PropertyKey, K extends PropertyKey> = [
  Exclude<T, K>,
  Exclude<K, T>,
] extends [never, never]
  ? true
  : ['Error: Keys do not match:', Exclude<T, K>, Exclude<K, T>];
