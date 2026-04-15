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

