
// Inheritance - Herencia
class Developer {
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre
        this.edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    } // todas las funciones dentro de objetos o clases se llaman metodos. 
} 


// polimorfismo