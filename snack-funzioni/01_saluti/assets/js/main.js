/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
/**
 * Funzione per salutare un utente
 * @param {string} name default = Giovanni - Il nome dell'utente da salutare
 * @returns Messaggio di saluto da stampare in console o mostrare come alert
 */
const greetUser = (name = "Giovanni") => `Ciao ${name}`;

// Invoca la funzione qui e stampa il risultato in console
console.log(`Saluto l'utente di default: 
${greetUser()}
`);
console.log(`Saluto l'utente che mi è stato passato dalla costante userName: 
${greetUser(userName)}
`);


//Risultato atteso se si passa 'Mario': // ciao Mario