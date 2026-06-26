class Persona {
   #nombre; // añadimos -> # para darle caracter privado a estos atributos
            // Solo se puede acceder dentro de la clase
   #edad;
   // añadimos -> _ para proteger un atributo
   // Solo se puede acceder desde dentro de la clase y desde clases descendientes
  _isDeveloper = true
    constructor(name, edad, isDeveloper) {
        this.#nombre = name
        this.#edad = edad // esto es un getter por ejemplo
        this.isDeveloper = isDeveloper;
    }//this. hace referencia al objeto que esta escogiendo this.nombre, esto se le conoce como metodo constructor (this.nombre)
    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    } // todas las funciones dentro de objetos o clases se llaman metodos. 


    obtenNombre() { // funcion getter -> nos permite acceder (de forma controlada) a algun atributo protegido
        return this.#nombre 
    }
}


// para acceder a los datos solo se puede dentro de la clase y no por solicitudes de afuera. 

const persona = new Persona("Gorka", 70)

persona.saludo()

console.log(persona.obtenNombre())


// Getter -> metodos que nos permiten obtner atributos/metodos privados o protegidos
// Setter -> metodos que nos permiten cambiar el valor de los atributos privados o publicos 
// poner en practica estos conceptos, hay diferencias y son muy usados en clases. 