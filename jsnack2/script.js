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