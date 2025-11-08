export type TPartialWithUndefined<T> = {
  [K in keyof T]?: T[K] | undefined;
};
