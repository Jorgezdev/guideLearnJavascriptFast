// la definicion de los array es un conjunto ordenado de objetos, que pueden ser de cualquier tipo, como numeros, strings, objetos, etc., y se pueden manipular utilizando los metodos de los arrays, como por ejemplo, el metodo .some() para identificar si un valor existe en un array o en un objeto iterable, el metodo Array.from() para obtener una lista a partir de un objeto iterable, el metodo .keys() para obtener una lista de las claves de un array, etc.
// a diferenncia de los arrays, los Sets y los Maps son objetos que permiten almacenar valores unicos, es decir, no permiten almacenar valores duplicados, lo que los hace muy utiles para almacenar conjuntos de datos sin preocuparse por la duplicacion de valores, ademas, los Sets y los Maps tienen metodos especificos para manipular sus elementos, como por ejemplo, el metodo .add() para agregar un elemento a un Set, el metodo .has() para verificar si un elemento existe en un Set o en un Map, el metodo .delete() para eliminar un elemento de un Set o de un Map, etc.

const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8];

const firstSet = new Set(arrayNumeros);
console.log(firstSet) // Set(8) { 1, 2, 3, 4, 5, 6, 7, 8 }
// en este caso se crea un nuevo Set a partir de un array de numeros, lo que devuelve un Set con cada elemento del array como un elemento del Set, el constructor de Set se utiliza para crear un nuevo Set a partir de un objeto iterable, en este caso se crea un nuevo Set a partir del array de numeros, lo que permite obtener un Set con cada elemento del array como un elemento del Set.

// la definicion de Set es un conjuntos de valores no ordenados y unicos, es decir, no permiten almacenar valores duplicados, lo que los hace muy utiles para almacenar conjuntos de datos sin preocuparse por la duplicacion de valores, ademas, los Sets tienen metodos especificos para manipular sus elementos, como por ejemplo, el metodo .add() para agregar un elemento a un Set, el metodo .has() para verificar si un elemento existe en un Set, el metodo .delete() para eliminar un elemento de un Set, etc.
//(si añadimos un valor duplicado al Set, no se agregara al Set, ya que los Sets no permiten almacenar valores duplicados, por lo tanto, el Set seguira teniendo el mismo numero de elementos, lo que demuestra que los Sets no permiten almacenar valores duplicados.)

// si añadimos objetos al Set, que tengan las mismas propiedades y valores, pero que sean objetos diferentes, el Set los considerara como elementos diferentes, ya que los Sets no comparan los objetos por sus propiedades y valores, sino por su referencia en memoria, lo que significa que si añadimos dos objetos con las mismas propiedades y valores, pero que sean objetos diferentes, el Set los considerara como elementos diferentes, lo que demuestra que los Sets no comparan los objetos por sus propiedades y valores, sino por su referencia en memoria.
const secondSet = new Set([{nombre: "Santiago"}, {nombre: "Santiago"}])
console.log(secondSet) // Set(2) { { nombre: 'Santiago' }, { nombre: 'Santiago' } }
// en este caso se crea un nuevo Set a partir de un array de objetos, lo que devuelve un Set con cada objeto del array como un elemento del Set, el constructor de Set se utiliza para crear un nuevo Set a partir de un objeto iterable, en este caso se crea un nuevo Set a partir del array de objetos, lo que permite obtener un Set con cada objeto del array como un elemento del Set, ademas, aunque los objetos tengan las mismas propiedades y valores, el Set los considera como elementos diferentes, ya que los Sets no comparan los objetos por sus propiedades y valores, sino por su referencia en memoria.


// la gracia de Set es que dentro de un conjunto de valores no se permiten valores duplicados, lo que los hace muy utiles para almacenar conjuntos de datos sin preocuparse por la duplicacion de valores, ademas, los Sets tienen metodos especificos para manipular sus elementos, como por ejemplo, el metodo .add() para agregar un elemento a un Set, el metodo .has() para verificar si un elemento existe en un Set, el metodo .delete() para eliminar un elemento de un Set, etc., lo que permite trabajar con conjuntos de datos de una manera mas facil y eficiente.

// ejemplos: 

firstSet.add(9)
console.log(firstSet) // Set(9) { 1, 2, 3, 4, 5, 6, 7, 8, 9 }
// en este caso se utiliza el metodo .add() para agregar un elemento al Set, lo que devuelve el Set con el nuevo elemento agregado, el metodo .add() se utiliza para agregar un nuevo elemento a un Set, en este caso se agrega el numero 9 al Set firstSet, lo que permite obtener un Set con el nuevo elemento agregado.

firstSet.has(5) // true
// en este caso se utiliza el metodo .has() para verificar si un elemento existe en el Set, lo que devuelve true si el elemento existe en el Set y false si el elemento no existe en el Set, el metodo .has() se utiliza para verificar si un elemento existe en un Set, en este caso se verifica si el numero 5 existe en el Set firstSet, lo que devuelve true ya que el numero 5 existe en el Set.

firstSet.delete(5)
console.log(firstSet) // Set(8) { 1, 2, 3, 4, 6, 7, 8, 9 }
// en este caso se utiliza el metodo .delete() para eliminar un elemento del Set, lo que devuelve el Set con el elemento eliminado, el metodo .delete() se utiliza para eliminar un elemento de un Set, en este caso se elimina el numero 5 del Set firstSet, lo que permite obtener un Set con el elemento eliminado.

/*
// .clear() para eliminar todos los elementos del Set
firstSet.clear()
console.log(firstSet) // Set(0) {}
// en este caso se utiliza el metodo .clear() para eliminar todos los elementos del Set, lo que devuelve un Set vacio, el metodo .clear() se utiliza para eliminar todos los elementos de un Set, en este caso se eliminan todos los elementos del Set firstSet, lo que permite obtener un Set vacio.
*/ 

// .size para obtener el numero de elementos del Set
console.log(firstSet.size) // 8
// en este caso se utiliza la propiedad .size para obtener el numero de elementos del Set, lo que devuelve el numero de elementos del Set, la propiedad .size se utiliza para obtener el numero de elementos de un Set, en este caso se obtiene el numero de elementos del Set firstSet, lo que devuelve 8 ya que el Set firstSet tiene 8 elementos.

// iteracion de un Set utilizando el metodo .forEach()
firstSet.forEach(element => { console.log(element) })
// en este caso se utiliza el metodo .forEach() para iterar sobre los elementos del Set, lo que devuelve cada elemento del Set, el metodo .forEach() se utiliza para ejecutar una funcion para cada elemento de un Set, en este caso se ejecuta una funcion que imprime cada elemento del Set firstSet, lo que permite obtener cada elemento del Set impreso en la consola. 


//obtener valores unicos de un array utilizando un Set

const iteratorSet = firstSet.values()
console.log(iteratorSet) // [Set Iterator] { 1, 2, 3, 4, 6, 7, 8, 9 }
// en este caso se utiliza el metodo .values() para obtener un objeto iterador con los valores del Set, lo que devuelve un objeto iterador con los valores del Set, el metodo .values() se utiliza para obtener un nuevo objeto iterador que contiene los valores de cada elemento del Set, en este caso se obtiene un objeto iterador con los valores de cada elemento del Set firstSet, lo que permite obtener una lista con los valores de cada elemento del Set.

// otra forma es pasarlo a un array utilizando el operador de propagacion o el metodo Array.from()
console.log([...firstSet.values()]) // [ 1, 2, 3, 4, 6, 7, 8, 9 ]