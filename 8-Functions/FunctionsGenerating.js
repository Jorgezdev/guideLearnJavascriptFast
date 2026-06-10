
// funciones generadoras

// las funciones generadoras son un tipo especial de función que pueden ser pausadas y reanudadas, lo que permite generar una secuencia de valores en lugar de devolver un solo valor. Se definen utilizando la sintaxis function* y utilizan la palabra clave yield para generar valores.

function* generadorDeNumeros()  {   
    yield 1; // pausa la función y devuelve el valor 1
    yield 2; // pausa la función y devuelve el valor 2
    yield 3;    // pausa la función y devuelve el valor 3
}

const generador = generadorDeNumeros(); // crea un objeto generador

console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
console.log(generador.next());
// cada vez que se llama al método next() del generador, la función se reanuda desde donde se pausó y devuelve el siguiente valor generado por yield. En este caso, la salida será:
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }
// el método next() devuelve un objeto con dos propiedades: value, que contiene el valor generado por yield, y done, que indica si la función ha terminado de generar valores (true) o si aún hay más valores por generar (false). En este caso, después de generar los tres valores, el método next() devuelve { value: undefined, done: true }, lo que indica que la función ha terminado de generar valores.

// otro ejemplo de función generadora que genera una secuencia de ids únicos:

function* generadorDeIds() {
    let id = 0;
    while (true) { // ciclo infinito para generar ids indefinidamente
        id++;
        yield id; // pausa la función y devuelve el siguiente id
        if (id >= 10) { // condición para detener la generación de ids después de 10
            return id; // devuelve el último id generado y marca la función como terminada           
        }
    }
}

const generador = generadorDeIds();
console.log(generador.next().value); // { value: 1, done: false } 
console.log(generador.next().value); // { value: 2, done: false }
console.log(generador.next().value);  // { value: 3, done: false }
console.log(generador.next().value); // { value: 4, done: false }
console.log(generador.next().value);  // { value: 5, done: false }
console.log(generador.next().value);  // { value: 6, done: false }
console.log(generador.next().value);  // { value: 7, done: false }
console.log(generador.next().value);  // { value: 8, done: false }
console.log(generador.next().value);  // { value: 9, done: false }
console.log(generador.next().value);  // { value: 10, done: true }
// en este ejemplo, la función generadora generadorDeIds genera una secuencia de ids únicos incrementando un contador id cada vez que se llama a yield. El ciclo while(true) permite generar ids indefinidamente, pero la función se detiene después de generar 10 ids gracias a la condición if (id >= 10). Cuando se llama al método next() del generador, se obtiene el siguiente id generado hasta que se alcanza el límite de 10, momento en el cual el método next() devuelve { value: 10, done: true }, indicando que la función ha terminado de generar valores.

// .value se utiliza para acceder al valor generado por yield en el objeto devuelto por el método next() del generador. En este caso, cada llamada a generador.next().value devuelve el siguiente id generado por la función generadora hasta que se alcanza el límite de 10, momento en el cual devuelve 10 y marca la función como terminada con done: true.
// puede servir para realizar test unitarios, para generar secuencias de datos, para implementar iteradores personalizados, para manejar flujos de datos asíncronos, entre otras aplicaciones. Las funciones generadoras son una herramienta poderosa en JavaScript que permite crear código más eficiente y fácil de mantener en situaciones donde se necesita generar secuencias de valores o manejar flujos de datos complejos.

