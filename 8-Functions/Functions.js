

 
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


