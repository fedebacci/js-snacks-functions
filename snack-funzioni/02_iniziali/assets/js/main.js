/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
// * VERSIONE BASE
// * QUESTA VERSIONE ACCETTA UN ARRAY CHE COMPRENDE ANCHE NUMERI, MA CONVERTE TUTTO IN STRINGA
/**
 * Funzione per trovare il primo carattere di ogni elemento di una lista
 * @param {Array} list default = ["Alice", 1999] - La lista da scorrere per ottenere i primi caratteri
 * @returns {Array<string>} errore = [] - Lista di stringhe di primi caratteri di ogni elemento della lista in ingresso
 */
// const findFirstChar = (list = ["Alice", 1999]) => {
//     const outputList = [];
//     for (let i = 0; i < list.length; i ++) {
//         const currentElement = list[i].toString();
//         outputList.push(currentElement[0]);
//     }
//     return outputList;
// };





// * QUESTA VERSIONE ACCETTA UN ARRAY CHE COMPRENDE ANCHE NUMERI, OPPURE UNA STRINGA O UN NUMERO, E RESTITUISCE UN ARRAY DI PRIMI CARATTERI MANTENENDO LO STESSO TIPO
// * TODO: Includere anche oggetti (restituire prime lettere delle chiavi di ogni proprieta associate a prime lettere del valore delle stesse)
/**
 * Funzione per trovare il primo carattere di un input o di una lista di input
 * @param {Array | string | number} list default = ["Alice", 1999] - La lista da scorrere per ottenere i primi caratteri
 * @returns {Array} errore = [] - Lista di primi caratteri di ogni elemento della lista in ingresso
 */
// const findFirstChar = (list = {nome: "alice", anno: 1999}) => {
const findFirstChar = (list = ["Alice", 1999]) => {

    if (list === null || typeof(list) === "undefined" || typeof(list) === "boolean" || typeof(list) === "symbol") return list;

    if (typeof(list) === "string") return [list[0]];
    if (typeof(list) === "number" || typeof(list) === "bigInt") return [parseInt(list.toString()[0])];

    const outputList = [];

    if (Array.isArray(list)) {
        for (let i = 0; i < list.length; i ++) {
            const currentElement = list[i].toString();
            outputList.push(currentElement[0]);
            // console.debug(parseInt(outputList[outputList.length - 1]))
            if (!isNaN(parseInt(outputList[outputList.length - 1]))) {
                outputList[outputList.length - 1] = parseInt(outputList[outputList.length - 1]);
            };
        };
    } else {
        console.log("OGGETTO");
    }


    return outputList;
};




// Invoca la funzione qui e stampa il risultato in console
console.log("Trovo i primi caratteri per il parametro di default:", findFirstChar());
console.log("Trovo i primi caratteri per l'array che mi è stato passato dalla costante names:", findFirstChar(names));
console.log("Trovo il primo carattere per una stringa (Anna):", findFirstChar("Anna"));
console.log("Trovo il primo numero (2025):", findFirstChar(2025));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]