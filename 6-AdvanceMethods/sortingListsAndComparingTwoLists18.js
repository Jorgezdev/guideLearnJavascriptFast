// sort() method is used to sort the elements of an array in place and returns the sorted array.
const array = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"];

array.sort((a, b) => {
    if(a < b){
        return -1
    } else if(a > b){
        return 1
    } else {
        return 0
    }
});

console.log(array) // [ 'Alicante', 'Barcelona', 'Bilbao', 'Madrid', 'San Sebastián' ]
// con el metodo .sort() se puede ordenar un array de forma alfabetica, en este caso se ordena el array de ciudades de forma alfabetica, lo que devuelve un nuevo array con los elementos ordenados, el metodo .sort() recibe una funcion como argumento que se encarga de comparar dos elementos del array, en este caso se compara el elemento a con el elemento b, si a es menor que b se devuelve -1, si a es mayor que b se devuelve 1, y si a es igual a b se devuelve 0, lo que indica que no hay un orden entre esos dos elementos, por lo tanto, el metodo .sort() ordena los elementos del array de acuerdo a esa funcion de comparacion.

// otro ejemplo con numeros
const arrayNumeros = [5, 3, 8, 1, 4]

arrayNumeros.sort((a, b) => {
    if(a < b){
        return +456
    } else if(a > b){
        return -456
    } else {
        return 0
    }
});

console.log(arrayNumeros) // [1, 3, 4, 5, 8]
//  en este caso se ordena el array de numeros de forma ascendente, lo que devuelve un nuevo array con los elementos ordenados, el metodo .sort() recibe una funcion como argumento que se encarga de comparar dos elementos del array, en este caso se compara el elemento a con el elemento b, si a es menor que b se devuelve un numero positivo, si a es mayor que b se devuelve un numero negativo, y si a es igual a b se devuelve 0, lo que indica que no hay un orden entre esos dos elementos, por lo tanto, el metodo .sort() ordena los elementos del array de acuerdo a esa funcion de comparacion.
// otra forma mas sencilla de hacer lo mismo es usando el operador ternario, en este caso se ordena el array de numeros de forma ascendente, lo que devuelve un nuevo array con los elementos ordenados, el metodo .sort() recibe una funcion como argumento que se encarga de comparar dos elementos del array, en este caso se compara el elemento a con el elemento b, si a es menor que b se devuelve un numero positivo, si a es mayor que b se devuelve un numero negativo, y si a es igual a b se devuelve 0, lo que indica que no hay un orden entre esos dos elementos, por lo tanto, el metodo .sort() ordena los elementos del array de acuerdo a esa funcion de comparacion.
arrayNumeros.sort((a, b) => a - b) // ordena de forma ascendente
console.log(arrayNumeros) // [1, 3, 4, 5, 8]








// con el metodo .sort() se puede ordenar un array de objetos de forma alfabetica, en este caso se ordena el array de objetos de ciudades de forma alfabetica, lo que devuelve un nuevo array con los objetos ordenados, el metodo .sort() recibe una funcion como argumento que se encarga de comparar dos elementos del array, en este caso se compara el nombre de la ciudad a con el nombre de la ciudad b, si el nombre de la ciudad a es menor que el nombre de la ciudad b se devuelve -1, si el nombre de la ciudad a es mayor que el nombre de la ciudad b se devuelve 1, y si el nombre de la ciudad a es igual al nombre de la ciudad b se devuelve 0, lo que indica que no hay un orden entre esos dos elementos, por lo tanto, el metodo .sort() ordena los objetos del array de acuerdo a esa funcion de comparacion.
// otra forma mas sencilla de ordenar un array de objetos por una propiedad es usando el operador ternario, en este caso se ordena el array de objetos de ciudades de forma alfabetica, lo que devuelve un nuevo array con los objetos ordenados, el metodo .sort() recibe una funcion como argumento que se encarga de comparar dos elementos del array, en este caso se compara el nombre de la ciudad a con el nombre de la ciudad b, si el nombre de la ciudad a es menor que el nombre de la ciudad b se devuelve -1, si el nombre de la ciudad a es mayor que el nombre de la ciudad b se devuelve 1, y si el nombre de la ciudad a es igual al nombre de la ciudad b se devuelve 0, lo que indica que no hay un orden entre esos dos elementos, por lo tanto, el metodo .sort() ordena los objetos del array de acuerdo a esa funcion de comparacion.
const listaObjetos = [
    {nombre: "Iquique", poblacion: 191468},
    {nombre: "Puerto montt", poblacion: 245000},
    {nombre: "Coyhaique", poblacion: 50000},
    {nombre: "Santiago", poblacion: 7000000},
    {nombre: "San Fernando", poblacion: 100000}
]
listaObjetos.sort((a, b) => {
    if(a.nombre < b.nombre){
        return -1
    } else if(a.nombre > b.nombre){
        return 1
    } else {
        return 0
    } });

console.log(listaObjetos) // [ { nombre: 'Coyhaique', poblacion: 50000 }, { nombre: 'Iquique', poblacion: 191468 }, { nombre: 'Puerto montt', poblacion: 245000 }, { nombre: 'San Fernando', poblacion: 100000 }, { nombre: 'Santiago', poblacion: 7000000 } ]


// otra forma mas sencilla de ordenar un array de objetos por una propiedad es usando el operador ternario, en este caso se ordena el array de objetos de ciudades de forma alfabetica, lo que devuelve un nuevo array con los objetos ordenados, el metodo .sort() recibe una funcion como argumento que se encarga de comparar dos elementos del array, en este caso se compara el nombre de la ciudad a con el nombre de la ciudad b, si el nombre de la ciudad a es menor que el nombre de la ciudad b se devuelve -1, si el nombre de la ciudad a es mayor que el nombre de la ciudad b se devuelve 1, y si el nombre de la ciudad a es igual al nombre de la ciudad b se devuelve 0, lo que indica que no hay un orden entre esos dos elementos, por lo tanto, el metodo .sort() ordena los objetos del array de acuerdo a esa funcion de comparacion.
listaObjetos.sort((a, b) => a.nombre < b.nombre ? -1 : a.nombre > b.nombre ? 1 : 0)





///

// comparar listas con el metodo .every() se puede comparar dos listas para saber si son iguales, en este caso se comparan dos listas de ciudades para saber si son iguales, lo que devuelve true si las listas son iguales y false si las listas son diferentes, el metodo .every() recibe una funcion como argumento que se encarga de comparar cada elemento de la lista con el elemento correspondiente de la otra lista, en este caso se compara el elemento de la lista a con el elemento correspondiente de la lista b, si los elementos son iguales se devuelve true, y si los elementos son diferentes se devuelve false, lo que indica que las listas no son iguales, por lo tanto, el metodo .every() devuelve true si todas las comparaciones devuelven true, y devuelve false si alguna comparacion devuelve false.
const lista1 = ["Iquique", "Puerto montt", "Coyhaique", "Santiago", "San Fernando"]
const lista2 = ["Iquique", "Puerto montt", "Coyhaique", "Santiago", "San Fernando"]
const sonIguales = lista1.length === lista2.length && lista1.every((valor, indice) => valor === lista2[indice])
console.log(sonIguales) // true
// en este caso se comparan las dos listas de ciudades para saber si son iguales, lo que devuelve true si las listas son iguales y false si las listas son diferentes, el metodo .every() recibe una funcion como argumento que se encarga de comparar cada elemento de la lista con el elemento correspondiente de la otra lista, en este caso se compara el elemento de la lista a con el elemento correspondiente de la lista b, si los elementos son iguales se devuelve true, y si los elementos son diferentes se devuelve false, lo que indica que las listas no son iguales, por lo tanto, el metodo .every() devuelve true si todas las comparaciones devuelven true, y devuelve false si alguna comparacion devuelve false.


const arrayNumerosEvery1 = [1, 2, 3, 4, 5, -50, -70, -80]

const resultadoEvery1 = arrayNumerosEvery1.every(valor => {
    if(typeof valor === "number" && valor > 0){
        return true
    } else {return false
    } })
console.log(resultadoEvery1) // false
// en este caso se compara cada elemento del array de numeros para saber si son mayores a 0, lo que devuelve true si todos los elementos son mayores a 0 y false si algun elemento es menor o igual a 0, el metodo .every() recibe una funcion como argumento que se encarga de comparar cada elemento del array con la condicion establecida, en este caso se compara el elemento con la condicion de ser un numero y ser mayor a 0, si el elemento cumple con esa condicion se devuelve true, y si el elemento no cumple con esa condicion se devuelve false, lo que indica que el array no cumple con la condicion establecida, por lo tanto, el metodo .every() devuelve true si todas las comparaciones devuelven true, y devuelve false si alguna comparacion devuelve false




