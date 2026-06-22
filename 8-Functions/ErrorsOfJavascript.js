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
    console.log("Error: " + e.message); // Imprime el mensaje de error utilizando console.error(e.message)
}

// En este ejemplo, se define una variable numero con el valor 8. Luego, se utiliza un bloque try-catch para manejar posibles errores al llamar a la función miFunction con el valor de numero. Si la función se ejecuta correctamente, se imprime un mensaje indicando que se está ejecutando de manera correcta y luego se imprime el resultado de la función miFunction. Si se genera un error (por ejemplo, si numero no fuera un número), el bloque catch captura el error y se imprime su mensaje utilizando console.error(e.message).
