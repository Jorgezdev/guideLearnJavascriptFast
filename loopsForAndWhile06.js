// Loops For
// inicializacion; condicion ; actualizacion


// terminos generales que cumplen la misma funcion:
/*
i = i + 1
i += 1
i++
*/
/*
for (let i = 0; i < 80; i = i + 8) {
    console.log(i);
}


let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 */

// tipos de for
let lista = [1, 3, 4, 6, 7, 8, 10];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}
// i dentro de corchetes queremos que nos imprima el valor dentro de la posicion, sin corchetes nos imprime las posiciones de la array (lista[i]) (i)

// structure for .... of
for (let valor of lista) {
    console.log(valor);
}   

// structure forEach
lista.forEach(function(valor) {
    console.log(valor);
})

// structure forEach with arrow function
lista.forEach(valor => {
    console.log(valor)
})

// existen estructuras for que sirven para ir evaluando cada uno de los atributos de los objetos: 
// for in
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
}

for (let atributo in persona) {
    console.log(atributo);
    console.log(persona[atributo]);
}
