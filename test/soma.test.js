import { test, expect } from "vitest";
import { somar } from "../src/soma";
test("soma 1 + 2 é igual a 3", () => {
  expect(somar(1, 2)).toBe(3);
});

test("soma -1 + 1 é igual a 0", () => {
  expect(somar(-1, 1)).toBe(0);
});

test("soma 0 + 0 é igual a 0", () => {
  expect(somar(0, 0)).toBe(0);
});
