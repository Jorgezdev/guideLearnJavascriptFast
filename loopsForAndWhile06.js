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



// Loops While
// existen dos tipos de loops while: while y do while
// while
let i = 0;  
while (i < 5) {
    console.log(i);
    i++;
}

// do while
let j = 0;
do {
    console.log(j + " este console log imprime do while" );
    j++;
} while (j < 5)



// do while se usa mucho menos que while, pero es importante conocerlo porque se ejecuta al menos una vez, incluso si la condicion es falsa, mientras que while no se ejecuta si la condicion es falsa desde el principio.. prueba cambiando el valor de j a uno mayor que el de la condicion (un numero mayor a >5)
// y te imprimira el console log al menos una vez, aunque la condicion sea falsa desde el principio.
