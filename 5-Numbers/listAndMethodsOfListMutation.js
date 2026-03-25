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
