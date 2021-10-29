/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
Dare l’output relativo. */

// chiedo di inserire una parola "x"
const wordUser = prompt("Inserisci una parola");
//tramite la funzione che mi sono creato confronto la parola dell'utente con quella che ricavo dalla funzione
// se sono uguli è palindroma
if(wordUser === invertOrder(wordUser)){
    console.log("la parola è palindroma");
//altrimenti non lo è
} else {
    console.log("la parola non è palindroma");
}
console.log(invertOrder(wordUser));



//funzioni utili 
function invertOrder(word) {
    return word.split("").reverse().join("");                  /* split scompone la variabile in stringhe, reverse inverte l'ordine delle lettere, join salva la parola con ordine invertito */
}
 
