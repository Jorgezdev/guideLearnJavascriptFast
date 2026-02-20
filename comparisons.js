// Los comparadores son operadores que se utilizan para comparar dos valores y devolver un resultado booleano (verdadero o falso) dependiendo de si la comparación es cierta o no. Aquí hay algunos de los comparadores más comunes en JavaScript:


// igualdad 
if (5 == 5) {
    console.log("5 es igual a 5 ");
}

if (5 === 5) {
    console.log("5 es muy igual a 5");
}

let a = 5;
console.log(typeof a); // number
let b = "5";
console.log(typeof b); // string

// == solo compara el valor
// === compara el valor y el tipo de dato

if (a == b ) {
    console.log("a es igual a b");
}

if (a === b) {
    console.log("a es muy igual a b");       
}else {
    console.log("a no es muy igual a b");
 }


 // desigualdad

 let c = 8;
 let f = "8";

 if (c != f) {
    console.log(c + " es diferente a " + f)
 } 


 if (c !== f) {
    console.log(c + " es muy diferente a " + f)
 }

 