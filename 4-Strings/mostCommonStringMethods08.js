// Metodos mas utilizaos con cadenas de caracteres
// existen muchos metodos para trabajar con cadenas de caracteres, algunos de los mas comunes son:  
// como obtener la longitud de una cadena de caracteres: length
let cadena = "Hola mundo";
console.log(cadena.length);

// como convertir una cadena de caracteres a mayusculas: toUpperCase    
console.log(cadena.toUpperCase());

// como convertir una cadena de caracteres a minusculas: toLowerCase
console.log(cadena.toLowerCase());

// como obtener una parte de una cadena de caracteres: slice
console.log(cadena.slice(0, 4)); // Hola
console.log(cadena.slice(5, 10)); // mundo

// como reemplazar una parte de una cadena de caracteres: replace
console.log(cadena.replace("mundo", "amigo")); // Hola amigo
// replace puede reemplazar solo la primera ocurrencia, si queremos reemplazar todas las ocurrencias debemos usar una expresion regular con el modificador g
console.log(cadena.replace(/mundo/g, "amigo")); // Hola amigo
// ocurrencia es cada vez que aparece la palabra mundo en la cadena, si queremos reemplazar solo la primera ocurrencia debemos usar el metodo replace sin la expresion regular


// substring es similar a slice pero no acepta indices negativos
console.log(cadena.substring(0, 4)); // Hola
console.log(cadena.substring(5, 10)); // mundo

// substr es similar a slice pero el segundo parametro es la longitud de la subcadena, no se usa mucho porque es obsoleto
console.log(cadena.substr(0, 4)); // Hola
console.log(cadena.substr(5, 5)); // mundo


