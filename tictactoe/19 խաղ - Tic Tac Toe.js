// Board is teh array in which we have all the information about the game
debugger;
let board = [
  ["_", "_", "_"],
  ["_", "_", "_"],
  ["_", "_", "_"],
];

let player = "x"; /* current X or O   */

// the main loop of the game
while (true) {
  // stringified version of our board
  let boardStr =
    board[0].join("   ") +
    "\n" +
    board[1].join("   ") +
    "\n" +
    board[2].join("   ");

  //  gather informatinon from the user

  let row = +prompt(
    "Dear user, please provider the value for the row \n\n" + boardStr
  );

  let column = +prompt(
    "Dear user, please provider the value for the column \n\n" + boardStr
  );

  // check to make sure the move was legal
  if (board[row][column] !== "_") {
    alert("Not a legal move, you lose!");
    break;
  }

  // plave X or O onto the board
  board[row][column] = player;

  // switch players (change players)
  if (player === "x") {
    player = "o";
  } else {
    player = "x";
  }
}
