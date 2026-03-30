// como unir dos listas con .concat(lista1, lista2) o con el operador spread [...lista1, ...lista2]

const lista1 = ['a', 'b', 'c'];
const lista2 = ['d', 1 , undefined, true];

console.log(lista1.concat(lista2)); // ['a', 'b', 'c', 'd', 1 , undefined, true]

console.log(lista2.concat(lista2)); // ['d', 1 , undefined, true, 'd', 1 , undefined, true]


const lista3 = lista1.concat(lista2);

// como unir dos listas con el factor propagacion
console.log(...lista3); // a b c d 1 undefined true

const lista4 = [...lista1, ...lista2];
console.log(lista4); // ['a', 'b', 'c', 'd', 1 , undefined, true]

// ERROR, MAL USO DEL FACTOR PROPAGACION
const lista5 = [lista1, lista2];
console.log(lista5); // [['a', 'b', 'c'], ['d', 1 , undefined, true]]  dara resultado de una lista de listas, no es lo que queremos

