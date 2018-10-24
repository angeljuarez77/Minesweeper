const board = [
  [false, true, false, false, false, false, false, false, true],
  [true, false, false, false, false, false, false, true, false],
  [false, true, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, true, false, false, false, false, false, false],
  [false, false, false, false, true, false, false, true, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, true, false, false],
  [false, false, true, false, false, false, false, false, false]
];

const checkNeighbors = (x,y) => {
  const isBomb = (x) => typeof x === "boolean" && x;
  let neighboringBombs = 0;
  if (x !== 0 && y !== 0 && x !== board[0].length - 1 && y !== board.length - 1) {
    let topLeft = isBomb(board[y - 1][x - 1]);
    let topNeighbor = isBomb(board[y - 1][x]);
    let topRight = isBomb(board[y - 1][x + 1]);
    let leftNeighbor = isBomb(board[y][x - 1]);
    let rightNeighbor = isBomb(board[y][x + 1]);
    let bottomLeft = isBomb(board[y + 1][x - 1]);
    let below = isBomb(board[y + 1][x]);
    let bottomRight = isBomb(board[y + 1][x + 1]);

    if (topLeft) {neighboringBombs++};
    if (topNeighbor) {neighboringBombs++};
    if (topRight) {neighboringBombs++};
    if (leftNeighbor) {neighboringBombs++};
    if (rightNeighbor) {neighboringBombs++};
    if (bottomLeft) {neighboringBombs++};
    if (below) {neighboringBombs++};
    if (bottomRight) {neighboringBombs++};

    return board[y][x] || neighboringBombs;
  } else if (x === 0 && y !== 0 && y !== board.length - 1) {
    // left side no corner
    let topNeighbor = isBomb(board[y - 1][x]);
    let topRight = isBomb(board[y - 1][x + 1]);
    let rightNeighbor = isBomb(board[y][x + 1]);
    let below = isBomb(board[y + 1][x]);
    let bottomRight = isBomb(board[y + 1][x + 1]);

    if (topNeighbor) {neighboringBombs++};
    if (topRight) {neighboringBombs++};
    if (rightNeighbor) {neighboringBombs++};
    if (below) {neighboringBombs++};
    if (bottomRight) {neighboringBombs++};

    return board[y][x] || neighboringBombs;
  } else if (x === board[0].length - 1 && y !== 0 && y !== board.length - 1) {
    let topLeft = isBomb(board[y - 1][x - 1]);
    let topNeighbor = isBomb(board[y - 1][x]);
    let leftNeighbor = isBomb(board[y][x - 1]);
    let bottomLeft = isBomb(board[y + 1][x - 1]);
    let below = isBomb(board[y + 1][x]);

    if (topLeft) {neighboringBombs++};
    if (topNeighbor) {neighboringBombs++};
    if (leftNeighbor) {neighboringBombs++};
    if (bottomLeft) {neighboringBombs++};
    if (below) {neighboringBombs++};

    return board[y][x] || neighboringBombs;
  } else if (x !== board[0].length - 1 && y === 0 && x !== 0) {
    let leftNeighbor = isBomb(board[y][x - 1]);
    let rightNeighbor = isBomb(board[y][x + 1]);
    let bottomLeft = isBomb(board[y + 1][x - 1]);
    let below = isBomb(board[y + 1][x]);
    let bottomRight = isBomb(board[y + 1][x + 1]);

    if (leftNeighbor) {neighboringBombs++};
    if (rightNeighbor) {neighboringBombs++};
    if (bottomLeft) {neighboringBombs++};
    if (below) {neighboringBombs++};
    if (bottomRight) {neighboringBombs++};

    return board[y][x] || neighboringBombs;
  } else if (y === board.length - 1 && x !== 0 && x !== board[0].length -1) {
    let topLeft = isBomb(board[y - 1][x - 1]);
    let topNeighbor = isBomb(board[y - 1][x]);
    let topRight = isBomb(board[y - 1][x + 1]);
    let leftNeighbor = isBomb(board[y][x - 1]);
    let rightNeighbor = isBomb(board[y][x + 1]);

    if (topLeft) {neighboringBombs++};
    if (topNeighbor) {neighboringBombs++};
    if (topRight) {neighboringBombs++};
    if (leftNeighbor) {neighboringBombs++};
    if (rightNeighbor) {neighboringBombs++};

    return board[y][x] || neighboringBombs;
  } else if (x === 0 && y === 0) {
    let rightNeighbor = isBomb(board[y][x + 1]);
    let below = isBomb(board[y + 1][x]);
    let bottomRight = isBomb(board[y + 1][x + 1]);

    if (rightNeighbor) {neighboringBombs++};
    if (below) {neighboringBombs++};
    if (bottomRight) {neighboringBombs++};

    return board[y][x] || neighboringBombs;
  } else if (y === board.length - 1 && x === 0) {
    let topNeighbor = isBomb(board[y - 1][x]);
    let topRight = isBomb(board[y - 1][x + 1]);
    let rightNeighbor = isBomb(board[y][x + 1]);

    if (topNeighbor) {neighboringBombs++};
    if (topRight) {neighboringBombs++};
    if (rightNeighbor) {neighboringBombs++};

    return board[y][x] || neighboringBombs;
  } else if (x === board[0].length - 1 && y === 0) {
    let leftNeighbor = isBomb(board[y][x - 1]);
    let bottomLeft = isBomb(board[y + 1][x - 1]);
    let below = isBomb(board[y + 1][x]);

    if (leftNeighbor) {neighboringBombs++};
    if (bottomLeft) {neighboringBombs++};
    if (below) {neighboringBombs++};

    return board[y][x] || neighboringBombs;
  } else if (x === board[0].length - 1 && y === board.length - 1) {
    let topLeft = isBomb(board[y - 1][x - 1]);
    let topNeighbor = isBomb(board[y - 1][x]);
    let leftNeighbor = isBomb(board[y][x - 1]);

    if (topLeft) {neighboringBombs++};
    if (topNeighbor) {neighboringBombs++};
    if (leftNeighbor) {neighboringBombs++};

    return board[y][x] || neighboringBombs
  }
};

const replaceSpotPicked = (x, y) => {
  const numOfBombs = checkNeighbors(x,y);
  board[y][x] = numOfBombs;
};

// I have to figure out how to iterate through each index in my array and call this function above with those 'x and y coordinates'
for (let i = 0; i < board.length; i++) {
  for (var j = 0; j < board[i].length; j++) {
    debugger;
    replaceSpotPicked(j,i)
  }
}
console.log(board);
// Or how to generate a set number of bombs randomly on a board
// const pickRandomSpot = () => {
// return board[Math.floor(Math.random() * board.length - 1) + 1][Math.floor(Math.random() * board[0].length - 1) + 1]
// };
//
// // Find out how to make the placebomb function work
// const placeBomb = () => {
//   let things = pickRandomSpot();
//   if (things == null) {
//     things = true;
//   }
// };
// console.log(board);
// make board
// const makeBoard = () => {
//
// }
