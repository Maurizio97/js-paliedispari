/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

// l'utente sceglie pari o dispari
const evenOrOdd = prompt("pari o dispari?");
//creo una variabile per capire se l'utente ha scelto pari o dispari
let choiseUser;
//do un valore a "pari" o "dispari"
    //se è pari è vero
if(evenOrOdd === "pari"){
    choiseUser = true;
    //se è dispari è falso
} else if(evenOrOdd === "dispari"){
    choiseUser = false;
}
// l'utente inserisce un numero da 1 a 5
const numUser = parseInt(prompt("scegli un numero da 1 a 5"));
// genero un numero random da 1 a 5
let numCpu = genNumbRandom(1, 5);
// sommo i numeri
let sum = numUser + numCpu;
//se la scelta dell'utente è uguale alla funzione numEven ha vinto
if(choiseUser === numEven(sum)){
    console.log("hai vinto");
    //altrimenti ha perso
} else {
    console.log("hai perso");

}



// funzioni utili

// funzione generatrice di numeri random
function genNumbRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

// funzione per stabilire se un numero è pari
function numEven(numF){
    if(numF % 2 === 0){
        return even = true;
    } else {
        return even = false;
    }
}



//console log per un riscontro in pagina
console.log("l'utente ha scelto: (se è true ha scelto pari se è false ha scelto dispari)", choiseUser);
console.log("numero utente", numUser);
console.log("numero cpu",numCpu );
console.log("la somma è:", sum);
