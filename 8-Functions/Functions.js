

 
 function saludar (parametro1, parametro2) {
    console.log(parametro1 + " " + parametro2);
 }


  saludar("hola", "mundo") // Hola Mundo



// en este caso se define una funcion llamada saludar que recibe dos parametros, parametro1 y parametro2, y luego se llama a la funcion con los argumentos "hola" y "mundo", lo que imprime "Hola Mundo" en la consola, el primer argumento "hola" se asigna al parametro1 y el segundo argumento "mundo" se asigna al parametro2, lo que permite imprimir "Hola Mundo" en la consola utilizando los parametros de la funcion. 
function saludar(parametro1) {
   // Ahora sí usamos el parámetro y le sumamos otra palabra
   console.log(parametro1 + " Mundo"); 
}

saludar("Hola"); // Imprime: Hola Mundo
saludar("Adiós"); // Imprime: Adiós Mundo


/// 

const nombre = "Jorge";

saludar(nombre)

function saludar(parametroNombre) { 
    //console.log("Hola " + parametroNombre);
    console.log(`Hola ${parametroNombre}`);
}

////

function despedir(nombre) {
   nombre = "jorge"
   console.log(`Adiós ${nombre}`);
}

despedir("Maria") // Adiós Jorge (investigar por qué no se imprime Maria)

////

let persona = { nombre: "exequiel", apellido: "gomez" };

saludarPersona(persona);

console.log(persona); // { nombre: "exequiel", apellido: "gomez" }

function saludarPersona(objetoPersona) {
   objetoPersona.apellido = "rodriguez";
   console.log(`Hola ${objetoPersona.nombre} ${objetoPersona.apellido}`)
}  

saludarPersona(persona) // Hola exequiel rodriguez


///

function imprimeUnNumero(numero = 7) { // parametros por defecto
   console.log(numero);
}

imprimeUnNumero() // Imprime: 7
imprimeUnNumero(10) // Imprime: 10

///////

function iprimir(...parametros) { // parametros rest
   console.log(parametros);
}

iprimir(1, 2, 3, 4, "hola", {id: 5}) // Imprime: [1, 2, 3, 4, "hola", {id: 5}]

///////////

function suma (...numeros) {
   return numeros.reduce((acumulador, numero) => acumulador + numero )
}

 const sumaTotal = suma(1, 2, 3, 4, 5); // sumaTotal es igual a 15
 console.log(sumaTotal); // Imprime: 15

 //////

 let variableGlobal = "Soy una variable global";

   function multiplicar(a = 1, b = 1) {
      console.log(variableGlobal); // Accede a la variable global
      let variable_interna = "adios, adentro de la funcion"; // Variable local a la función
      console.log(variable_interna); // Imprime la variable interna
      return a * b;
   }

   console.log(multiplicar(5, 10)); // Imprime: 50
   console.log(variable_interna); // Error: variable_interna is not defined (no se puede acceder a la variable local fuera de la función)
   // En este ejemplo, la función multiplicar accede a la variable global variableGlobal y también define una variable local variable_interna. La función imprime ambas variables y luego devuelve el producto de a y b. Sin embargo, al intentar acceder a variable_interna fuera de la función, se produce un error porque esa variable solo existe dentro del ámbito de la función.

// si defines variables dentro de una funcion e intentas acceder a ella fuera de la funcion , no te aparecera , pero si creas una variable fuera de una funcion, si puedes llamarla adentro de la funcion.



