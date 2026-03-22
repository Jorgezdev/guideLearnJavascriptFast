
// operador .valueOf() - sirve para obtener valores numericos a partir de literales

let numeroA = 4;

let numeroB = Number(5);// esto rara vez se usa es para forzar que te de el valor number

console.log(numeroA); // 4
console.log(numeroB); // Number 5 {}
console.log(numeroA.valueOf() + numeroB.valueOf()); // 9 , de manera interna ya esta haciendo el proceso de suma

console.log(numeroB.valueOf()); // 5 , valueOf desactiva el forzado y ya no nos imprime las llaves como en el caso anterior de la linea 9.

let numeroC = 19;

let numeroD = 0;

let division = (numeroC / numeroD);
console.log(division);  // el valor infinity puede darte cuando intentes dividir un valor con 0 o con un valor null.

let string = new String ("imprimira la cadena dentro de un array, no es muy comun usar esta funcion");
console.log(string);


// Nan (not a number) , figura cuando intentas hacer operaciones matematicas con valores no numericos y por eso figura este error como: dato no numerico.
// ejemplo:

let valorNonumero = Number("Hola");

console.log(valorNonumero); // NaN

console.log(isNaN(valorNonumero)); // true



// transformar valor string a numerico con: Number, parseInt y parseFloat

let numeroF = "458.750";
// nota los valores de numero con comas tambien dan resultado NaN , si este valor hubiera sido 458,750 el resultado seria NaN
let numeroG = 100;

console.log(numeroF + numeroG); // el resultado sera 458,750100 por que el signo + esta concatenando los valores, el primero es string y el segundo numerico.

// para realizar la suma de estos valores aplicamos un Number para convertir el string en numero.

console.log(Number(numeroF) + numeroG); // aqui el resultado sera la suma de los dos valores.

//parseInt and parseFloat transforman un valor numerico y lo fuerzan a ser valor numero entero si es decimal o si es decimal lo mantiene

console.log(parseInt(numeroF));

console.log(parseFloat(numeroF));

//Nmeros hexadecimales, su uso no es muy comun pero vale la pena investigar y saber mas sobre su uso

let nomHexadecimal = "0x3a5f6" // siempre parten con un 0x
console.log(parseInt(nomHexadecimal));
console.log(Number(nomHexadecimal));
console.log(parseFloat(nomHexadecimal)); 

// Obtener los valores maximos y minimos en javascript
// 2 fundamentos que permiten tener el valor maximo de un valor, minimo.
// Tambien tenemos a EPSILON es para tener el valor minimo de un espacio entre un numero y el otro?


let MaximoValorJs = Number.MAX_VALUE;
let MinimoValorJs = Number.MIN_VALUE;
let MinimoDistanciaEntreNumeros = Number.EPSILON;


console.log(MaximoValorJs);
console.log(MinimoValorJs);
console.log(MinimoDistanciaEntreNumeros);



