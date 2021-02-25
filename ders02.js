// FONKSIYONLAR

//**** */ Function Declarion // Statement

/* function square(num) { // Parametre
    return (num * num);
}

square(5) // Arguman */

/* square(5);
console.log(square(5)); */

// console.log(square(3));  () ---> Invoke 

// Function declaration --> HOISTED


//**** */ Function Expression

/* const square = function (num) {
    return (num * num);
} */

// Func name is optional
/* 
console.log(square);
console.log(square(5)); */

// FIRST - CLASS FUNCTIONS

/* const myArr = [6, "Arin", function() {console.log("Array Element");} ]

myArr[2]();

const myObj = {
    age: 5,
    name: "Arin",
    func: function() { console.log("Object Element"); }
};

myObj.func();

console.log(20 + (function() {return 10; })() ) // IIFE */

/* console.log(square);
square(5); */

/* const square = function (num) {
    return (num * num);
} */

// Function Expression is not HOISTED
// Function Expression can be anonymous

// FIRST - CLASS FUNCTIONS DEVAM

/* const addFive = function(num, func) {
    console.log(num + func());
}

addFive(10, function() { return 5;}) */

/* const myFunc = function (num) {
    return function toDouble() {
        console.log(num * 2);
    }
} */

/* myFunc(7)(); */

/* const result = myFunc(7);

result(); */

// IIFE
// Immediately Invocable Function Expression

/* (function() {
    console.log(5 + 12);
})(); */

// console.log(sum);

/* sum();
console.log(sum); */

function square(num1, num2) { 
    return (num1 * num2);
}

console.log(square.length);
