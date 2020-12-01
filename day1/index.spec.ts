import { twoSum, threeSum, getProduct } from ".";

describe("twoSum", () => {
  it("should find indexes of two numbers that equal the target sum", () => {
    expect(twoSum([0, 1, 2, 3], 3)).toEqual([1, 2]);
    expect(twoSum([10, 22, 31, 5], 36)).toEqual([2, 3]);
  });
});

describe("threeSum", () => {
  it("should find indexes of three numbers that equal the target sum", () => {
    expect(threeSum([0, 1, 2, 3, 4, 5], 10)).toEqual([1, 4, 5]);
    expect(threeSum([10, 22, 31, 5, 1, 6], 38)).toEqual([0, 1, 5]);
  });
});

describe("getProduct", () => {
  const arr = [1, 2, 3, 4, 5, 6];
  it("should get the product from an array of indexes", () => {
    expect(getProduct([1, 3, 5], arr)).toEqual(48); // 2 * 4 * 6
    expect(getProduct([0, 2, 4], arr)).toEqual(15); // 1 * 3 * 5
  });
});
