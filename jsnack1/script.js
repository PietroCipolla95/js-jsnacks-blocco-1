/* 

L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.

*/

const numberOne = Number(prompt('type a number'));
const numberTwo = Number(prompt('write another number'));

if (numberOne > numberTwo) {
    document.getElementById('print').innerHTML = numberOne
} else if (numberTwo > numberOne) {
    document.getElementById('print').innerHTML = numberTwo
} 



/* 

Da fare con WHILE tutti I prossimi snacks
Snack 1
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.

*/

let i = 0
const array = []

while (i < 2) {

    const userNumber = Number(prompt('type a number'))
    
    if (isNaN(userNumber)) {

        alert('type a number')
        i--  

    } else {

        array.push(userNumber);
        i++

    } 

}

if (array[0] > array[1]) {

    console.log('Il numero più grande è ' + array[0]);
    document.getElementById('print').innerHTML = ('Il numero più grande è ' + array[0]);
    
} else if (array[0] < array[1]) {

    console.log('Il numero più grande è ' + array[1]);
    document.getElementById('print').innerHTML = ('Il numero più grande è ' + array[1]);

} else {

    console.log('sono lo stesso numero');
    document.getElementById('print').innerHTML = ('sono lo stesso numero');

}





