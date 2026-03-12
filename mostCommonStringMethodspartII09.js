let parrafo = "Hola mundo, este es un parrafo de ejemplo para mostrar como funciona los metodos mas comunes con cadenas de caracteres en JavaScript";

let parrafo2 = "Hola mundo, este es un segundo parrafo de ejemplo con cadenas de caracteres en JavaScript";


// formas de concatenar cadenas de caracteres:
console.log(parrafo.concat(" ", parrafo2));

console.log(parrafo + " " + parrafo2);

console.log(`${parrafo} ${parrafo2}`);


// longitud de una cadena de caracteres con espacios en blanco al inicio y al final
let cadenaConEspacios = "   Hola mundo     ";
console.log(cadenaConEspacios.length); // 19


// trim elimina los espacios en blanco al inicio y al final de la cadena de caracteres
console.log(cadenaConEspacios.trim()); // "Hola mundo"

console.log(cadenaConEspacios.trimStart().length); // 10
// trimStart elimina los espacios en blanco al inicio de la cadena de caracteres

console.log(cadenaConEspacios.trimEnd().length); // 14
// trimEnd elimina los espacios en blanco al final de la cadena de caracteres

// obtener el caracter en una posicion especifica: charAt
console.log(cadenaConEspacios.charAt(7)); // m
// se puede obtener con corchetes tambien pero no es tan comun
console.log(cadenaConEspacios[7]); // m

//obtener la posicion de una palabra dentro de una cadena de caracteres

let parrafo4 = "Este es un parrafo, el cuarto para hacer pruebas de posicion de una palabra, escribire cuarto nuevamente para usar lastIndexOf"; 


// indexOf devuelve la posicion de la primera ocurrencia de la palabra, si no encuentra la palabra devuelve -1
console.log(parrafo4.indexOf("cuarto")); // 24 
console.log(parrafo4.charAt(24)); // c
// lastIndexOf devuelve la posicion de la ultima ocurrencia de la palabra, si no encuentra la palabra devuelve -1
console.log(parrafo4.lastIndexOf("cuarto")); // 93

