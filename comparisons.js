// Comparators are operators used to compare two values and return a Boolean result (true or false) depending on whether the comparison is true or false. Here are some common comparators in Javascript:

// Equality

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

// == just compare the value
// === compares the value and the data type

if (a == b ) {
    console.log("a is equal to b");
}

if (a === b) {
    console.log("a is very equal to b");       
}else {
    console.log("a is not very equal to b");
 }


 // inequality, before putting the exclamation mark to negate equality.

 let c = 8;
 let f = "8";

 if (c != f) {
    console.log(c + " is different from " + f)
 } 


 if (c !== f) {
    console.log(c + " is very different from " + f)
 }

 // Comparisons of greater than and less than...


let x = 10;
let y = 20;

if ( x >= y){
    console.log("x is greater than or equal to y");
}else { console.log("x is less than y");
}

let m = 15;
let n = 10;

if (m < n) {
    console.log("m is less than n");
}else {
    console.log("m is greater than or equal to n");
}


 