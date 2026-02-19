// Control structures help us to give direction to our code, so that it executes in one way or another depending on certain conditions.


// if-else

let balanceCashier = 20000;
let cashWithdraw = 50000;


    if (cashWithdraw <= balanceCashier) {
        console.log("You can withdraw money");
    } else {
        console.log("You cannot withdraw money, insufficient funds");
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

🧠 Why it works (key to understanding the challenge)

When you do:

switch(true)


The switch statement compare eash case as a Boolean expression:

true === (nota >= 5)
true === (nota >= 4)


Then it behaves like a condition evaluator.

👉 It´s literally an "if hidden inside a switch" - very commonly used in challenges.


*/ 


/*
⭐ Version more pro (returns value)
function Average(note) {

    switch (true) {

        case note >= 5:
            return "Approved, could have been better";

        case note >= 4:
            return "Approved, but you need to try harder";

        case note >= 1:
            return "Failed, you need to study more";

        default:
            return "Invalid note";
    }
}

console.log(Average(3.5));

*/


/*

When someone tells you:

“Solve it with a switch statement, even if they are ranges”

the mental answer is: 

👉 switch(true)

 */