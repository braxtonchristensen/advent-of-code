import { fileToInput } from "../utils";

export const twoSum = (arr: number[], sum: number): number[] | -1 => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[sum - arr[i]]) {
      return [map[sum - arr[i]], i];
    }
    map[arr[i]] = i;
  }
  return -1;
};

export const threeSum = (arr: number[], sum: number): number[] | -1 => {
  for (let i = 0; i < arr.length; i++) {
    const indices = twoSum(arr, sum - arr[i]);
    if (indices !== -1 && !indices.includes(i)) {
      return [i, ...indices];
    }
  }
  return -1;
};

export const getProduct = (indexes: number[] | -1, input: number[]) =>
  Array.isArray(indexes) ? indexes.reduce((a, b) => a * input[b], 1) : -1;

const runChallenge = async () => {
  const input = (await fileToInput()).map((x) => Number(x));

  const challenge1 = getProduct(twoSum(input, 2020), input);
  console.log("challenge1: ", challenge1);
  const challenge2 = getProduct(threeSum(input, 2020), input);
  console.log("challenge2: ", challenge2);
};

runChallenge();
