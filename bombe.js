
// obiettivo ottenere array con 16 numeri unici  
// genera numeri bombe
function generaNumeriBombe(numeroBombe,numeroTotaleCelleDaAggiungere) {
    // genero array vuoto dove inserire numeri generati
const arrayBombe = []


// for (let x = 0; x < numeroBombe; x++) {
    while(arrayBombe.length < numeroBombe){
    // /invoco la funzione per genrare numeri random


    const numeriRandom = generateRandomNum(1, numeroTotaleCelleDaAggiungere)
     if (!arrayBombe.includes(numeriRandom) ) {
        arrayBombe.push(numeriRandom)
     }
    

    
}



console.log(arrayBombe)

    
}


// creo esternamente una funzione per generare numeri random

function generateRandomNum(minNumber = 1, maxNumber) {

    const numRandom = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    return numRandom;
  }



  generaNumeriBombe(16,100)