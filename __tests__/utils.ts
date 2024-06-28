export const sleep = (time: number): Promise<any> =>
  new Promise(resolve => setTimeout(resolve, time));
