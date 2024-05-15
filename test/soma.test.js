import { test } from "vitest";
import { somar } from "../src/soma";
import { assert } from "chai";

test("soma 1 + 2 é igual a 3", () => {
  assert.equal(somar(1, 2), 3);
});

test("soma -1 + 1 é igual a 0", () => {
  assert.equal(somar(-1, 1), 0);
});

test("soma 0 + 0 é igual a 0", () => {
  assert.equal(somar(0, 0), 0);
});
