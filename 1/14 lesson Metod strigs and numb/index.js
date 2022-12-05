'use strict'

const str = 'test';

console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit'));


const logg = 'Hello world yes';
console.log(logg.slice(6, 11));
console.log(logg.slice(6));
console.log(logg.slice(-5, -1));

console.log(logg.substring(6, 11));
console.log(logg.substr(6, 8));


const num = 12.2;
console.log(Math.round(num));

const test = 12.2;
console.log(parseInt(test));
console.log(parseFloat(test));