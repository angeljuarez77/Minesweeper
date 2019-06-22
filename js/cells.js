const root = document.getElementById('root');
const createBoard = (width, height) => {
  return Array.from({length: height}, ()=> Array.from({length: width}, ()=> false)) 
};
const testBoard = createBoard(12, 10);
console.log(testBoard);
const board = [
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false]
];


const randomlyPopulate = () => {
  const randomY = Math.floor(Math.random() * board.length);
  const randomX = Math.floor(Math.random() * board.length);
  board[randomY][randomX] = true;
};
for(let i = 0; i < 10; i++){
  randomlyPopulate();
};


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

const makeDOMBoard = (x,y) => {

  const domBoard = document.createElement('div');
  domBoard.id = 'gameBoard';
  root.appendChild(domBoard);

  for(let rowCreator = 0; rowCreator < board.length; rowCreator++){
    const newRow = document.createElement('div');
    newRow.className = 'rows';
    domBoard.appendChild(newRow);

    for(let columnCreator = 0; columnCreator < x; columnCreator++){
      const newColumn = document.createElement('div');
      const newP = document.createElement('p');

      const button = document.createElement('button');
      button.dataset.x = `${columnCreator}`;
      button.dataset.y = `${rowCreator}`
      newColumn.appendChild(button);

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

const assignValuesToBoard = (a,b,c) => {
  for(let y = 0; y < b; y++){
      for(let x = 0; x < a; x++){
          const numOfParagraph = ((y * 9) + x);
          // arrayOfParagraphs[((y * 9) + x)].innerHTML =
          let paragraph = document.getElementById(`paragraph-number-${numOfParagraph}`);
          paragraph.innerHTML = board[y][x];
      }
  }
}

const buttons = document.getElementsByTagName('button');

const giveDataValues = () => {
  for(let i = 0; i < arrayOfParagraphs.length; i++){
    arrayOfParagraphs[i].dataset.x = `${i}`
    arrayOfParagraphs[i].dataset.y = `${i}`
  }
}
giveDataValues()

const domBoard = document.getElementById('gameBoard');
const revealTile = e => {
  const y = e.target.dataset.y;
  const x = e.target.dataset.x;
  const clicked = board[parseInt(y)][parseInt(x)];
  // console.log(e.target.nextSibling);
  e.target.nextSibling.innerHTML = clicked;
  e.target.style.display = 'none';
}
domBoard.addEventListener('click', revealTile);


const emptyArray = Array.from({length: 9}, ()=> Array.from({length: 9}, ()=> false));

const trackGame = (e) => {
  const yAxis = e.target.dataset.y;
  const xAxis = e.target.dataset.x;

  const jsClicked = board[parseInt(yAxis)][parseInt(xAxis)];
  emptyArray[parseInt(yAxis)][parseInt(xAxis)] = jsClicked;
};
domBoard.addEventListener('click', trackGame)

const gameStateCheck = () => {
  for (var y = 0; y < emptyArray.length; y++) {
    for (var x = 0; x < emptyArray[0].length; x++) {
    if (emptyArray[y][x] === true) {
      return true
    }
    }
  }
}
const resetBoard = () => {
  if (gameStateCheck()) {
    alert('YOU DONE MESSED UP A-ARON')
    document.location.reload()
  }
}
domBoard.addEventListener('click', resetBoard);

const countMines = () => {
  let mineCount = 0;
  for(let i = 0; i < board.length; i++){
    for(let j = 0; j < board[0].length; j++){
      if(board[i][j] === true){
        mineCount++
      }
    }
  }
  return mineCount;
}

const countBlocksLeft = () => {
  let blocksLeft = 0;
  for(let i = 0; i < emptyArray.length; i++){
    for(let j = 0; j < emptyArray[0].length; j++){
      if(emptyArray[i][j] === false){
        blocksLeft++
      }
    }
  }
  return blocksLeft
}

const didTheyWin = () => {
  let blocksLeft = countBlocksLeft();
  const minesTotal = countMines();

  if (blocksLeft === minesTotal) {
    alert('YOU WON MENG');
    document.location.reload();
  }
}

domBoard.addEventListener('click', countBlocksLeft);
domBoard.addEventListener('click', didTheyWin);
