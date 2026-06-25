const persona = {
    nombre: "Juan",
    edad: 30,
    isDeveloper: true,
    saludo: function() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
};

console.log(persona.isDeveloper); // Accediendo a la propiedad isDeveloper


const otra_persona = {
    nombre: "maria",
    edad: 25,
    isDeveloper: false,
    saludo: function() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
};

persona.saludo(); // Llamando al método saludo
otra_persona.saludo(); // Llamando al método saludo


//a veces creamos objetos que tienen las mismas propiedades y métodos, para eso podemos crear una clase que nos permita crear objetos con las mismas propiedades y métodos, de esta manera no tenemos que repetir el código.
// esto es una función factory: es una función que retorna un objeto, es decir, es una función que crea objetos.
const crearPersona = (nombre, edad, isDeveloper) => {
    return {
        nombre, // es lo mismo que nombre: nombre, ya que el nombre de la propiedad y el nombre del parámetro son iguales
        edad, // es lo mismo que edad: edad, ya que el nombre de la propiedad y el nombre del parámetro son iguales
        isDeveloper, // es lo mismo que isDeveloper: isDeveloper, ya que el nombre de la propiedad y el nombre del parámetro son iguales
        saludo: function() {
            console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
        }
    };
};

const persona1 = crearPersona("Juan", 30, true);
const persona2 = crearPersona("maria", 25, false);

persona1.saludo(); // Llamando al método saludo
persona2.saludo(); // Llamando al método saludo