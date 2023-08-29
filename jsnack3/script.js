/* 

Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.

*/

const numberOne = Number(prompt('type a number'));
const numberTwo = Number(prompt('type a number'));
const numberThree = Number(prompt('type a number'));
const numberFour = Number(prompt('type a number'));
const numberFive = Number(prompt('type a number'));
const numberSix = Number(prompt('type a number'));
const numberSeven = Number(prompt('type a number'));
const numberEight = Number(prompt('type a number'));
const numberNine = Number(prompt('type a number'));
const numberTen = Number(prompt('type a number'));

document.getElementById('print').innerHTML = 'Total number is: ' + (numberOne + numberTwo + numberThree + numberFour + numberFive + numberSix + numberSeven + numberEight + numberNine + numberTen);