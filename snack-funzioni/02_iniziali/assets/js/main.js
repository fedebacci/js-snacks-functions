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





// * QUESTA VERSIONE ACCETTA UN ARRAY CHE COMPRENDE ANCHE NUMERI, UN OGGETTO, UNA STRINGA O UN NUMERO, E RESTITUISCE UN ARRAY DI PRIMI CARATTERI MANTENENDO LO STESSO TIPO
// * TODO: CAPIRE SE PIU APPROPRIATO, PER ACCETTARE OGGETTI ECC., TRASFORMARE SEMPRE L'INPUT IN UN ARRAY PRIMA DI ESEGUIRE QUALSIASI COSA
/**
 * Funzione per trovare il primo carattere di un input o di una lista di input
 * @param {*} list default = ["Giovanni", 1999] - La lista da scorrere per ottenere i primi caratteri
 * @returns {Array<string> | Array<number>} errore = same as input - Lista di primi caratteri di ogni elemento della lista in ingresso
 */
// const findFirstChar = (list = ["Giovanni", 1999]) => {
const findFirstChar = (list = {nome: "Giovanni", anno: 1999}) => {
// * TODO: FARE IN MODO CHE ACCETTI ANCHE QUANTO SOTTO
// const findFirstChar = (list = ["Luca", {nome: "Giovanni", anno: 1999}]) => {

    // console.debug("list", list);

    if (list === null || typeof(list) === "undefined" || typeof(list) === "boolean" || typeof(list) === "symbol") return list;

    if (typeof(list) === "string") return [list[0]];
    if (typeof(list) === "number" || typeof(list) === "bigInt") return [parseInt(list.toString()[0])];

    const outputList = [];

    if (Array.isArray(list)) {
        // console.debug("ARRAY", list);

        // * UTILIZZATO SOTTO CICLO FOR OF (PERCHÈ NON CI SERVE L'INDICE)
        // for (let i = 0; i < list.length; i ++) {
        //     const currentElement = list[i].toString();
        //     // * TODO: DEVO RICONTROLLARE QUI DENTRO (E DENTRO CASISTICA PER OGGETTO) CHE currentElement NON SIA UN ARRAY O UN OGGETTO
        //     // * SE LO E DEVO RICHIAMARE LA FUNZIONE PER IL SINGOLO ELEMENTO
        //     // * SICCOME STO RIPETENDO LE STESSE AZIONI E STO INIZIANDO AD INDENTARE PIU DEL DOVUTO, SERVIREBBE UN'ALTRA FUNZIONE?
        //     // console.debug("currentElement", currentElement);

        //     // * NB: HA PIU SENSO SVOLGERE IL CONENUTO DELL'IF PRIMA DEL PUSH!
        //     // outputList.push(currentElement[0]);
        //     // // console.debug(parseInt(outputList[outputList.length - 1]))
        //     // if (!isNaN(parseInt(outputList[outputList.length - 1]))) {
        //     //     outputList[outputList.length - 1] = parseInt(outputList[outputList.length - 1]);
        //     // };


        //     // if (!isNaN(parseInt(currentElement[0]))) {
        //     //     outputList.push(parseInt(currentElement[0]))
        //     // } else {
        //     //     outputList.push(currentElement[0])
        //     // }
        //     !isNaN(parseInt(currentElement[0])) ? outputList.push(parseInt(currentElement[0])) : outputList.push(currentElement[0]);
        // };

        // * TODO: DEVO RICONTROLLARE QUI DENTRO (E DENTRO CASISTICA PER OGGETTO) CHE currentElement NON SIA UN ARRAY O UN OGGETTO
        // * SE LO E DEVO RICHIAMARE LA FUNZIONE PER IL SINGOLO ELEMENTO
        // * SICCOME STO RIPETENDO LE STESSE AZIONI E STO INIZIANDO AD INDENTARE PIU DEL DOVUTO, SERVIREBBE UN'ALTRA FUNZIONE?
        for (const currentElement of list) {
            // console.debug("currentElement", currentElement);
            const elementString = currentElement.toString()
            !isNaN(parseInt(elementString[0])) ? outputList.push(parseInt(elementString[0])) : outputList.push(elementString[0]);
        };

    } else {
        // console.debug("OGGETTO", list);
        const objProperties = Object.entries(list);
        // console.debug("objProperties", objProperties);
        const propList = [];
        objProperties.forEach((arrProp) => {
            arrProp.forEach((prop) => {
                // console.debug("Prop", prop);
                propList.push(prop);
            })
        });
        // console.debug("propList", propList);
        return findFirstChar(propList);
    }


    return outputList;
};




// Invoca la funzione qui e stampa il risultato in console
console.log("Trovo i primi caratteri per il parametro di default:", findFirstChar());
console.log("Trovo i primi caratteri per l'array che mi è stato passato dalla costante names:", findFirstChar(names));
console.log("Trovo il primo carattere per una stringa (Anna):", findFirstChar("Anna"));
console.log("Trovo il primo numero (2025):", findFirstChar(2025));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]