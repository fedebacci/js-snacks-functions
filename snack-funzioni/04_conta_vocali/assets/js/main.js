/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
/**
 * Funzione che conta le vocali in una stringa
 * @param {string} phrase default = Ciao a tutti - stringa in cui contare le vocali
 * @returns {number} numero di vocali
*/
function countVowels(phrase = 'Ciao a tutti') {
    phrase = phrase.toLowerCase();
    let vowelsNumber = 0;
    for (let i = 0; i < phrase.length; i ++) {
        const currentLetter = phrase[i];
        currentLetter === "a" || currentLetter === "e" || currentLetter === "i" || currentLetter === "o" || currentLetter === "u" ? vowelsNumber ++ : vowelsNumber;
    }

    return vowelsNumber;
};

// Invoca la funzione qui e stampa il risultato in console
console.log("countVowels() con valori di default", countVowels());
console.log("countVowels('Altra frase da testare')", countVowels('Altra frase da testare'));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)






/**
 * Funzione che verifica se un singolo carattere è una vocale
 * @param {string} char default = A - singolo carattere
 * @returns {boolean}
*/
function isVowel(char = 'A') {
    char = char.toLowerCase();
    return char === "a" || char === "e" || char === "i" || char === "o" || char === "u";
};
console.log("isVowel() con valori di default", isVowel());
console.log("isVowel('E')", isVowel('E'));
console.log("isVowel('B')", isVowel('B'));






/**
 * Funzione che mette in maiuscolo tutte le vocali della frase
 * @param {string} char default = Ciao a tutti - frase da modificare
 * @returns {string}
*/
function toUCVowels(phrase = 'Ciao a tutti') {
    let finalPhrase = "";
    for (let i = 0; i < phrase.length; i ++) {
        const currentLetter = phrase[i];
        currentLetter === "a" || currentLetter === "e" || currentLetter === "i" || currentLetter === "o" || currentLetter === "u" ? finalPhrase += currentLetter.toUpperCase() : finalPhrase += currentLetter;
    }

    return finalPhrase;
};
console.log("toUCVowels() con valori di default", toUCVowels());
console.log("toUCVowels('Altra frase da testare')", toUCVowels('Altra frase da testare'));





/**
 * Funzione che estrae le vocali da una stringa
 * @param {string} phrase default = Ciao a tutti - stringa in cui contare le vocali
 * @returns {Array<string>} Array di vocali contenute nella stringa
*/
function extractVowels(phrase = 'Ciao a tutti') {
    phrase = phrase.toLowerCase();
    let extractedVowels = [];
    for (let i = 0; i < phrase.length; i ++) {
        const currentLetter = phrase[i];
        currentLetter === "a" || currentLetter === "e" || currentLetter === "i" || currentLetter === "o" || currentLetter === "u" ? extractedVowels.push(currentLetter) : extractedVowels;
    }

    return extractedVowels;
};
console.log("extractVowels() con valori di default", extractVowels());
console.log("extractVowels('Altra frase da testare')", extractVowels('Altra frase da testare'));