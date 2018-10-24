const board = [
  [null, true, true, true],
  [null, null, null, true],
  [true, true, null, true],
  [true, true, null, null]
];

const checkNeighbors = (x,y) => {

  let neighboringBombs = 0;
  if (x !== 0 && y !== 0 && x !== board[0].length - 1 && y !== board.length - 1) {
    // center
    let topLeft = board[y - 1][x - 1];
    let topNeighbor = board[y - 1][x];
    let topRight = board[y - 1][x + 1];
    let leftNeighbor = board[y][x - 1];
    let rightNeighbor = board[y][x + 1];
    let bottomLeft = board[y + 1][x - 1];
    let below = board[y + 1][x];
    let bottomRight = board[y + 1][x + 1];

    if (topLeft) {neighboringBombs++};
    if (topNeighbor) {neighboringBombs++};
    if (topRight) {neighboringBombs++};
    if (leftNeighbor) {neighboringBombs++};
    if (rightNeighbor) {neighboringBombs++};
    if (bottomLeft) {neighboringBombs++};
    if (below) {neighboringBombs++};
    if (bottomRight) {neighboringBombs++};

    return neighboringBombs;
  } else if (x === 0 && y !== 0 && y !== board.length - 1) {
    // left side no corner
    let topNeighbor = board[y - 1][x];
    let topRight = board[y - 1][x + 1];
    let rightNeighbor = board[y][x + 1];
    let below = board[y + 1][x];
    let bottomRight = board[y + 1][x + 1];

    if (topNeighbor) {neighboringBombs++};
    if (topRight) {neighboringBombs++};
    if (rightNeighbor) {neighboringBombs++};
    if (below) {neighboringBombs++};
    if (bottomRight) {neighboringBombs++};

    return neighboringBombs;
  } else if (x === board[0].length - 1 && y !== 0 && y !== board.length - 1) {
    // right side square. non corner
    let topLeft = board[y - 1][x - 1];
    let topNeighbor = board[y - 1][x];
    let leftNeighbor = board[y][x - 1];
    let bottomLeft = board[y + 1][x - 1];
    let below = board[y + 1][x];

    if (topLeft) {neighboringBombs++};
    if (topNeighbor) {neighboringBombs++};
    if (leftNeighbor) {neighboringBombs++};
    if (bottomLeft) {neighboringBombs++};
    if (below) {neighboringBombs++};

    return neighboringBombs;
  } else if (x !== board[0].length - 1 && y === 0 && x !== 0) {
    // top side no corner
    let leftNeighbor = board[y][x - 1];
    let rightNeighbor = board[y][x + 1];
    let bottomLeft = board[y + 1][x - 1];
    let below = board[y + 1][x];
    let bottomRight = board[y + 1][x + 1];

    if (leftNeighbor) {neighboringBombs++};
    if (rightNeighbor) {neighboringBombs++};
    if (bottomLeft) {neighboringBombs++};
    if (below) {neighboringBombs++};
    if (bottomRight) {neighboringBombs++};

    return neighboringBombs;
  } else if (y === board.length - 1 && x !== 0 && x !== board[0].length -1) {
    // bottom side no corner
    let topLeft = board[y - 1][x - 1];
    let topNeighbor = board[y - 1][x];
    let topRight = board[y - 1][x + 1];
    let leftNeighbor = board[y][x - 1];
    let rightNeighbor = board[y][x + 1];

    if (topLeft) {neighboringBombs++};
    if (topNeighbor) {neighboringBombs++};
    if (topRight) {neighboringBombs++};
    if (leftNeighbor) {neighboringBombs++};
    if (rightNeighbor) {neighboringBombs++};

    return neighboringBombs;
  } else if (x === 0 && y === 0) {
    // top left corner
    let rightNeighbor = board[y][x + 1];
    let below = board[y + 1][x];
    let bottomRight = board[y + 1][x + 1];

    if (rightNeighbor) {neighboringBombs++};
    if (below) {neighboringBombs++};
    if (bottomRight) {neighboringBombs++};

    return neighboringBombs;
    // debugger;
  } else if (y === board.length - 1 && x === 0) {
    // bottom left corner
    let topNeighbor = board[y - 1][x];
    let topRight = board[y - 1][x + 1];
    let rightNeighbor = board[y][x + 1];

    if (topNeighbor) {neighboringBombs++};
    if (topRight) {neighboringBombs++};
    if (rightNeighbor) {neighboringBombs++};

    return neighboringBombs;
  } else if (x === board[0].length - 1 && y === 0) {
    // top right corner
    let leftNeighbor = board[y][x - 1];
    let bottomLeft = board[y + 1][x - 1];
    let below = board[y + 1][x];

    if (leftNeighbor) {neighboringBombs++};
    if (bottomLeft) {neighboringBombs++};
    if (below) {neighboringBombs++};

    return neighboringBombs;
  } else if (x === board[0].length - 1 && y === board.length - 1) {
    // bottom right corner
    let topLeft = board[y - 1][x - 1];
    let topNeighbor = board[y - 1][x];
    let leftNeighbor = board[y][x - 1];

    if (topLeft) {neighboringBombs++};
    if (topNeighbor) {neighboringBombs++};
    if (leftNeighbor) {neighboringBombs++};

    return neighboringBombs;
  }
};

const replaceSpotPicked = (x, y) => {
  const numOfBombs = checkNeighbors(x,y);
  board[y][x] = numOfBombs;
};
replaceSpotPicked(0,3);
console.log(board);
