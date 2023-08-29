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




