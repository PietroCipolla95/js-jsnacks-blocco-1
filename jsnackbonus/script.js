/* 

Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.

*/


const oddList = []
let i = 0;

while (i < 6) {
    
    const number = Number(prompt('type a number'))

    i++

    if (number % 2 == 1) {

        oddList.push(number)
        console.log(oddList);
       
    }

}








