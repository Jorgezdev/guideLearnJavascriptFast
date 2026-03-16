// ; -> delimits the end og a line
// . -> it is used in objects to access attributes or methods
// {} -> they are used to define objects, functions, and control structures (like if, for, while)
// () -> they are used to define or invoke functions, and to group expressions
// [] -> they are used to define arrays or accesss elemnts of an array or properties of an object using a variable (lists, array or arrays)

// 

// Examples of each notation:

// Semicolon
let x = 10;
let y = 20;

// point
let persona = {
    nombre: "Juan",
    edad: 30,   
    saludar: function() {   
        console.log("Hola, mi nombre es " + this.nombre);
    }   
};

// keys
if (x < y) {
    console.log("x es menor que y");
}
persona.saludar(); // Invoking the greet methos of the person object

// parenthesis
function sumar(a, b) {
    return a + b;
}   
let resultado = sumar(x, y);
console.log("La suma de x e y es: " + resultado);

// Brackets
let numeros = [1, 2, 3, 4, 5];
console.log("El primer numero es: " + numeros[0]); // Accessing the first element of the array
let propiedad = "edad";
console.log("La edad de la persona es: " + persona[propiedad]); // Accessing the "age" property og the person object using a variable 

/* Note: In Javascript, using semicolons at the end of lines is optional in many cases due to automatic semicolon insertion (ASI). However, it's a good practice to use them to avoid unexpected errors. */