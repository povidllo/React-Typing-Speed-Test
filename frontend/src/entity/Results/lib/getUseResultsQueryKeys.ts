export const getUseResultsQueryKeys = (
  length: number = 10,
  offset: number = 0,
) => {
  return ["results", length, offset];
};
