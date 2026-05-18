// trabajando con fechas
const fecha = new Date()
console.log(fecha) // 2024-06-17T18:00:00.000Z
// en este caso se crea un nuevo objeto Date, lo que devuelve la fecha y hora actual, el constructor de Date se utiliza para crear un nuevo objeto Date, en este caso se crea un nuevo objeto Date sin argumentos, lo que devuelve la fecha y hora actual.  

// tambien se puede crear un nuevo objeto Date a partir de una fecha especifica, utilizando el constructor de Date con argumentos, como por ejemplo, el año, el mes, el dia, la hora, los minutos, los segundos, etc.
const fechaEspecifica = new Date(2020, 0, 1)
console.log(fechaEspecifica) // 2020-01-01T00:00:00.000Z
// en este caso se crea un nuevo objeto Date a partir de una fecha especifica, lo que devuelve la fecha especifica, el constructor de Date se utiliza para crear un nuevo objeto Date a partir de una fecha especifica, en este caso se crea un nuevo objeto Date a partir del año 2020, el mes 0 (enero) y el dia 1, lo que devuelve la fecha especifica del 1 de enero de 2020.
// los meses se cuentan desde 0 (enero) hasta 11 (diciembre), por lo que el mes 0 corresponde a enero, el mes 1 corresponde a febrero, el mes 2 corresponde a marzo, etc., lo que significa que si queremos crear un nuevo objeto Date a partir de una fecha especifica, debemos tener en cuenta que los meses se cuentan desde 0 hasta 11, lo que puede ser confuso si no se tiene en cuenta.

const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 1920)
console.log(fecha2) // 1987-11-20T01:23:52.192Z
// en este caso se crea un nuevo objeto Date a partir de una fecha especifica, lo que devuelve la fecha especifica, el constructor de Date se utiliza para crear un nuevo objeto Date a partir de una fecha especifica, en este caso se crea un nuevo objeto Date a partir del año 1987, el mes 10 (noviembre), el dia 20, la hora 1, los minutos 23, los segundos 52 y los milisegundos 1920, lo que devuelve la fecha especifica del 20 de noviembre de 1987 a las 1:23:52.192.

const fecha3 = new Date(-1000000000000)
console.log(fecha3) // 1938-04-24T22:13:20.000Z
// en este caso se crea un nuevo objeto Date a partir de una fecha especifica, lo que devuelve la fecha especifica, el constructor de Date se utiliza para crear un nuevo objeto Date a partir de una fecha especifica, en este caso se crea un nuevo objeto Date a partir del numero -1000000000000, lo que devuelve la fecha especifica del 24 de abril de 1938 a las 22:13:20.000. 
// el constructor de Date se puede utilizar para crear un nuevo objeto Date a partir de una fecha especifica, utilizando el numero de milisegundos desde el 1 de enero de 1970, lo que permite crear un nuevo objeto Date a partir de una fecha especifica utilizando el numero de milisegundos desde el 1 de enero de 1970, lo que puede ser util para trabajar con fechas en formato timestamp.

const fecha4 = new Date("October 13, 2019 11:13:00")
console.log(fecha4) // 2019-10-13T11:13:00.000Z 
// en este caso se crea un nuevo objeto Date a partir de una fecha especifica, lo que devuelve la fecha especifica, en este caso se crea un nuevo objeto Date a partir de la cadena de texto "October 13, 2019 11:13:00", lo que devuelve la fecha especifica del 13 de octubre de 2019 a las 11:13:00.000 en formato string.


console.log(fecha > fechaEspecifica) // true
// en este caso se compara la fecha actual con la fecha especifica, lo que devuelve true si la fecha actual es mayor que la fecha especifica y false si la fecha actual es menor que la fecha especifica, en este caso se compara la fecha actual con la fecha especifica del 1 de enero de 2020, lo que devuelve true ya que la fecha actual es mayor que la fecha especifica.

console.log(fecha2 === fecha3) // false  y No se pueden comparar fecha2 y fecha3 utilizando el operador de igualdad estricta (===) ya que ambos objetos Date son diferentes, aunque tengan la misma fecha y hora, lo que devuelve false ya que ambos objetos Date son diferentes, aunque tengan la misma fecha y hora.

console.log(fecha2.getTime() === fecha3.getTime()) // true, esta es la forma correcta de comparar dos objetos Date, utilizando el metodo .getTime() para obtener el numero de milisegundos desde el 1 de enero de 1970 para cada objeto Date, lo que devuelve true si ambos objetos Date tienen la misma fecha y hora y false si ambos objetos Date tienen fechas y horas diferentes, en este caso se compara la fecha especifica del 20 de noviembre de 1987 a las 1:23:52.192 con la fecha especifica del 24 de abril de 1938 a las 22:13:20.000, lo que devuelve true ya que ambas fechas tienen el mismo numero de milisegundos desde el 1 de enero de 1970.


console.log(fecha2.getDate()) // 20 el metodo .getDate() se utiliza para obtener el dia del mes de un objeto Date, lo que devuelve el dia del mes de un objeto Date, en este caso se obtiene el dia del mes de la fecha especifica del 20 de noviembre de 1987 a las 1:23:52.192, lo que devuelve 20 ya que el dia del mes de esa fecha es 20.


console.log(fecha3.getMonth()) // 3 el metodo .getMonth() se utiliza para obtener el mes de un objeto Date, lo que devuelve el mes de un objeto Date, en este caso se obtiene el mes de la fecha especifica del 24 de abril de 1938 a las 22:13:20.000, lo que devuelve 3 ya que el mes de esa fecha es abril (recordemos que los meses se cuentan desde 0 hasta 11, por lo que el mes 3 corresponde a abril).

console.log(fecha4.getFullYear()) // 2019 el metodo .getFullYear() se utiliza para obtener el año de un objeto Date, lo que devuelve el año de un objeto Date, en este caso se obtiene el año de la fecha especifica del 13 de octubre de 2019 a las 11:13:00.000, lo que devuelve 2019 ya que el año de esa fecha es 2019.

console.log(fecha) // 2024-06-17T18:00:00.000Z

// .toLocaleDateString() para obtener la fecha en formato local
console.log(fecha.toLocaleDateString()) // 17/6/2024
// en este caso se utiliza el metodo .toLocaleDateString() para obtener la fecha en formato local, lo que devuelve la fecha en formato local, el metodo .toLocaleDateString() se utiliza para obtener una cadena de texto con la fecha en formato local, en este caso se obtiene la fecha actual en formato local, lo que devuelve "17/6/2024" ya que esa es la fecha actual en formato local.  


// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
