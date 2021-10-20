

// prima versione

const btnSubmit = document.getElementById("btn_start_game")
const btnLevel = document.getElementById("levelup")
const gameContainer = document.getElementById("boxgame")


// in base alla difficoltà cambia il gioco e questo accade una volta premuto il bottone vai

btnSubmit.addEventListener("click", function () {
    const levelValue = parseInt(btnLevel.value)
    const totalCells = numerocelle(levelValue) 
    square(totalCells)
    

})

function numerocelle(levelValue) {

    let result 

    if(levelValue === 1){
        result = 100
    }

    else if(levelValue === 2){
        result = 81
    }

    else if(levelValue===3){
        result = 49
    }
    return result
    
}

// function numerocelle(levelValue) {
//     let result;
  
//     switch (parseInt(levelValue)) {
//       case 1:
//         result = 100;
//         break;
//       case 2:
//         result = 81;
//         break;
//       case 3:
//         result = 49;
//         break;
//     }
  
//     return result;
//   }
  

function square(cellsNumber) {
    gameContainer.innerHTML = "";

    const perRowCells = Math.sqrt(cellsNumber);
    
    const cellSize = 100 / perRowCells;

    for (let x = 0; x < cellsNumber; x++) {
        const elemento = cellsNumber[x];

        const quadrati = document.createElement("div")
        quadrati.classList.add("cell-box")
        quadrati.style.width = cellSize + "%";
        quadrati.style.height = cellSize + "%";
        gameContainer.append(quadrati)
        const numeroVariabile = x + 1
        quadrati.innerHTML += `<p class="mb-0">${numeroVariabile}</p>`
        quadrati.addEventListener("click",function() {
          this.classList.toggle("active")
            
        })
    }
    
}