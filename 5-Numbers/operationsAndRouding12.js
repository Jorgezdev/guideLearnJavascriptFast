// principales operaciones aritmeticas

let numeroA = 3.5;

let numeroB = 4.8;

console.log(numeroA + numeroB); // suma

console.log(numeroA - numeroB); // resta 
// resltado :// -1.2999999999999998 por como se representan los numeros decimales en la memoria de la computadora

console.log(numeroA * numeroB); // multiplicacion

console.log(numeroA / numeroB); // division
// resultado :// 0.7291666666666666

let suma = numeroA + numeroB;

let sumaString = suma.toString(); // toString() convierte el numero a string

console.log(typeof sumaString); // string

// redondeo de numeros decimales

let resta = numeroA - numeroB;

console.log(resta.toFixed(2)); // toFixed() redondea el numero a 2 decimales (y tambien transforma el valor numerico a string, añade typeof para ver el tipo de dato)
// resultado :// -1.30)
console.log(typeof resta.toFixed(2));


// .toPrecision() redondea el numero a un numero especifico de digitos significativos

let numeroC = 123.456789;

let numeroD = 213212315653456.00;

console.log(numeroC.toPrecision(5)); // resultado : 123.46

console.log(numeroD.toPrecision(7)); // 2.132123e+14 la (e significa multiplicado *10 elevado a 14)







