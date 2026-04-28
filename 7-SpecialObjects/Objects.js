// trabajando con objetos
// los objetos son un tipo de dato que permite almacenar colecciones de datos y funcionalidades, es decir, permiten almacenar propiedades y metodos, lo que los hace muy utiles para organizar y estructurar el codigo, ademas, los objetos tienen una sintaxis muy flexible, lo que permite crear objetos de diferentes maneras, como por ejemplo, utilizando la sintaxis de objeto literal, utilizando la sintaxis de constructor, utilizando la sintaxis de clase, etc.

const objeto1 = {
    id: 4,
    nombre: "Jorge",
    apellido: "Megalovania",
    isDeveloper: true,
    Peliculas_favoritas: ["La cacería", "El Padrino 2", "Killbill"],
    "4-Juegos_favoritos": ["GTA", "FIFA", "Call of Duty"],
}

console.log(objeto1.id) // 4

console.log(objeto1.["4-Juegos_favoritos"]) // [ 'GTA', 'FIFA', 'Call of Duty' ]
// en este caso se accede a la propiedad "4-Juegos_favoritos" del objeto1 utilizando la sintaxis de corchetes, lo que devuelve el valor de la propiedad "4-Juegos_favoritos", la sintaxis de corchetes se utiliza para acceder a las propiedades de un objeto que tienen nombres que no son validos para la sintaxis de punto, como por ejemplo, propiedades que comienzan con un numero, propiedades que contienen espacios, propiedades que contienen caracteres especiales, etc., en este caso se accede a la propiedad "4-Juegos_favoritos" del objeto1 utilizando la sintaxis de corchetes, lo que permite obtener el valor de la propiedad "4-Juegos_favoritos".
// ademas, la sintaxis de corchetes tambien se puede utilizar para acceder a las propiedades de un objeto utilizando una variable, lo que permite acceder a las propiedades de un objeto de manera dinamica, como por ejemplo, utilizando una variable para almacenar el nombre de la propiedad que se desea acceder, y luego utilizando esa variable para acceder a la propiedad del objeto, lo que permite obtener el valor de la propiedad de manera dinamica.

const propiedad = "isDeveloper"
console.log(objeto1[propiedad]) // true
// en este caso se utiliza una variable para almacenar el nombre de la propiedad "isDeveloper", y luego se utiliza esa variable para acceder a la propiedad del objeto1 utilizando la sintaxis de corchetes, lo que devuelve el valor de la propiedad "isDeveloper", lo que demuestra que la sintaxis de corchetes se puede utilizar para acceder a las propiedades de un objeto utilizando una variable, lo que permite acceder a las propiedades de un objeto de manera dinamica.
// ademas, los objetos tambien tienen metodos, que son funciones que se almacenan como propiedades de un objeto, lo que permite ejecutar una funcion utilizando la sintaxis de punto, como por ejemplo, utilizando el metodo .toString() para convertir un objeto a una cadena de texto, utilizando el metodo .hasOwnProperty() para verificar si un objeto tiene una propiedad especifica, utilizando el metodo .keys() para obtener una lista de las claves de un objeto, etc., lo que permite trabajar con objetos de una manera mas facil y eficiente.

const objeto2 = objeto1;
console.log(objeto2) // { id: 4, nombre: 'Jorge', apellido: 'Megalovania', isDeveloper: true, Peliculas_favoritas: [ 'La cacería', 'El Padrino 2', 'Killbill' ], '4-Juegos_favoritos': [ 'GTA', 'FIFA', 'Call of Duty' ] }
// en este caso se asigna el objeto1 a la variable objeto2, lo que devuelve una referencia al mismo objeto en memoria, lo que significa que cualquier cambio que se realice en el objeto2 tambien se reflejara en el objeto1, ya que ambos variables apuntan al mismo objeto en memoria, lo que demuestra que los objetos son un tipo de dato por referencia, lo que significa que cuando se asigna un objeto a una variable, se asigna una referencia al objeto en memoria, y no una copia del objeto, lo que permite trabajar con objetos de manera mas eficiente, ya que no es necesario crear copias de los objetos para trabajar con ellos.
// ademas, los objetos tambien tienen metodos para manipular sus propiedades, como por ejemplo, el metodo .hasOwnProperty() para verificar si un objeto tiene una propiedad especifica, el metodo .keys() para obtener una lista de las claves de un objeto, el metodo .values() para obtener una lista de los valores de un objeto, el metodo .entries() para obtener una lista de las claves y valores de un objeto, etc., lo que permite trabajar con objetos de una manera mas facil y eficiente.

objeto2.nombre = "Exequiel"
console.log(objeto2.nombre) // Exequiel
// en este caso se modifica la propiedad "nombre" del objeto2, lo que devuelve el nuevo valor de la propiedad "nombre" del objeto1, lo que demuestra que cualquier cambio que se realice en el objeto2 tambien se reflejara en el objeto1, ya que ambos variables apuntan al mismo objeto en memoria, lo que demuestra que los objetos son un tipo de dato por referencia, lo que significa que cuando se asigna un objeto a una variable, se asigna una referencia al objeto en memoria, y no una copia del objeto, lo que permite trabajar con objetos de manera mas eficiente, ya que no es necesario crear copias de los objetos para trabajar con ellos.   

console.log(objeto1.nombre) // Exequiel
// en este caso se accede a la propiedad "nombre" del objeto1, lo que devuelve el nuevo valor de la propiedad "nombre" del objeto1, lo que demuestra que cualquier cambio que se realice en el objeto2 tambien se reflejara en el objeto1, ya que ambos variables apuntan al mismo objeto en memoria, lo que demuestra que los objetos son un tipo de dato por referencia, lo que significa que cuando se asigna un objeto a una variable, se asigna una referencia al objeto en memoria, y no una copia del objeto, lo que permite trabajar con objetos de manera mas eficiente, ya que no es necesario crear copias de los objetos para trabajar con ellos.


let valor1 = 5;
let valor2 = valor1;
console.log(valor1) // 5

valor2 = 10;
console.log(valor2) // 10
console.log(valor1) // 5
// en este caso se asigna el valor de la variable valor1 a la variable valor2, lo que devuelve una copia del valor de la variable valor1, lo que significa que cualquier cambio que se realice en la variable valor2 no se reflejara en la variable valor1, ya que ambos variables almacenan valores diferentes en memoria, lo que demuestra que los tipos de datos primitivos son un tipo de dato por valor, lo que significa que cuando se asigna un valor a una variable, se asigna una copia del valor en memoria, y no una referencia al valor, lo que permite trabajar con tipos de datos primitivos de manera mas eficiente, ya que no es necesario crear copias de los valores para trabajar con ellos.


//////////////////

const objeto3 = {...objeto1}
console.log(objeto1.nombre) // Exequiel
console.log(objeto3.nombre) // Exequiel
// en este caso se utiliza el operador de propagacion para crear una copia del objeto1 en la variable objeto3, lo que devuelve un nuevo objeto con las mismas propiedades y valores que el objeto1, lo que significa que cualquier cambio que se realice en el objeto3 no se reflejara en el objeto1, ya que ambos variables almacenan objetos diferentes en memoria, lo que demuestra que el operador de propagacion se puede utilizar para crear copias superficiales de objetos, lo que permite trabajar con objetos de manera mas eficiente, ya que no es necesario crear copias profundas de los objetos para trabajar con ellos.

objeto3.nombre = "Emanuel"

console.log(objeto1.nombre) // Exequiel
console.log(objeto3.nombre) // Emanuel
// en este caso se modifica la propiedad "nombre" del objeto3, lo que devuelve el nuevo valor de la propiedad "nombre" del objeto3, lo que demuestra que cualquier cambio que se realice en el objeto3 no se reflejara en el objeto1, ya que ambos variables almacenan objetos diferentes en memoria, lo que demuestra que el operador de propagacion se puede utilizar para crear copias superficiales de objetos, lo que permite trabajar con objetos de manera mas eficiente, ya que no es necesario crear copias profundas de los objetos para trabajar con ellos.

///////////////////////////////////////////////

// como ordenar listas de objetos en funcion de una propiedad especifica utilizando el metodo .sort() y una funcion de comparacion personalizada, lo que permite ordenar listas de objetos de manera facil y eficiente, como por ejemplo, ordenar una lista de objetos por su propiedad "nombre" en orden alfabetico, ordenar una lista de objetos por su propiedad "edad" en orden ascendente o descendente, etc.

const listaDePeliculas = [
    {titulo: "La cacería", anyo: 2012},
    {titulo: "El Padrino 2", anyo: 1974},
    {titulo: "Killbill", anyo: 2003},
]

console.log(listaDePeliculas)   // [ { titulo: 'La cacería', anyo: 2012 }, { titulo: 'El Padrino 2', anyo: 1974 }, { titulo: 'Killbill', anyo: 2003 } ]
// en este caso se crea una lista de objetos, lo que devuelve una lista de objetos con las propiedades "titulo" y "anyo", lo que permite trabajar con listas de objetos de manera facil y eficiente, ya que se pueden utilizar los metodos de los arrays para manipular las listas de objetos, como por ejemplo, el metodo .sort() para ordenar las listas de objetos en funcion de una propiedad especifica utilizando una funcion de comparacion personalizada, lo que permite ordenar listas de objetos de manera facil y eficiente, como por ejemplo, ordenar una lista de objetos por su propiedad "titulo" en orden alfabetico, ordenar una lista de objetos por su propiedad "anyo" en orden ascendente o descendente, etc.

listaDePeliculas.sort((a, b) => a.anyo - b.anyo)
console.log(listaDePeliculas)   // [ { titulo: 'El Padrino 2', anyo: 1974 }, { titulo: 'Killbill', anyo: 2003 }, { titulo: 'La cacería', anyo: 2012 } ]
// en este caso se utiliza el metodo .sort() para ordenar la lista de objetos en funcion de la propiedad "anyo" utilizando una funcion de comparacion personalizada, lo que devuelve la lista de objetos ordenada en funcion de la propiedad "anyo" en orden ascendente, lo que demuestra que el metodo .sort() se puede utilizar para ordenar listas de objetos en funcion de una propiedad especifica utilizando una funcion de comparacion personalizada, lo que permite ordenar listas de objetos de manera facil y eficiente, como por ejemplo, ordenar una lista de objetos por su propiedad "titulo" en orden alfabetico, ordenar una lista de objetos por su propiedad "anyo" en orden ascendente o descendente, etc
