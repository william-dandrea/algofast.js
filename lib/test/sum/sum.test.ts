import { sum } from "../../src/sum/sum";

describe("Testing hello world", () => {
  test("return value", () => {
    expect(sum(0, 1)).toBe(1);
  });
});
