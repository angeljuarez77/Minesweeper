const root = document.getElementById('root');

const createBoard = (width, height) => {
  return Array.from({length: height}, ()=> Array.from({length: width}, ()=> false)) 
};

const randomlyPopulate = (board) => {
  const randomY = Math.floor(Math.random() * board.length);
  const randomX = Math.floor(Math.random() * board.length);
  board[randomY][randomX] = true;
};

const bombPlacement = (board, number) => {
  function acceptableNumber(){
    if (number > board.length * board[0].length) {
      return false;
    };

    return true;
  };

  function notValid(){
    alert('THAT IS NOT AN ACCEPTABLE NUMBER OF MINES');
  };

  if(acceptableNumber()){
    for (let i = 0; i < number; i++) {
      randomlyPopulate();
    };
  } else {
    return notValid();
  };
};

const neighborChecks = (board, e) => {
  const yCoordinate = e.target.dataset.y;
  const xCoordinate = e.target.dataset.x;
  let bombNumbers = 0;

  const locations = {
    isValid: (function(squareType){
      if(typeof squareType === 'undefined'){
        return false;
      };

      return true;
    }),
    topLeft: (function(){
      const type = typeof board[y - 1][x - 1];
      if(this.isValid(type)){
        return 1; 
      };

      return 0;
    }),
    topNeighbor: (function(){
      const type = typeof board[y - 1][x];
      if(this.isValid(type)){
        return 1; 
      };

      return 0;
    }),
    topRight: (function(){
      const type = typeof board[y - 1][x + 1];
      if(this.isValid(type)){
        return 1; 
      };

      return 0;
    }),
    leftNeighbor: (function(){
      const type = typeof board[y][x - 1];
      if(this.isValid(type)){
        return 1; 
      };

      return 0;
    }),
    rightNeighbor: (function(){
      const type = typeof board[y][x + 1];
      if(this.isValid(type)){
        return 1; 
      };

      return 0; 
    }),
    bottomLeft: (function(){
      const type = typeof board[y + 1][x - 1];
      if(this.isValid(type)){
        return 1; 
      };

      return 0;
    }),
    bottom: (function(){
      const type = typeof board[y + 1][x];
      if(this.isValid(type)){
        return 1; 
      };

      return 0;
    }),
    bottomRight: (function(){
      const type = typeof board[y + 1][x + 1];
      if(this.isValid(type)){
        return 1; 
      };

      return 0;
    }),
  };

  function count(){
    let key;
    for (key in locations){
      bombNumbers += locations[key];
    };
  };

  return bombNumbers;
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
  for (var y = 0; y < emptyArray.length; y++) {r (var x = 0; x < emptyArray[0].length; x++) {
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