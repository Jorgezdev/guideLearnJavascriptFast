// funciones tipo flecha y funciones anonimas

// las funciones pueden acceder a variables que estan fuera de su bloque, pero no pueden modificar el valor de esas variables, en cambio las variables tipo flecha solo se pueden acceder luego de ser inicializadas
// las funciones tipo flecha no tienen su propio this, por lo que heredan el valor de this del contexto en el que fueron definidas, mientras que las funciones normales tienen su propio this que se refiere al objeto que las invoca.

// las funciones tipo flecha no pueden ser utilizadas como constructores, es decir, no se pueden usar con la palabra clave new para crear objetos, mientras que las funciones normales si pueden ser utilizadas como constructores.
// las funciones tipo flecha no tienen su propio objeto arguments, por lo que no pueden acceder a los argumentos pasados a la función, mientras que las funciones normales si tienen su propio objeto arguments que contiene los argumentos pasados a la función.
// las funciones tipo flecha no pueden ser utilizadas como métodos de objetos, ya que no tienen su propio this, mientras que las funciones normales si pueden ser utilizadas como métodos de objetos y su this se refiere al objeto que las invoca.
// las funciones tipo flecha no pueden ser utilizadas como funciones generadoras, es decir, no pueden utilizar la palabra clave yield para generar valores, mientras que las funciones normales si pueden ser utilizadas como funciones generadoras.

// las funciones tipo flecha son mas concisas y facil de leer, especialmente cuando se utilizan como funciones de callback o en expresiones lambda, mientras que las funciones normales pueden ser mas verbosas y menos legibles en algunos casos.
// es buena practicar declarar todas las variables y funciones al inicio del script, para evitar problemas de hoisting y mejorar la legibilidad del código, aunque en algunos casos puede ser necesario declarar variables o funciones en medio del código para cumplir con ciertos requisitos o para mejorar la organización del código.


const array = [1, 2, 3, 4, 5];

const arrayDoble = array.map(function(numero) { // funcion anonima
    return numero * 2;
});

console.log(arrayDoble); // Imprime: [2, 4, 6, 8, 10]


// con funciones tipo flecha
// const dobleDelValor = valor => {
//     return valor * 2;
// }


const dobleDelValor = valor => valor * 2; // funcion tipo flecha
console.log(dobleDelValor(5)); // Imprime: 10
console.log(dobleDelValor(10)); // Imprime: 20

const array3 = array.map(dobleDelValor); // utilizando la funcion tipo flecha como callback
console.log(array3); // Imprime: [2, 4, 6, 8, 10]

function doble(valor) {
    return valor * 2;
}

// utilizando la funcion normal como callback
const array4 = array.map(doble);
console.log(array4); // Imprime: [2, 4, 6, 8, 10]

// las funciones tipo flecha no pueden ser utilizadas como> constructores, es decir, no se pueden usar con la palabra clave new para crear objetos, mientras que las funciones normales si pueden ser utilizadas como constructores.

// las funciones tipo flecha no tienen su propio objeto arguments, por lo que no pueden acceder a los argumentos pasados a la función, mientras que las funciones normales si tienen su propio objeto arguments que contiene los argumentos pasados a la función.
