class Persona {
    nombre;
    edad;
    isDeveloper; //las variables dentro de un objeto o clase se llaman atributos 
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre;
        this.edad = edad;
        this.isDeveloper = isDeveloper;
    }//this. hace referencia al objeto que esta escogiendo this.nombre, esto se le conoce como metodo constructor (this.nombre)
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    } // todas las funciones dentro de objetos o clases se llaman metodos. 
}


const persona1 = new Persona("Juan", 30, true); // cuando usamos la palabra new en una variable nos crea un objeto , pero en este caso le pasamos una clase, por lo que nos crea un objeto de la clase Persona, estamos creando un objeto de la clase Persona, y le pasamos los parametros que necesita el constructor.

console.log(persona1);
// instanciacion es el proceso de crear un objeto a partir de una clase, es decir, cuando usamos la palabra new estamos instanciando un objeto de la clase Persona.
// ejemplos :

let numero = 60; // inicializar
let persona2 = new Persona("maria", 25, false); // instanciacion

// termino instanceof 
// instanceof es un operador que nos permite saber si un objeto es una instancia de una clase, es decir, si un objeto fue creado a partir de una clase.
console.log(persona1 instanceof Persona);
console.log(persona2 instanceof Persona);


// persona.nombre pudimos acceder a lavariable por que es origen publica, tambien podemos crear variables privadas. 