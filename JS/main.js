const app = document.getElementById("app")
const reset = document.createElement("button")
        reset.innerText = "Reset"
const start = document.createElement("button")
        start.innerText = "Start Game"

let gameState = {

    gameActive: "true",
    playerTurn: "X",
    turnCounter: 0,
    winner:"",
    gameBoard: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]    
    ]
}
