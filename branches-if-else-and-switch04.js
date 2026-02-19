// Control structures help us to give direction to our code, so that it executes in one way or another depending on certain conditions.


// if-else

let saldoCajero = 20000;
let efectivoRetirar = 50000;


    if (efectivoRetirar <= saldoCajero) {
        console.log("puedes sacar dinero");
    } else {
        console.log("No puedes sacar dinero, saldo insuficiente");
    }

// Always add a default as a good practice in a switch statement, to avoid errors in case none of the above conditions are met.


// Clean solution using only a switch

function Average(note) {

    switch (true) {

        case note >= 6:
            console.log("Approved, Good job!");
            break;

        case note >= 5:
            console.log("Approved, could have been better");
            break;

        case note >= 4:
            console.log("Approved, but you need to try harder");
            break;

        case note >= 1:
            console.log("Failed, you need to study more");
            break;

        default:
            console.log("Invalid note");
    }
}

Average(4.6);


/*

🧠 Por qué funciona (clave para entender el desafío)

Cuando haces:

switch(true)


El switch compara cada case como una expresión booleana:

true === (nota >= 5)
true === (nota >= 4)


Entonces se comporta como un evaluador de condiciones.

👉 Es literalmente un “if escondido dentro de switch” — muy usado en retos.


*/ 


/*
⭐ Versión más pro (retorna valor)
function Promedio(nota) {

    switch (true) {

        case nota >= 5:
            return "Aprobado, pudo haber sido mejor";

        case nota >= 4:
            return "Aprobado, pero debes esforzarte más";

        case nota >= 1:
            return "Reprobado, necesitas estudiar más";

        default:
            return "Nota inválida";
    }
}

console.log(Promedio(3.5));

*/


/*

Cuando alguien te diga:

“Resuélvelo con switch aunque sean rangos”

La respuesta mental es:

👉 switch(true)

 */