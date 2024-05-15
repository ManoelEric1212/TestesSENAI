# Tutorial: Criando um Projeto Node.js com Testes de Unidade usando vitest

## Passo 1: Inicializar um novo projeto Node.js

```npm init -y```
## Passo 2: Instalar o Vitest

```npm install --save-dev vitest```

## Passo 3: Criar o teste

- Função a ser testada:

```js
export function somar(a, b) {
  return a + b;
}
```

- Escrita do teste:

```js
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

```

## Passo 4: Definir como o teste vai ser executado

- No arquivo package.json definir o script de test

    ```js
  "scripts": {
    "test": "vitest"
  },

  ```

## Passo 5: Vamos implementar mais testes 

- Criar um arquivo em src, denominado calculadora.js

```js
export function somar(a, b) {
  return a + b;
}

export function subtrair(a, b) {
  return a - b;
}

export function multiplicar(a, b) {
  return a * b;
}

export function dividir(a, b) {
  if (b === 0) {
    throw new Error("Divisão por zero não é permitida");
  }
  return a / b;
}


```
## PAsso 6: Escrever mais casos de test 


```js
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

```

# Verificar a cobertura de um teste de unidade 

- Devemos instalar as libs para verificação de cobertura 

``` npm i -D @vitest/coverage-v ```


``` npm i -D @vitest/ui ```

# Scripts devem ser atualizados 

```js

  "scripts": {
    "test": "vitest",
    "test:coverage": "vitest run --coverage",
    "test:ui": "vitest --ui"
  },

```
