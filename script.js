// fuznione per generare un numero random
function randomNumber() {
    return Math.floor(Math.random() * 100 + 1);
}

// creo un array vuoto e con un ciclo for creo un  numero e lo pusho al suo interno
let listaPc = [];
for (let i = 0; i < 5; i++) {
    let x = randomNumber();
    listaPc.push(x)
}

// stampo la lista dei numeri random in pagina
document.getElementById("lista").innerHTML = listaPc;



// dopo 3 secondi la lista visualizzata in pagina scompare
setTimeout(function () {
    document.getElementById("lista").innerHTML = "";
}, 3000)



let listaUtente = [];
let listaNumeriUguali = [];
let punteggio = 0;

// solamente 3.5 secondi dopo chiedo i numeri all'utente e volta volta controllo se sono presenti tra i numeri casuali,in tal caso fai cosee
setTimeout(function () {

    for (let i = 0; i < 5; i++) {
        let x = parseInt(prompt("inserisci un numero"))
        listaUtente.push(x)
        if (listaPc.includes(x)) {
            listaNumeriUguali.push(x)
            punteggio++
        }
    }
    document.getElementById("lista").innerHTML = "Hai azzeccato " + punteggio + " numeri: " + listaNumeriUguali;

}, 3500)














