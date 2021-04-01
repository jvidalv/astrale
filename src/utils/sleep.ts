/**
 * Wait X seconds before continue
 * @param ms
 */
const Sleep = (ms: number): Promise<null> =>
  new Promise((resolve) => setTimeout(resolve, ms));

export default Sleep;
