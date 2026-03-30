// como obtener una lista a partir de otra lista con el metodo .slice(inicio, fin) o con el operador spread [...lista]
const lista1 = ['a', 'b', 'c', 'd', 1 , undefined, true];

console.log(lista1.slice(0, 3)); // ['a', 'b', 'c']  el indice de inicio es incluido y el indice de fin es excluido

console.log(lista1.slice(3, 6)); // ['d', 1 , undefined]  si no se especifica el indice de fin, se obtiene hasta el final de la lista

const lista2 = lista1.slice(0, 3);
console.log(lista2); // ['a', 'b', 'c']

const lista3 = lista1.slice(2, -2);
console.log(lista3); // ['c', 'd', 1 , undefined]

