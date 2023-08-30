/* 

L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

*/

const firstWord = prompt('type a word')
const secondWord = prompt('type another word')

if (firstWord.length > secondWord.length) {
    document.getElementById('print').innerHTML = firstWord + '  ' + secondWord;
} else if (firstWord.length < secondWord.length) {
    document.getElementById('print').innerHTML = secondWord + '  ' + firstWord;
}


/* 

(con while) Snack 2:
L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga.

*/

const array = []
let i = 0;

while (i < 2) {

    const userWord = prompt('type a word')

    i++

    console.log(userWord);

    array.push(userWord);
    
}

if (array[0].length > array[1].length) {

    document.getElementById('print').innerHTML = (array[1] + '  ' + array[0]);

} else if (array[0].length < array[1].length) {

    document.getElementById('print').innerHTML = (array[0] + '  ' + array[1]);

} 





