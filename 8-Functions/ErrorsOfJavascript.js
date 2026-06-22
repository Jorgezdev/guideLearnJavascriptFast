const miFunction = val => {
    if (typeof val === "number") {
        return val * 2;
    } 
    throw new Error("El valor debe ser un número");
    }

console.log(miFunction(5));// El código anterior define una función miFunction que toma un valor val como argumento. Si el valor es un número, la función devuelve el resultado de multiplicar ese número por 2. Sin embargo, si el valor no es un número, la función lanza un error con el mensaje "El valor debe ser un número".


const numero = 8; 

try { // codigo que puede generar un error
    console.log("esta ejecutandose de manera correcta")
    const doble = miFunction(numero); // Llama a la función miFunction con el valor de numero
    console.log(doble); // Imprime el resultado de la función miFunction
} catch (e) { // codigo que se ejecuta si se genera un error
    console.log(`El valor de e es: ${e.message}`); // Imprime el mensaje de error utilizando console.error(e.message)
    console.error("Error"); // Imprime un mensaje de error utilizando console.error
} finally {
    console.log("Este bloque se ejecuta siempre, independientemente de si se generó un error o no."); // Imprime un mensaje indicando que este bloque se ejecuta siempre
}

// En este ejemplo, se define una variable numero con el valor 8. Luego, se utiliza un bloque try-catch para manejar posibles errores al llamar a la función miFunction con el valor de numero. Si la función se ejecuta correctamente, se imprime un mensaje indicando que se está ejecutando de manera correcta y luego se imprime el resultado de la función miFunction. Si se genera un error (por ejemplo, si numero no fuera un número), el bloque catch captura el error y se imprime su mensaje utilizando console.error(e.message).


// tipos de errores en JavaScript

// SyntaxError: Este error ocurre cuando hay un error de sintaxis en el código, como un paréntesis o una llave faltante, o una palabra clave mal escrita. Por ejemplo:
// console.log("Hola mundo" // SyntaxError: missing ) after argument list

// ReferenceError: Este error ocurre cuando se hace referencia a una variable o función que no ha sido declarada. Por ejemplo:
// console.log(variableNoDeclarada); // ReferenceError: variableNoDeclarada is not defined

// TypeError: Este error ocurre cuando se intenta realizar una operación en un valor de un tipo incorrecto. Por ejemplo:
// const numero = 5;
// numero.toUpperCase(); // TypeError: numero.toUpperCase is not a function

// RangeError: Este error ocurre cuando se intenta usar un número fuera del rango permitido. Por ejemplo:
// const array = new Array(-1); // RangeError: Invalid array length
// EvalError: Este error ocurre cuando se utiliza la función eval() de manera incorrecta. Por ejemplo:
// eval("console.log('Hola mundo'"); // EvalError: Unterminated string constant
// URIError: Este error ocurre cuando se utiliza una función de codificación o decodificación de URI de manera incorrecta. Por ejemplo:
// decodeURIComponent("%"); // URIError: URI malformed

// InternalError: Este error ocurre cuando el motor de JavaScript encuentra un error interno. Por ejemplo, si se produce un desbordamiento de pila debido a una recursión infinita, se lanzará un InternalError. Sin embargo, este tipo de error es raro y generalmente indica un problema en el motor de JavaScript en sí mismo.
