// Generate the game board
function generateUI() {
    // Create an array representing the 9 spots on the game board
    const board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
    return board; // Returns the board
}

function takeTurn(tile, index) {
    // Check if the tile is available and the game is active
    if (gameBoard[index] === "-" && gameStatus) {
        // Update the game board with the current player's symbol
        gameBoard[index] = currentPlayer;
        tile.textContent = currentPlayer;
        tile.disabled = true; // Disables the tile button

        // Check for a win or tie condition
        if (checkWinner(currentPlayer)) {
            displayWinner(currentPlayer); // Display the winner message
            gameStatus = false; // Set the game status to inactive
        } else if (checkTie()) {
            displayTie(); // Display the tie message
            gameStatus = false; // Set the game status to inactive
        } else {
            // Switch to the next player's turn
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

// Renders the game board
function renderUI(board) {
    const boardContainer = document.getElementById("board");
    boardContainer.innerHTML = "-";

    // Generate elements for each tile on the board
    board.forEach((tileValue, index) => {
        const tile = document.createElement("button");
        tile.className = "btn btn-outline-primary tile";
        tile.textContent = tileValue; // adds players symbol to tile

        // Add event listener for player turn
        tile.addEventListener("click", () => takeTurn(tile, index));

        boardContainer.appendChild(tile); // Append the tile to the board container
    });
}

// Declare variables for the current player, game board, and game status
let currentPlayer = "X";
let gameBoard = generateUI(); // Generate the initial game board
let gameStatus = true; // Set the game status to active

// Check if a player has won
function checkWinner(player) {
    // Define the winning combinations on the game board
    const winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Checks for win condition
    for (let combo of winCondition) {
        const [a, b, c] = combo;
        if (
            gameBoard[a] === player &&
            gameBoard[b] === player &&
            gameBoard[c] === player
        ) {
            return true; // met wincondition
        }
    }

    return false; // no winCondition found
}

// Check if the game is a tie
function checkTie() {
    // Check if there are any empty spots left on the game board
    return !gameBoard.includes("-");
}

// Display the winner message
function displayWinner(player) {
    const message = `Player ${player} wins!`;
    alert(message);
}

// Display the tie message
function displayTie() {
    const message = "It's a draw!";
    alert(message);
}

// Render the initial game board on the UI
renderUI(gameBoard);