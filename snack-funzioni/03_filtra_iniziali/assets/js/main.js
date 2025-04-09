/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const searchedChar = "L"

// Dichiara la funzione qui.
// /**
//  * Funzione che filtra un array
//  * @param {string[]} namesList default = names - Array di stringhe da controllare
//  * @param {string} char default = A - Lettera con cui devono iniziare le stringhe
//  * @returns {string[]} stringhe che iniziano con la lettera scelta
// */
/**
 * Funzione che filtra un array
 * @param {Array} namesList default = [] - Lista di elementi da filtrare
 * @param {string | number} searchedInitial default = A - Iniziale per la quale filtrare
 * @returns {string[] | number[]} Array filtrato
*/
function filterByInitials (namesList = [], searchedInitial = "A") {
    const filteredNames = [];
    
    // * UTILIZZATO SOTTO CICLO FOR OF (PERCHÈ NON CI SERVE L'INDICE)
    // for (let i = 0; i < namesList.length; i ++) {
    //     const currentName = namesList[i];
    //     if (currentName[0].toLowerCase() === searchedInitial.toLowerCase()) {
    //         filteredNames.push(currentName);
    //     }
    // }

    // * TESTO SOTTO VERSIONE CHE ACCETTI ANCHE NUMERI
    // for (const currentName of namesList) {
    //     if (currentName[0].toLowerCase() === searchedInitial.toLowerCase()) {
    //         filteredNames.push(currentName);
    //     }
    // }

    searchedInitial = searchedInitial.toString();
    for (const currentName of namesList) {
        const elementString = currentName.toString();
        
        if (elementString[0].toLowerCase() === searchedInitial.toLowerCase()) {
            filteredNames.push(currentName);
        };
    };

    return filteredNames;
};


// Invoca la funzione qui e stampa il risultato in console
console.log("filterByInitials () con valori di default", filterByInitials ());
console.log("filterByInitials (names, searchedChar)",  filterByInitials (names, searchedChar));
console.log("filterByInitials (['Anna', 'Francesco'], 'B')", filterByInitials (['Anna', 'Francesco'], 'B'));
// * TODO modificare per accettare anche altri valori (Come per es 2)
console.log("filterByInitials ([2025, 1999], 1)", filterByInitials ([2025, 1999], 1));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]