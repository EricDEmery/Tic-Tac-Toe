# Tic Tac Toe #

## About ##

In this project we are instructed to use JavaScript to create a Tic Tac Toe game.

## Questions and Notes ##

    What Method to use to generate board with JS
    How to apply specific win conditions
    How to trigger win conditions
    Method for data

### Assumptions ###

    Tic tac toe is a two player game
    The game will end when all spaces are full or a win condition is met
    if no win condition is met the game ends in a tie
    Symbols X and O will be used for the game
    Users take turns selecting one empty space at a time
    Each user has his/her own symbol assigned.

## Procedural Code ##

**BEGIN**

    Game board renders upon opening.
    There are 9 board tiles.

              |   | 
           -----------
              |   | 
           -----------
              |   |  

    (Symbols are just placeholders, board is empty on start)

    There are 2 players
    There are two symbols X and O
    Each player selects one empty tile per turn

**INIT**

Turns

    Player 1 will select the first tile
    Once a tile is chosen by a player their turn ends
    The next player then selects an empty tile and so on
    After 3rd turn game will start checking for win conditions

Win conditions

    Game is one when one player gets 3 symbols in a row.
    Game can be ended in 2 different ways a WIN or a TIE
    The game ends in a TIE if all tiles are selected and neother player got 3 in a row

        Example of a TIE:

             X | 0 | X
           -----------
             X | 0 | X
           -----------
             0 | X | 0

    The game is won if a player gets 3 of their symbols in a row
    8 possible outcomes result in a WIN

                            -----------
        3 Ways Horizontally -----------
                            -----------

                          |   |   |
        3 ways Vertically |   |   |
                          |   |   |


                                 /   \
        2 Ways Diagonally       /     \
                               /       \

