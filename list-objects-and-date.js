// list , array of objects and date
const lista = [1, "hola", true, null, undefined, { nombre: "Juan", edad: 30 }, [1, 2, 3]
];
const lista2 = new Array(1, "hola", true, null, undefined);

const lista3 = new Array(5); // Crea un array con 5 elementos vacíos
lista3[0] = "primer elemento, index 0 de la lista3";


const lista4 = [lista, lista2, lista3]; // Lista de listas

console.log("Lista 1:");
console.log("Lista 2:");
console.log("Lista 3:");
console.log("Lista 4:");


// objects 
// definimos const como persona, pero no su interior, por lo que podemos modificar sus propiedades, pero no reasignar la variable persona a otro objeto
const persona = {
    nombre: "Juan",
    edad: 30,
    altura: 1.75,
    profesion: "Ingeniero",
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};

console.log(persona.profesion); // Accediendo a la propiedad "profesion" del objeto persona


// Date
new Date(); // Crea un nuevo objeto de fecha con la fecha y hora actuales, siempre mayuscula D en Date
