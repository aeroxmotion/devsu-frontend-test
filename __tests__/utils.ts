export const sleep = (time: number): Promise<any> =>
  new Promise(resolve => setTimeout(resolve, time));

export const incrementYear = (date: `${string}/${string}/${string}`) => {
  const [day, month, year] = date.split('/');

  return `${day}/${month}/${Number(year) + 1}`;
};
