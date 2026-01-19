// ; -> demilita el final de una linea
// . -> se usa en los objetos para acceder a los atributos o metodos 
// {} -> se usan para definir objetos, funciones y estructuras de control
// () -> se usan para definir funciones o invocarlas
// [] -> se usan para definir arreglos o acceder a elementos de un arreglo o propiedades de un objeto mediante una variable (listas , arreglos o arrays)

// Ejemplos:

// Punto y coma
let x = 10;
let y = 20;

// Punto
let persona = {
    nombre: "Juan",
    edad: 30,   
    saludar: function() {   
        console.log("Hola, mi nombre es " + this.nombre);
    }   
};

// Llaves
if (x < y) {
    console.log("x es menor que y");
}
persona.saludar(); // Invocando el metodo saludar del objeto persona

// Parentesis
function sumar(a, b) {
    return a + b;
}   
let resultado = sumar(x, y);
console.log("La suma de x e y es: " + resultado);

// Corchetes
let numeros = [1, 2, 3, 4, 5];
console.log("El primer numero es: " + numeros[0]); // Accediendo al primer elemento del arreglo 
let propiedad = "edad";
console.log("La edad de la persona es: " + persona[propiedad]); // Accediendo a la propiedad 'edad' del objeto persona usando una variable  

/* Nota: En JavaScript, el uso de punto y coma al final de las lineas es opcional en muchos casos debido a la insercion automatica de punto y coma (ASI - Automatic Semicolon Insertion). Sin embargo, es una buena practica usarlos para evitar errores inesperados. */
