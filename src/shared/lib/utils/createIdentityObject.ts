export const createIdentityObject = <T extends { [K in keyof T]: K }>(obj: T) =>
  obj;
