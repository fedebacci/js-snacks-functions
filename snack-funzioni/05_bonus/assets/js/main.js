/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

// * NB: essendo la costante name deprecata la sostituisco con userName similmente al primo esercizio
// const name = 'Mario';
const userName = 'Mario';


// Dichiara la funzione qui.
/**
 * Funzione per salutare un utente
 * @param {string} name default = nuovo utente - Il nome dell'utente da salutare
 * @returns Messaggio di saluto da stampare in console o mostrare come alert
 */
const greetUser = (name = "nuovo utente") => {
    const currentHour = new Date().getHours();

    // * DEBUG
    // const currentHour = 3;
    // const currentHour = 16;
    // const currentHour = 19;
    // console.debug(currentHour);
    // console.debug("13 <= currentHour && currentHour < 17", 13 <= currentHour && currentHour < 17);
    // console.debug("17 <= currentHour && currentHour <= 23", 17 <= currentHour && currentHour <= 23);

    // * CORREZIONE SOTTO. LA META DELLE CONDIZIONI NON SERVONO SE PARTO DA BUONASERA E CONTROLLO SOLO I VALORI MINORI
    // let greetingsMessage = `Buongiorno ${name}`;
    // if (13 <= currentHour && currentHour < 17) {
    //     greetingsMessage = `Buon pomeriggio ${name}`;
    // } else if (17 <= currentHour && currentHour <= 23) {
    //     greetingsMessage = `Buonasera ${name}`;
    // };
    // return greetingsMessage;
    
    if (currentHour <= 13) {
        return `Buongiorno ${name}`;
    };
    if (currentHour <= 17) {
        return `Buon pomeriggio ${name}`;
    };
    return `Buonasera ${name}`;
};




// Invoca la funzione qui e stampa il risultato in console
console.log(`Saluto l'utente di default: 
${greetUser()}
`);
console.log(`Saluto l'utente che mi è stato passato dalla costante userName: 
${greetUser(userName)}
`);



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.