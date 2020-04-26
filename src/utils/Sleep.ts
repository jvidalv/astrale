/**
 * To wait X seconds before continue, 2020 JS version
 * @param ms
 */
const sleep = (ms : number) : Promise<null> => new Promise(resolve => setTimeout(resolve, ms));

 export default sleep;