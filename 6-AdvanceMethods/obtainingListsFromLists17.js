// Trabajar con métodos más avanzados
// .map() .filter() .reduce()

const array = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"]

const val = array.forEach(v => {
    console.log(v) // San Sebastián, Madrid, Barcelona, Alicante, Bilbao
    return 4
})

console.log(val) // undefined

const newArray = array.map((valor, indice) => {return `${indice + 1} - ${valor}`
})

console.log(newArray) // [ '1 - San Sebastián', '2 - Madrid', '3 - Barcelona', '4 - Alicante', '5 - Bilbao' ]

/*
// filter es muy usado en react para filtrar elementos de una lista, por ejemplo, si queremos obtener solo las ciudades que empiezan con la letra "B", podemos usar el metodo .filter() de la siguiente manera:
const newArray2 = array.filter(valor => valor[0] === "B")

console.log(newArray2) // [ 'Barcelona', 'Bilbao' ] con el metodo .filter() se puede filtrar una lista de forma mas eficiente que con el bucle for, ya que no se tiene que acceder a cada elemento por su indice, sino que se obtiene directamente el elemento en cada iteracion, lo que es mas rapido si la lista es muy grande, ademas de que se puede usar cualquier tipo de condicion para filtrar los elementos, como en este caso se filtran los elementos que empiezan con la letra "B", lo que devuelve un nuevo array con los elementos que cumplen con esa condicion  
*/



const newarray2 = ["Iquique", "Puerto montt", "Coyhaique", "Santiago", "San Fernando"]

const valor = newarray2.forEach(v => {
    console.log(v) // Iquique, Puerto montt, Coyhaique, Santiago, San Fernando
    return 4
})
console.log(valor) // undefined
// nos da undefined porque el metodo .forEach() no devuelve nada, solo ejecuta la funcion que se le pasa como argumento para cada elemento del array, pero no devuelve un nuevo array con los resultados de esa funcion, por lo tanto, si queremos obtener un nuevo array con los resultados de esa funcion, debemos usar el metodo .map() en lugar de .forEach().

const newArray3 = newarray2.map((valor, indice) => {return `${indice + 1} - ${valor}`})
console.log(newArray3) // [ '1 - Iquique', '2 - Puerto montt', '3 - Coyhaique', '4 - Santiago', '5 - San Fernando' ]
// con el metodo .map() se puede obtener un nuevo array con los resultados de la funcion que se le pasa como argumento, en este caso se obtiene un nuevo array con los elementos del array original pero con un formato diferente, ya que se le agrega el indice de cada elemento al principio de cada elemento, lo que devuelve un nuevo array con los elementos formateados.


// la gran diferencia es que .forEach() solo recorre el array pero no devuelve nada (por eso val es undefined), mientras que .map() crea un nuevo array con los resultados de lo que retornes en la función.



const listaObjetos = [
    {nombre: "Iquique", poblacion: 191468},
    {nombre: "Puerto montt", poblacion: 245000},
    {nombre: "Coyhaique", poblacion: 50000},
    {nombre: "Santiago", poblacion: 7000000},
    {nombre: "San Fernando", poblacion: 100000}
]

const poblacionMayor100000 = listaObjetos.filter(ciudad => ciudad.poblacion > 100000)
console.log(poblacionMayor100000) // [ { nombre: 'Iquique', poblacion: 191468 }, { nombre: 'Puerto montt', poblacion: 245000 }, { nombre: 'Santiago', poblacion: 7000000 } ]
// con el metodo .filter() se puede obtener un nuevo array con los elementos que cumplen con una condicion, en este caso se obtiene un nuevo array con los objetos que tienen una poblacion mayor a 100000, lo que devuelve un nuevo array con los objetos que cumplen con esa condicion.

// otra forma de hacer lo mismo
const poblacionMayor100000Opcion2 = listaObjetos.filter(ciudad => {
    if(ciudad.poblacion > 100000){
        return true
    } else {
        return false
    }
})
console.log(poblacionMayor100000Opcion2) // [ { nombre: 'Iquique', poblacion: 191468 }, { nombre: 'Puerto montt', poblacion: 245000 }, { nombre: 'Santiago', poblacion: 7000000 } ]
// con esta forma de escribir la funcion se obtiene el mismo resultado que con la forma anterior, pero es mas larga y menos eficiente, ya que se tiene que evaluar la condicion en cada iteracion, lo que hace que el codigo sea mas largo y menos legible, por lo tanto, es mejor usar la forma anterior para escribir la funcion de filtro.

// para filtrar por un elemento distinto a los demas
const ciudadesSinCapital = listaObjetos.filter(ciudad => ciudad.nombre !== "Santiago")
console.log(ciudadesSinCapital) // [ { nombre: 'Iquique', poblacion: 191468 }, { nombre: 'Puerto montt', poblacion: 245000 }, { nombre: 'Coyhaique', poblacion: 50000 }, { nombre: 'San Fernando', poblacion: 100000 } ]
// con el metodo .filter() se puede obtener un nuevo array con los elementos que cumplen con una condicion, en este caso se obtiene un nuevo array con los objetos que tienen un nombre distinto a "Santiago", lo que devuelve un nuevo array con los objetos que cumplen con esa condicion.


// con el metodo .reduce() se puede obtener un nuevo valor a partir de los elementos de un array, en este caso se obtiene la suma de las poblaciones de todas las ciudades, lo que devuelve un nuevo valor con la suma de las poblaciones.
const sumaPoblaciones = listaObjetos.reduce((acumulador, ciudad) => acumulador + ciudad.poblacion, 0)
console.log(sumaPoblaciones) // 7496468
// con el metodo .reduce() se puede obtener un nuevo valor a partir de los elementos de un array, en este caso se obtiene la suma de las poblaciones de todas las ciudades, lo que devuelve un nuevo valor con la suma de las poblaciones.

