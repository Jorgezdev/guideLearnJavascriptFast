// Most Common String Methods part 3

let texto_largo = "era una vez un texto largo que necesitaba ser recortado para mostrar solo una parte de el, asi que se utilizo el metodo slice para obtener solo una parte del texto y mostrarlo en la consola";

console.log(texto_largo.match(/u/g)); // devuelve un array con todas las coincidencias de la letra "u" en el texto largo

// existe la palabra dentro del texto largo?
console.log(texto_largo.includes("vez")); // devuelve true si la palabra "vez" existe en el texto largo, de lo contrario devuelve false

// saber si el texto empieza con una palabra especifica o letra
console.log(texto_largo.startsWith("era")); // devuelve true si el texto largo empieza con la palabra "era", o frase "era una vez", o letra "e", de lo contrario devuelve false

// saber si el texto termina con una palabra especifica o letra
console.log(texto_largo.endsWith("consola")); // devuelve true si el texto largo termina con la palabra "consola", o frase "mostrarlo en la consola", o letra "a", de lo contrario devuelve false

