// seconda versione

const btnSubmit = document.getElementById("btn_start_game")
const btnLevel = document.getElementById("levelup")
const gameContainer = document.getElementById("boxgame")

const numeroBombe = 16
// creo un avent listener per il click del tasto play
let bombe

let numeroTotaleCelleDaAggiungere

btnSubmit.addEventListener("click", function() {
    // come prima cosa creo una costante con dentro la value della select ( dopo di che vado a creare una
    //  funzione dove in base alla selct ci saranno un tot di quadrati cosa da fare con un if o anche un switch
    const livelliDifficolta = btnLevel.value
    // creo una costante con il valore di tale funzione
    
    numeroTotaleCelleDaAggiungere = numerocelle(livelliDifficolta)
     
    bombe = generaNumeriBombe(numeroBombe,numeroTotaleCelleDaAggiungere)
    
    
    console.log
     
    gameContainer.innerHTML = "";
    const numeroColonne = Math.sqrt(numeroTotaleCelleDaAggiungere)
    console.log(numeroColonne)
    
    //  in base al numero di celle creo un determinato numero di div
    for (let x = 0; x < numeroTotaleCelleDaAggiungere; x++) {
        // const element = numeroTotaleCelleDaAggiungere[x];
        // creo una cella con un create element e dopo di che gli assegno le classe
        const cella = document.createElement("div")
        cella.classList.add("cel-box-"+ Math.round(numeroColonne))
        gameContainer.append(cella)
        cella.innerHTML = x + 1
        cella.addEventListener("click", cellonclick) 
       
    }
    
    console.log(livelliDifficolta)
})

// aprò una funzione per modellare a modo mio il numero delle celle
function numerocelle(livelliDifficolta) {
    let risultato

    if (livelliDifficolta === "easy") {
        risultato = 100  
    }

    else if (livelliDifficolta === "medium"){
        risultato=81
    }
    else(
        risultato=49
    )

    return risultato
    
}





// in base al alla variabile numerototale di celle io andrò a creare un tot di quadrati
function cellonclick(event) {
    console.log(event.target.innerText)
    let cellclick = parseInt(event.target.innerText)
    if (bombe.includes(cellclick)) {
        this.style.backgroundColor= "red"
        alert("hai perso")
        gameContainer.innerHTML = `<h1 class="mb-0 endgamestyle">Hai Perso </h1> `
        
        
    }
    this.classList.toggle("active")



}
    
  


