const gameBored = document.getElementById("game-area");
const isPlayerTurnArea = document.getElementById("is-player-turn-area")
let player1;

const winningCombos = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8] ,// bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal left-to-right
    [2, 4, 6] // diagonal right-to-left
]
createGameBoard();

 function createGameBoard() {
    const emptyTiles =  " ".repeat(9).split("");
    const tileGrid = emptyTiles
    .map((t) => `<button class="tile"></button>`)
    .join("");
    gameBored.innerHTML = tileGrid
    player1 = "X";
    isPlayerTurnArea.textContent = `${player1}'s turn`;
    gameBored.addEventListener("click", handleGameBoardClick);
    const allTiles = document.getElementById("game-area");
    gameBored.removeAttribute("inert")
  }
  
  
  function updateTurn(){
    player1 = player1 === "X" ? "O" : "X";
    isPlayerTurnArea.textContent =  `${player1}'s turn`;
 console.log("updateTurn")
 }

 
  function reset() {
    let seconds = 3;
    const timer = setInterval(() => {
        isPlayerTurnArea.textContent =  `Restarting in ${seconds}`;
        seconds--;
        if(seconds < 0){
            clearInterval(timer);
            createGameBoard();
        }
     } , 1000);
}

function showCongrats(){
    isPlayerTurnArea.textContent =  `${player1} Wins`;
    gameBored.removeEventListener("click", handleGameBoardClick)
    gameBored.setAttribute("inert" , true)
    setTimeout(reset(), 1000)
}

function checkScore(){
    const allTiles = [...document.getElementsByClassName("tile")];
    const tileValues = allTiles.map((t) => t.dataset.value) 
    console.log(tileValues)
    const isWinner = winningCombos.some((combo) => {
        const[a,b,c] = combo;
        return (
            tileValues[a] && 
            tileValues[a] === tileValues[b] && 
            tileValues[a] === tileValues[c]
        );
    });
    console.log(isWinner)
    if(isWinner) {
        return showCongrats();
    }
    updateTurn();
}


function handleGameBoardClick(e){
    const valueExists = e.target.dataset.value;
    if(!valueExists){
        e.target.dataset.value = player1;

        document.documentElement.style.setProperty(
            "--hue",
            player1 === "X" ? 10 : 200)
            checkScore();
            
    } 
}






