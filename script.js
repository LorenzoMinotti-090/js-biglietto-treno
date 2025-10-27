/*Raccolta dati

i km da percorrere (km)
l’età del passeggero (eta)
*/

/*Esecuzione logica

Prezzo base = km × 0.21 €
Se l’età è < 18 → sconto 20%
Se l’età è > 65 → sconto 40%
*/

/* Output 

Il prezzo finale viene mostrato con due decimali.
Viene stampato sia in un alert che in console.log
*/



// --- RACCOLTA DATI ---


const km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
const eta = parseInt(prompt("Quanti anni ha il passeggero?"));


// --- ESECUZIONE LOGICA ---


const prezzoKm = 0.21;
let prezzoTotale = km * prezzoKm;

if (eta < 18) {
  prezzoTotale *= 0.8;
  
} 

else if (eta > 65) {
  prezzoTotale *= 0.6;
}


// --- OUTPUT ---


const prezzoFinale = prezzoTotale.toFixed(2);

console.log(`Il prezzo totale del biglietto è: € ${prezzoFinale}`);
alert(`Il prezzo totale del biglietto è: € ${prezzoFinale}`);