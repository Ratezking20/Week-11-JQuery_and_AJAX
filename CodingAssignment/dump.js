
const gameBoard = document.querySelector("#board")
const isPlayerTurnArea = document.querySelector("#is-player-turn-area")
let player1;
const winningCombos = [
    [0, 1, 2] // top row
    [3, 4, 5] // middle row
    [6, 7, 8] // bottom row
    [0, 3, 6] // left column
    [1, 4, 7] // middle column
    [2, 5, 8] // right column
    [0, 4, 8] // diagonal left-to-right
    [2, 4, 6] // diagonal right-to-left
]

// create the gameboard
function createGameBoard(){
    const emptyTiles = " ".repeat(9).split(""); // this will give me an array of 9 empty strings
    // for each of these empty strings, loop over them and insert them into the gameboard
    const tileGrid = emptyTiles.map((t) => `<button class="#tile"></button>`).join("");
    gameBoard.innerHTML = tileGrid;
    player1 = "X";
   isPlayerTurnArea.textContent = `${player1}'s turn`;
   gameBoard.addEventListener("click", handleGameBoardClick)
   const allTiles = gameBoard.querySelectorAll(".tile");
   allTiles.forEach(t => {
    t.addEventListener("mouseenter", handleMouseEnter)
    t.addEventListener("mouseleave", handleMouseLeave)
   });
   gameBoard.removeAttribute("inert")
}

createGameBoard();
 

function updateTurn(){
    player1 = player1 === "X" ? "O" : "X";
    isPlayerTurnArea.textContent =  `${player1}'s turn`;
 }

function reset() {
    let seconds = 3;
    const timer = setInterval(() => {
        isPlayerTurnArea.textContent =  `Restarting in ${seconds}_`;
        seconds--;
        if(seconds < 0){
            clearInterval(timer);
            createGameBoard();
        }
     } , 1000);
}


function showCongats(){
    isPlayerTurnArea.textContent =  `${player1}'s Wins`;
    gameBoard.removeEventListener("click", handleGameBoardClick)
    gameBoard.setAttribute("inert" , true)
    setTimeout(reset(), 1000)
}

function checkScore(){
    const allTiles = [...document.querySelectorAll(".tile")];
    const tileValues = allTiles.map((t) => t.dataset.value)
    const isWinner = winningCombos.some((combo) => {
        const[a,b,c] = combo;
        return (
            tileValues[a] && 
            tileValues[a] === tileValues[b] && 
            tileValues[a] === [c]
        );
    });
    if(isWinner) {
        return showCongats();
    }
    updateTurn()
}

function handleGameBoardClick(e){
    const valueExists = e.target.dataset.value;
    if(!valueExists){
        e.target.dataset.value = player1;
        document.documentElement.style.setProperty(

            "--hue",
            player1 === "X" ? 10 : 200
        );
        checkScore();
    }
}

function handleMouseEnter(e){
    const valueExists = e.target.dataset.value;
    if(!valueExists){
        e.target.dataset.hover = player1;
        document.documentElement.style.setProperty(

            "--hue",
            player1 === "X" ? 10 : 200
        );
    }    
}

function handleMouseLeave(e){
    
        e.target.dataset.hover = "";
        
}    










<script>
const gameBoard = document.getElementById("board")
let isPlayerTurnArea = document.getElementById("is-player-turn-area")
let turn;
const winningCombos = [ 
    [0, 1, 2] // top row
    [3, 4, 5] // middle row
    [6, 7, 8] // bottom row
    [0, 3, 6] // left column
    [1, 4, 7] // middle column
    [2, 5, 8] // right column
    [0, 4, 8] // diagonal left-to-right
    [2, 4, 6] // diagonal right-to-left
]

function createButton() {
    const newElement = document.createElement("button");
    newElement.appendChild(document.createTextNode("Click Me!"));
    const page = document.getElementById("btn");
    page.appendChild(newElement);
  
    console.log(newElement);
  }
 createButton();

// create the gameboard
function createGameBoard(){
    const emptyTiles = " ".repeat(9).split(""); // this will give me an array of 9 empty strings
    // for each of these empty strings, loop over them and insert them into the gameboard
    const tileGrid = emptyTiles
    .map((t) => `<button class="tile"></button>`)
    .join("");
    console.log(emptyTiles)
    document.getElementById("board").innerHTML = tileGrid;
    turn = "X";
    isPlayerTurnArea.textContent = `${turn}'s turn`;
   gameBoard.addEventListener("click", handleGameBoardClick);
   const allTiles = gameBoard.getElementById("board");
   allTiles.forEach(t => {
    t.addEventListener("mouseenter", handleMouseEnter)
    t.addEventListener("mouseleave", handleMouseLeave)
   });
   gameBoard.removeAttribute("inert")
}
 createGameBoard();


// created a function adds a button to be displayed in the html page



function updateTurn(){
    turn = turn === "X" ? "O" : "X";
    isPlayerTurnArea.textContent =  `${turn}'s turn`;
    document.documentElement.style.setProperty("--hue", turn === "X" ? 10 : 200)
    isPlayerTurnArea = isPlayerTurnArea.textContent
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


function showCongats(){
    isPlayerTurnArea.textContent =  `${player1}'s Wins`;
    gameBoard.removeEventListener("click", handleGameBoardClick)
    gameBoard.setAttribute("inert" , true)
    setTimeout(reset(), 1000)
}

function checkScore(){
    const allTiles = [...document.getElementsByClassName("tile")];
    const tileValues = allTiles.map((t) => t.dataset.value)
    const isWinner = winningCombos.some((combo) => {
        const[a,b,c] = combo;
        return (
            tileValues[a] && 
            tileValues[a] === tileValues[b] && 
            tileValues[a] === [c]
        );
    });
    if(isWinner) {
        return showCongats();
    }
    updateTurn()
}

function handleGameBoardClick(e){
    const valueExists = e.target.dataset.value;
    if(!valueExists){
        e.target.dataset.value = turn;
        document.documentElement.style.setProperty(
            "--hue",
            turn === "X" ? 10 : 200
        );
        checkScore();
    }
}

function handleMouseEnter(e){
    const valueExists = e.target.dataset.value;
    if(!valueExists){
        e.target.dataset.hover = turn;
        document.documentElement.style.setProperty(
            "--hue",
            turn === "X" ? 10 : 200
        );
    }    
}

function handleMouseLeave(e){
    
        e.target.dataset.hover = "";
        
}    


    </script> 