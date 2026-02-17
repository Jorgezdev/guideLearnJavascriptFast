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
new Date(); // Create a new date object with the current date and time, always using uppercase D in Date.
