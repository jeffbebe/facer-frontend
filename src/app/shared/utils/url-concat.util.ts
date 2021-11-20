import { keys, merge } from 'lodash-es';

export const urlConcat = <T>(
  prefix: string,
  subPaths: T
): Record<keyof T, string> => {
  const keysOfSubPath: Array<keyof T> = keys(subPaths) as unknown as Array<
    keyof T
  >;

  return merge(
    {},
    ...keysOfSubPath.map((key) => ({
      [key]: `${prefix}${'/'}${subPaths[key]}`,
    }))
  );
};
