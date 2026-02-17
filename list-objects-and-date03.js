// list , array of objects and date
const lista = [1, "hola", true, null, undefined, { nombre: "Juan", edad: 30 }, [1, 2, 3]
];
const lista2 = new Array(1, "hola", true, null, undefined);

const lista3 = new Array(5); // create an array with 5 empty elements 
lista3[0] = "primer elemento, index 0 de la lista3";


const lista4 = [lista, lista2, lista3]; // list of lists

console.log("Lista 1:");
console.log("Lista 2:");
console.log("Lista 3:");
console.log("Lista 4:");


// objects 
// We define const as person, but not its contents, so we can modify its properties, but not reassing the person variable to another object 
const persona = {
    nombre: "Juan",
    edad: 30,
    altura: 1.75,
    profesion: "Ingeniero",
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};

console.log(persona.profesion); // Accessing the "profession" property of the person object


// Date
// libreria muy buena  : Moment.js
const ahora =new Date(); // Create a new date object with the current date and time, always using uppercase D in Date.
console.log(ahora);

const fecha_milisegundos = new Date(10); //     Create a new date object with a specific number of milliseconds since January 1, 1970 
console.log(fecha_milisegundos);

const Fecha_cadena = new Date("february 1, 2026"); // Create a new date object with a specific date string 
console.log(Fecha_cadena);

const fecha_valores = new Date(2022, 0, 21)     // Create a new date object with specific year, month (0-based index), and day values (year, month, day) 
console.log(fecha_valores);

const dia = ahora.getDate(); // Get the day of the month (1-31) from the date object
const mes = ahora.getMonth() + 1; // Get the month (0-11) from the date object, adding 1 to get a 1-based index
const año = ahora.getFullYear(); // Get the full year (4 digits) from the date object
console.log("Hoy es: " + dia + "/" + mes + "/" + año);
