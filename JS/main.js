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
    ],

    winConditions: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [6, 4, 2],
        [8, 4, 0]
    ]
}
