// const sum;
// usamos export default function sum(a, b) {
//   return a + b;
// }
export function sum(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

export function eleva(a, b) {
  return a ** b;
}

export function factorial(a) {
    // Factorial de 5: 5 * 4 * 3 * 2 * 1
    let factorial = 1;
    for (let i = 1; i <= a; i++) {
        factorial *= i;
    }
    return factorial;
}

    module.exports = {
        sum,
        multiply,
        eleva,
        factorial
    }

// export reemplazaa module.exports = { sum, multiply, eleva, factorial };