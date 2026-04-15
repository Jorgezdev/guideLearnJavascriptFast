const array = [1, 2, 3, 4, 5, true, NaN, undefined, null, 'hola'];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}// con el bucle for se puede iterar sobre una lista y obtener cada uno de sus elementos, pero no es la forma mas eficiente de hacerlo, ya que se tiene que acceder a cada elemento por su indice, lo que puede ser lento si la lista es muy grande

console.log(array); // imprime la array completa, pero no es lo mismo que iterar sobre cada elemento de la array, ya que no se puede acceder a cada elemento individualmente


// Forma ES6 de iterar sobre una lista, con el metodo .forEach() que recibe una funcion como argumento y ejecuta esa funcion para cada elemento de la lista, pasando el elemento como argumento a la funcion

array.forEach(element => console.log(element)); // con el metodo .forEach() se puede iterar sobre una lista y obtener cada uno de sus elementos de forma mas eficiente que con el bucle for, ya que no se tiene que acceder a cada elemento por su indice, sino que se obtiene directamente el elemento en cada iteracion, lo que es mas rapido si la lista es muy grande

// tambien se puede usar el metodo .map() que recibe una funcion como argumento y ejecuta esa funcion para cada elemento de la lista, pasando el elemento como argumento a la funcion, pero a diferencia de .forEach() devuelve una nueva lista con los resultados de la funcion aplicada a cada elemento de la lista original

// forma eficiente de .forEach

let suma = 0;
const array2 = [1, 2, 3, 4, 5];

array2.forEach(element => {
     suma += element;
     console.log(element)
 })
 console.log(suma);  // con el metodo .forEach() se puede iterar sobre una lista y obtener cada uno de sus elementos de forma mas eficiente que con el bucle for, ya que no se tiene que acceder a cada elemento por su indice, sino que se obtiene directamente el elemento en cada iteracion, lo que es mas rapido si la lista es muy grande

//////////////////


// busqueda de un elemento en una lista con el metodo .find() que recibe una funcion como argumento y ejecuta esa funcion para cada elemento de la lista, pasando el elemento como argumento a la funcion, pero a diferencia de .forEach() devuelve el primer elemento que cumple con la condicion de la funcion, o undefined si no se encuentra ningun elemento que cumpla con la condicion
// encontrar el elemento Hola del primer array

const newVariable = array.find(element => element === 'hola');

console.log(newVariable); // con el metodo .find() se puede buscar un elemento en una lista de forma mas eficiente que con el bucle for, ya que no se tiene que acceder a cada elemento por su indice, sino que se obtiene directamente el elemento en cada iteracion, lo que es mas rapido si la lista es muy grande

///

const newVariable2 = array.find(element => {
    if (typeof element === 'number') {
        return true;
    }
});
console.log(newVariable2); // con el metodo .find() se puede buscar un elemento en una lista de forma mas eficiente que con el bucle for, ya que no se tiene que acceder a cada elemento por su indice, sino que se obtiene directamente el elemento en cada iteracion, lo que es mas rapido si la lista es muy grande, ademas de que se puede usar cualquier tipo de condicion para buscar el elemento, como en este caso se busca el primer elemento que sea un numero, lo que devuelve el numero 1, ya que es el primer elemento de la lista que cumple con esa condicion

////

const listaObjetos = [
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Maria', edad: 25 },
    { nombre: 'Pedro', edad: 35 }
];

const newVariable3 = listaObjetos.find(element =>
     element.nombre === 'Maria');
console.log(newVariable3); // con el metodo .find() se puede buscar un elemento en una lista de forma mas eficiente que con el bucle for, ya que no se tiene que acceder a cada elemento por su indice, sino que se obtiene directamente el elemento en cada iteracion, lo que es mas rapido si la lista es muy grande, ademas de que se puede usar cualquier tipo de condicion para buscar el elemento, como en este caso se busca el primer elemento que tenga el nombre 'Maria', lo que devuelve el objeto { nombre: 'Maria', edad: 25 }, ya que es el primer elemento de la lista que cumple con esa condicion


const newVariable4 = listaObjetos.find(element =>
     element.nombre === 'Pëdro');
console.log(newVariable4); // con el metodo .find() se puede buscar un elemento en una lista de forma mas eficiente que con el bucle for, ya que no se tiene que acceder a cada elemento por su indice, sino que se obtiene directamente el elemento en cada iteracion, lo que es mas rapido si la lista es muy grande, ademas de que se puede usar cualquier tipo de condicion para buscar el elemento, como en este caso se busca el primer elemento que tenga el nombre 'Pëdro', lo que devuelve el objeto { nombre: 'Pëdro', edad: 35 }, ya que es el primer elemento de la lista que cumple con esa condicion

