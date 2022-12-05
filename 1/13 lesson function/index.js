'use strict'

let num = 10;

function showFirstMessage(text) {
    console.log(text);
    console.log(num);
}

showFirstMessage('Hello World');
console.log(num);



function calc(a, b) {
    return (a + b);
}

console.log(calc(3, 4));
console.log(calc(9, 4));
console.log(calc(6, 4));

function ret() {
    let num = 50;
    ///



    return num;
}

const anotherNum = ret();
console.log(anotherNum);



const logger = function() {
    console.log('Hello');
};

logger();



const calc = (a, b) => a + b;

const calc = (a, b) => { return a + b};

const calc = (a, b) => {
    console.log('1');
    return a + b;
};

console.log(calc);