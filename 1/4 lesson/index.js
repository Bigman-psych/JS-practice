'use strict';

// alert('hello');

// const result = confirm('are you here?');
// console.log(result);


// const answer = +prompt('вам есть 18?', '18');
// console.log(answer + 5);

const answers = [];
answers[0] = prompt('как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

document.write(answers);
console.log(typeof(answers));
console.log(typeof(null));