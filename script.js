function calcolaPrezzo () {
  const km = persefloat ( document. getElementsById ("km"). value) ; //persfloat perche i km possono avere i decimali
  const eta = persint (document.getElementById ("età").value ); // perseIntla età deve essere un numero intero

}

if (NaN(km) || NaN (età) ||km <= 0 ||età <=0) {
    document. getElementById ("risultato") . innerText = "inserisci valori validi";
    return; 
}

