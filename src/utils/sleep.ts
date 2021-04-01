/**
 * To wait X seconds before continue, 2020 JS version
 * @param ms
 */
const Sleep = (ms: number): Promise<null> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default Sleep;
