let lista = [1, 3, 4, 6, 7, 8, 10];

for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 3) {
        continue;  // si el valor es 3, se salta esa iteracion y continua con la siguiente
    
    console.log(lista[i]);
}

if (lista[i] > 6) {
    break; // si el valor es 6, se detiene completamente el loop
}

}
// recuerda que en el console.log(lista[i]) con los corchetes le estamos diciendo que nos imprima el valor dentro de la posicion, sin corchetes nos imprime las posiciones de la array (lista[i]) (i), si le das la variable "lista" imprime toda la array la cantidad de elementos que tenga, si le das "i" imprime las posiciones de la array, si le das "lista[i]" imprime los valores dentro de la array.


//las estructuras que complican la lectura del codigo son consideradas como malas practicas, sino hay una situacion especifica donde se debe usar un continue o breakm, es mejor evitarlos, ya que pueden hacer que el codigo sea mas dificil de entender y mantener. Es importante escribir codigo claro y legible para que otros desarrolladores puedan entenderlo facilmente.

//el ambito de un bucle es el bloque de codigo que se ejecuta dentro del loop, cualquier variable declarada dentro de ese bloque solo sera accesible dentro de ese bloque, si declaramos una variable dentro de un loop, esa variable solo existira durante la ejecucion del loop y no podra ser accedida fuera de ese loop. Por ejemplo:   
for (let i = 0; i < 5; i++) {
    let mensaje = "El valor de i es: " + i;
    console.log(mensaje);
}
