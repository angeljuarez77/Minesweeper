const root = document.getElementById('root');
const board = [
  [false, true, false, false, false, false, false, false, true],
  [true, false, false, false, false, false, false, true, false],
  [false, true, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, true, false, false, false, false, false, false],
  [false, false, false, false, true, false, false, true, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, true, true, true],
  [false, false, true, false, false, false, false, true, false]
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

for (let i = 0; i < board.length; i++) {
  for (var j = 0; j < board[i].length; j++) {
    replaceSpotPicked(j,i)
  };
};

console.log(board);
// const pickRandomSpot = () => {
// return board[Math.floor(Math.random() * board.length - 1) + 1][Math.floor(Math.random() * board[0].length - 1) + 1]
// };


const makeDOMBoard = (x,y) => {

  const domBoard = document.createElement('div');
  domBoard.className = 'gameBoard';
  root.appendChild(domBoard);

  for(let rowCreator = 0; rowCreator < board.length; rowCreator++){
    const newRow = document.createElement('div');
    newRow.className = 'rows';
    domBoard.appendChild(newRow);

    for(let columnCreator = 0; columnCreator < x; columnCreator++){
      const newColumn = document.createElement('div');
      const newP = document.createElement('p');
      newP.className = 'textDisplay';
      newColumn.className = 'columns';
      newColumn.appendChild(newP);
      newRow.appendChild(newColumn);
    }
  }
}
makeDOMBoard(board[0].length,board.length);

const arrayOfParagraphs = document.getElementsByClassName('textDisplay');


const height = board.length;
const width = board[0].length;
const numOfItems = height * width;
for(let i = 0; i < numOfItems; i++){
  arrayOfParagraphs[i].id = `paragraph-number-${i}`;
}
// access the individual value in each of the items. Display into the individual arrayOfParagraphs
// board[0][0] = paragraph-number-0
// board[1][0] = 9
// at every board[x] paragraph number increases by 9

// board[y][x] = paragraph-number - (y * 9) + x;

// c is the number of total items in my domBoard
// a and b are the x and y axis respectively
const assignValues = (a,b,c) => {

    for(let y = 0; y < b; y++){
        for(let x = 0; x < a; x++){
            const numOfParagraph = ((y * 9) + x);
            // arrayOfParagraphs[((y * 9) + x)].innerHTML =
            let paragraph = document.getElementById(`paragraph-number-${numOfParagraph}`);
            paragraph.innerHTML = board[y][x];
        }
    }

}
assignValues(board[0].length,board.length,arrayOfParagraphs.length);
