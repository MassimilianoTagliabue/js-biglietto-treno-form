//dati
const chilometriInput = document.getElementById("chilometri");
const anniInput = document.getElementById("anni");
const butInput = document.getElementById("conferma");
const formElem = document.getElementById("form");
const nomeInput = document.getElementById("nome");

//card
const nomeCard = document.getElementById("nome-card");
const prezzoCard = document.getElementById("prezzo-card");
const numeroTrenoCard = document.getElementById("numero-treno-card");
const carrozzaCard = document.getElementById("carrozza-card");



//esecuzione logica

const numeroTrenoRandom = Math.floor(Math.random() * 1000000 + 1) ;


const numeroCarrozzaRandom = Math.floor(Math.random() * 10 + 1) ;



formElem.addEventListener("submit", function (event) {

    
    
    
    event.preventDefault();

    const chilometriElem = parseInt(chilometriInput.value.trim());
    const anniElem = parseInt(anniInput.value.trim());

    console.log(chilometriElem);
    console.log(anniElem);



     const prezzoBiglietto = chilometriElem * 0.21;


     const sconto20 = prezzoBiglietto / 100 * 20;
     const sconto65 = prezzoBiglietto / 100 * 40;

     let prezzoTotale;
     let messaggio;
    
    if (isNaN(anniElem) || isNaN(chilometriElem)){
        alert("devi inserire un numero")
        
    }
    else{
    if ( anniElem <= 18){
        prezzoTotale= prezzoBiglietto - sconto20;
        prezzoTotale = prezzoTotale.toFixed(2);
        messaggio = `il prezzo del biglietto è ${prezzoTotale}`
        
    
    }else if (anniElem >= 65){
        prezzoTotale= prezzoBiglietto - sconto65;
        prezzoTotale = prezzoTotale.toFixed(2);
        messaggio = `il prezzo del biglietto è ${prezzoTotale}`
    
    }else {
        prezzoTotale = prezzoBiglietto;
        prezzoTotale = prezzoTotale.toFixed(2);
        messaggio = `il prezzo del biglietto è ${prezzoTotale}`
    
    }
    
    console.log(messaggio);
    
    }



    nomeCard.innerHTML = nomeInput.value.trim();
    prezzoCard.innerHTML = `${prezzoTotale}£`;
    numeroTrenoCard.innerHTML = `${numeroTrenoRandom}`;
    carrozzaCard.innerHTML = `${numeroCarrozzaRandom}`;


})






