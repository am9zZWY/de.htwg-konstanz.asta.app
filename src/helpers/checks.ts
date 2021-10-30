/**
 * @description Checks if item is null or undefined.
 * @param item
 */
export function nullOrUndefined(item: any): item is null | undefined {
  return item === null || typeof item === "undefined";
}
