/* Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.
Dare l’output relativo. */

// chiedo di inserire una parola "x"
const wordUser = [prompt("Inserisci una parola")]
// tramite la funzione controllo se la parola è palindroma
const checkPal = checkPalindrome(wordUser);

console.log(checkPal);

//funzioni utili 
// il programma controlla se la parola è polindroma o no

function checkPalindrome(string) {

    // trova la lunghezza di una stringa
    const len = string.length;

    // passo attraverso meta della stringa
    for (let i = 0; i < len / 2; i++) {

        // controllo se la prima meta della stringa è uguale alla seconda metà
        if (string[i] !== string[len - 1 - i]) {
            return 'non è palindroma';
        }
    }
    return 'è palindroma';
}
