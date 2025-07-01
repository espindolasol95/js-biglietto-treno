//Prezzo = km × €0.21

//Sconto 20% se < 18 anni

//Sconto 40% se > 65 anni

// chiediamo informazione all 'utente
const km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
const eta = parseInt(prompt("Quanti anni hai?"));


//input 
if (isNaN(km) || isNaN(eta) || km <= 0 || eta <= 0) {
  alert(" Inserisci valori validi per chilometri e età.");
} else{
    
//prezzo iniziale
const prezzoBase = km *0.21;

//calcoliamo lo sconto

let sconto =0;     
//applichiamo un 20% 
if (eta < 18) {
    sconto = 0.20;
}
//applichiamo un 40%
else if (eta > 65){
    sconto = 0.40;
}

//prezzi gia scontati
const prezzoFinale = (prezzoBase * (1 - sconto)).toFixed(2); //il numero(2) dice di lasciare due numeri dopo l'arrotondamento



//PREZZO FINALE
alert (`Il prezzo del biglietto è: €${prezzoFinale}`);

}