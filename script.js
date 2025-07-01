//Prezzo = km × €0.21

//Sconto 20% se < 18 anni

//Sconto 40% se > 65 anni

// chiediamo informazione all 'utente
const km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
const eta = parseInt(prompt("Quanti anni hai?"));


//input 
if (isNaN(km) || isNaN(eta) || km <= 0 || eta <= 0) {
  alert(" Inserisci valori validi per chilometri e età.");
} 
    
//prezzo iniziale
const prezzoBase = km *0.21;

