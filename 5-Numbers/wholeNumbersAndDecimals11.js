// declaracion de tipos de numeros

let numeroEntero = 50;

let numeroDecimal = 0.1;

let numeroDecimal2 = 0.2;

let sumaDecimales = numeroDecimal + numeroDecimal2;

console.log(sumaDecimales); 
// devuelve 0.30000000000000004 debido a la forma en que los numeros decimales se representan en la memoria de la computadora, lo que puede causar imprecisiones en los calculos con decimales. Para evitar este problema, se pueden utilizar librerias como Decimal.js o BigNumber.js que permiten trabajar con numeros decimales de manera mas precisa.

// tambien hay otras formas redondear los resultados de operaciones con decimales:
console.log(Math.round((numeroDecimal + numeroDecimal2) * 100) /100); // devuelve 0.3 redondeando el resultado a dos decimales

console.log((numeroDecimal + numeroDecimal2).toFixed(2)); // devuelve "0.30" redondeando el resultado a dos decimales y convirtiendolo a string


/*function sumar(a, b) {
    return a + b;
}

console.log(sumar(numeroDecimal, numeroEntero));
*/

// 










