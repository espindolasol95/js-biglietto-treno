function calcolaPrezzo () {
  const km = persefloat ( document. getElementsById ("km"). value) ; //persfloat perche i km possono avere i decimali
  const eta = persint (document.getElementById ("età").value ); // perseIntla età deve essere un numero intero

}

if (isNaN(km) || isNaN(eta) || km <= 0 || eta <= 0) {
    document.getElementById("risultato").innerText = "Inserisci valori validi.";
    
  }

const prezzoBase = km * 0.21;
let sconto =0;

if (età < 18) {
   sconto = 0.20;
                                      
}
else if (età > 65) {
    sconto = 0.40;

}