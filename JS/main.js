function generateUI() {
    //array for the 9 spots on the game board
    const board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    return board;
}

function rednerUI(board) {
    const boardContainer =  document.getElementById("board")
    boardContainer.innerHTML = "";
    
    //generates elements for each tile
board.forEach((tileValue, index) => {
    const tile = document.createElement("button");
    tile.className = "tile";
    tile. textContent = tileValue;

    //Adds event listner for click
    tile.addEventListener("click", () => takeTurn(tile, index));
    
    boardContainer.appendChild(tile);
});

//sets current player
let currentPlayer = "X";
//sets the game board to the original init function
let gameBoard = generateUI();
//checks for active game
let gameStatus = true;