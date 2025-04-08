/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
const greetUser = (name) => `Ciao ${name}`;

// Invoca la funzione qui e stampa il risultato in console
console.log(greetUser(userName));
// alert(greetUser(userName));


//Risultato atteso se si passa 'Mario': // ciao Mario