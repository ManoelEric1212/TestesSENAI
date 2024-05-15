import { test, expect } from "vitest";
import { somar, subtrair, multiplicar, dividir } from "../src/Calculadora";

test("soma corretamente", () => {
  expect(somar(2, 3)).toBe(5);
  expect(somar(-1, 5)).toBe(4);
  expect(somar(0, 0)).toBe(0);
});

test("subtrai corretamente", () => {
  expect(subtrair(5, 2)).toBe(3);
  expect(subtrair(-1, -5)).toBe(4);
  expect(subtrair(0, 0)).toBe(0);
});

test("multiplica corretamente", () => {
  expect(multiplicar(2, 3)).toBe(6);
  expect(multiplicar(-2, 3)).toBe(-6);
  expect(multiplicar(0, 5)).toBe(0);
});

test("divide corretamente", () => {
  expect(dividir(6, 3)).toBe(2);
  expect(dividir(-6, 3)).toBe(-2);
  expect(dividir(5, 2)).toBeCloseTo(2.5);
});

test("lança erro ao dividir por zero", () => {
  expect(() => dividir(5, 0)).toThrow("Divisão por zero não é permitida");
});
