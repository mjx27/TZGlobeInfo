export const createIdentityObject = <
  T extends { [K in keyof T]: K | Lowercase<string & K> },
>(
  obj: T
) => obj;
