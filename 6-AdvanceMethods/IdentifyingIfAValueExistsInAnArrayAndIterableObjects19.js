// metodo .some() se utiliza para verificar si al menos un elemento de un array cumple con una condicion especifica, lo que devuelve un valor booleano, true si al menos un elemento cumple con la condicion y false si ningun elemento cumple con la condicion, el metodo .some() recibe una funcion como argumento que se encarga de evaluar cada elemento del array, en este caso se evalua si el numero es mayor que 5, si al menos un numero es mayor que 5 se devuelve true, de lo contrario se devuelve false.

const arrayNumerosSome1 = [1, 2, 3, 4, 5, -50, -70, -80]
const resultadoSome1 = arrayNumerosSome1.some(valor => {
    if(typeof valor === "number" && valor > 5){
        return true
    } else {return false
    } })
console.log(resultadoSome1) // false
// en este caso se compara cada elemento del array de numeros para saber si al menos un numero es mayor a 5, lo que devuelve true si al menos un numero es mayor a 5 y false si ningun numero es mayor a 5, el metodo .some() recibe una funcion como argumento que se encarga de comparar cada elemento del array con la condicion establecida, en este caso se compara el elemento con la condicion de ser un numero y ser mayor a 5, si el elemento cumple con esa condicion se devuelve true, y si el elemento no cumple con esa condicion se devuelve false, lo que indica que el array no cumple con la condicion establecida, por lo tanto, el metodo .some() devuelve true si alguna comparacion devuelve true, y devuelve false si todas las comparaciones devuelven false.    


// otro ejemplo
const arrayNumerosSome2 = [1, 2, 3, 4, 58754, -50, -70, -80]

const resultadoSome2 = arrayNumerosSome2.some(valor => valor < 0)
console.log(resultadoSome2) // true
// en este caso se compara cada elemento del array de numeros para saber si al menos un numero es menor a 0, lo que devuelve true si al menos un numero es menor a 0 y false si ningun numero es menor a 0, el metodo .some() recibe una funcion como argumento que se encarga de comparar cada elemento del array con la condicion establecida, en este caso se compara el elemento con la condicion de ser menor a 0, si el elemento cumple con esa condicion se devuelve true, y si el elemento no cumple con esa condicion se devuelve false, lo que indica que el array cumple con la condicion establecida, por lo tanto, el metodo .some() devuelve true si alguna comparacion devuelve true, y devuelve false si todas las comparaciones devuelven false.

const existe = arrayNumerosSome2.some(valor => valor === 58754)
console.log(existe) // true
// en este caso se compara cada elemento del array de numeros para saber si al menos un numero es igual a 58754, lo que devuelve true si al menos un numero es igual a 58754 y false si ningun numero es igual a 58754, el metodo .some() recibe una funcion como argumento que se encarga de comparar cada elemento del array con la condicion establecida, en este caso se compara el elemento con la condicion de ser igual a 58754, si el elemento cumple con esa condicion se devuelve true, y si el elemento no cumple con esa condicion se devuelve false, lo que indica que el array cumple con la condicion establecida, por lo tanto, el metodo .some() devuelve true si alguna comparacion devuelve true, y devuelve false si todas las comparaciones devuelven false.

const listaObjetos = [
    {nombre: "Iquique", poblacion: 191468},
    {nombre: "Puerto montt", poblacion: 245000},
    {nombre: "Coyhaique", poblacion: 50000},
    {nombre: "Santiago", poblacion: 7000000},
    {nombre: "San Fernando", poblacion: 100000}
]

const existeCiudad = listaObjetos.some(objeto => objeto.nombre === "Santiago")
console.log(existeCiudad) // true
// en este caso se compara cada elemento del array de objetos para saber si al menos un objeto tiene el nombre de ciudad igual a Santiago, lo que devuelve true si al menos un objeto tiene el nombre de ciudad igual a Santiago y false si ningun objeto tiene el nombre de ciudad igual a Santiago, el metodo .some() recibe una funcion como argumento que se encarga de comparar cada elemento del array con la condicion establecida, en este caso se compara el nombre de la ciudad del objeto con la condicion de ser igual a Santiago, si el nombre de la ciudad cumple con esa condicion se devuelve true, y si el nombre de la ciudad no cumple con esa condicion se devuelve false, lo que indica que el array cumple con la condicion establecida, por lo tanto, el metodo .some() devuelve true si alguna comparacion devuelve true, y devuelve false si todas las comparaciones devuelven false.



// como obtener una lista da partir de un objeto iterable, como un string
const string = "Hola mundo"
console.log([...string]) // [ 'H', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o' ]
// en este caso se utiliza el operador de propagacion para obtener una lista a partir de un string, lo que devuelve un array con cada caracter del string como un elemento del array, el operador de propagacion se utiliza para expandir un objeto iterable en elementos individuales, en este caso se expande el string en caracteres individuales, lo que permite obtener una lista con cada caracter del string como un elemento del array.
// O
console.log(Array.from(string)) // [ 'H', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o' ]
// en este caso se utiliza el metodo Array.from() para obtener una lista a partir de un string, lo que devuelve un array con cada caracter del string como un elemento del array, el metodo Array.from() se utiliza para crear un nuevo array a partir de un objeto iterable, en este caso se crea un nuevo array a partir del string, lo que permite obtener una lista con cada caracter del string como un elemento del array.

// si queremos tener un valor especifico
console.log(string[5]) // m
// en este caso se utiliza la notacion de corchetes para obtener un valor especifico de un string, lo que devuelve el caracter en la posicion especificada, en este caso se obtiene el caracter en la posicion 5 del string, lo que devuelve la letra m, ya que la posicion 5 corresponde a la letra m en el string "Hola mundo".




const arrayString = Array.from(string)
console.log(arrayString) // [ 'H', 'o', 'l', 'a', ' ', 'm', 'u', 'n', 'd', 'o' ]
// en este caso se utiliza el metodo Array.from() para obtener una lista a partir de un string, lo que devuelve un array con cada caracter del string como un elemento del array, el metodo Array.from() se utiliza para crear un nuevo array a partir de un objeto iterable, en este caso se crea un nuevo array a partir del string, lo que permite obtener una lista con cada caracter del string como un elemento del array.


const set = new Set([1, 2, 3, 4, 5, "hola", {nombre: "Santiago"}])
const arraySet = Array.from(set)
console.log(arraySet) // [ 1, 2, 3, 4, 5, 'hola', { nombre: 'Santiago' } ]
// en este caso se utiliza el metodo Array.from() para obtener una lista a partir de un Set, lo que devuelve un array con cada elemento del Set como un elemento del array, el metodo Array.from() se utiliza para crear un nuevo array a partir de un objeto iterable, en este caso se crea un nuevo array a partir del Set, lo que permite obtener una lista con cada elemento del Set como un elemento del array.


const keys = arrayNumerosSome1.keys()
console.log(keys) // [Array Iterator] { 0, 1, 2, 3, 4, 5, 6, 7 }
// en este caso se utiliza el metodo .keys() para obtener una lista de las claves de un array, lo que devuelve un objeto iterador con las claves del array, el metodo .keys() se utiliza para obtener un nuevo objeto iterador que contiene las claves de cada elemento del array, en este caso se obtiene un objeto iterador con las claves de cada elemento del arrayNumerosSome1, lo que permite obtener una lista con las claves de cada elemento del array.
// O
console.log([...arrayNumerosSome1.keys()]) // [ 0, 1, 2, 3, 4, 5, 6, 7 ]
// en este caso se utiliza el operador de propagacion para obtener una lista a partir de un objeto iterador, lo que devuelve un array con cada clave del array como un elemento del array, el operador de propagacion se utiliza para expandir un objeto iterable en elementos individuales, en este caso se expande el objeto iterador de las claves del array en claves individuales, lo que permite obtener una lista con cada clave del array como un elemento del array.
// O
console.log(Array.from(arrayNumerosSome1.keys())) // [ 0, 1, 2, 3, 4, 5, 6, 7 ]
// en este caso se utiliza el metodo Array.from() para obtener una lista a partir de un objeto iterador, lo que devuelve un array con cada clave del array como un elemento del array, el metodo Array.from() se utiliza para crear un nuevo array a partir de un objeto iterable, en este caso se crea un nuevo array a partir del objeto iterador de las claves del array, lo que permite obtener una lista con cada clave del array como un elemento del array.



const arrayKeys = Array.from(keys)
console.log(arrayKeys) // [ 0, 1, 2, 3, 4, 5, 6, 7 ]
// en este caso se utiliza el metodo Array.from() para obtener una lista a partir de un objeto iterador, lo que devuelve un array con cada clave del array como un elemento del array, el metodo Array.from() se utiliza para crear un nuevo array a partir de un objeto iterable, en este caso se crea un nuevo array a partir del objeto iterador de las claves del array, lo que permite obtener una lista con cada clave del array como un elemento del array.
