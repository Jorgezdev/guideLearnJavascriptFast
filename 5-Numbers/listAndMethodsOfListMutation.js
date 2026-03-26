// como trabajar con listas, arrays, vectores 
let var1 = {id: false};

let array = [1, "hello", false, true, {id: 9}, null, undefined, var1];

console.log(array);

// Acceder a los valores de un array a través de su posición
// array [valor indice] => 0, 1, 2, 3, 4, 5....
console.log(array[2]); // false

console.log(array[5]); // null

// Metodos para introducir nuevos valores a nuestros arrays
// .push() .unshift() => Mutan el valor de nuestro array
// Valores añadidos al final de la array -> push
array.push("finalArray", 45 , NaN)
console.log(array);


// Valores añadidos al principio de un array -> unshift

array.unshift("first" , 4.5)
console.log(array);


// Metodos para eliminar valores de nuestros arrays
// .pop() .shift() 

let array2 = [8, array, {id: 34} , "test3"]
// elimina elemento al final de la array
array2.pop();

console.log(array2);


let array3 =  ["parrafo nuevo", 11 , 4.7, array2 ]
// elimina elemento al inicio de la array
array3.shift();

console.log(array3);

// Metodo para eliminar, modificar o añadir valores en nuestro array
// .splice(x indice, y cantidad de elementos a borrar, z cantidad de elementos añadir)

const array4 = [ "A", "B", "C", "D", "F", "G", "H"];

array4.splice(2, 3); // el primer numero indica de donde quiere que nos posicionemos en la array y el segundo cuantos valores borramos desde ese punto.
console.log(array4);


//Añadir valores a una array, en este caso añadimos valores, asi que en el segundo valor que es para borrar ponemos 0 en el segundo elemento, el valor que añadiremos ira desde tercera posicion: 

array4.splice(2, 0, "NuevoC", "NuevoD", "NuevoF");
console.log(array4);

//Modificar valores en una array, casi lo mismo que en el caso anterior, primero ingresamos el indice de donde empiece a modificar el valor, luego ingresamos 3 por que borraremos primero esos valores, y en la tercera posicion añadiremos los nuevos valores a nuestra array:


array4.splice(2, 3, "Cfinal", "Dfinal", "Ffinal");
console.log(array4);


