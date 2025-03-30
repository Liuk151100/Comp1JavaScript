/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
 let datatypeBoolean = true; //Questo datatype è di tipo Boolean e può avere solo due valori (true - false)
 let datatypeNumber = 12; //Questo datatype è di tipo Int e può contenere valori con e senza decimali 
 let datatypeBigInt = 1000000000000000; //Questo datatype è di tipo BigInt e serve a contenere valori interi molto grandi
 let datatypeString = "String" //Questo datatype è di tipo String e può contenere solo valori testuali

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

let oggetto = { proprieta1: "proprieta1", proprieta2: "proprieta2" } //Gli oggetti in Javascript sono dei "contenitori" con al 
// loro interno una serie di proprietà (chiave-valore). Gli oggetti a loro volta possono essere inseriti all'interno di un array
// e sono delimitati da delle parentesi graffe.


/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1 = 12
let numero2 = 20
let somma = numero1 + numero2
console.log(somma)


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12


/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Luca"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let risultatoDifferenza = x - 4
console.log(risultatoDifferenza)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john"
let name2 = "John"
console.log(name1==name2)
name1=name1.toLowerCase()
name2=name2.toLowerCase()
console.log(name1==name2)