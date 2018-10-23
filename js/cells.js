const board = [
  [null, null, true, null],
  [true, true, true, true],
  [null, true, null, true],
  [null, true, true, true]
];

const checkNeighbors = (x,y) => {
  const topLeft = board[y - 1][x - 1];
  const topNeighbor = board[y - 1][x];
  const topRight = board[y - 1][x + 1];
  const leftNeighbor = board[y][x - 1];
  const rightNeighbor = board[y][x + 1];
  const bottomLeft = board[y + 1][x - 1];
  const below = board[y + 1][x];
  const bottomRight = board[y + 1][x + 1];

  let neighboringBombs = 0;


  if (topLeft) {neighboringBombs++};
  if (topNeighbor) {neighboringBombs++};
  if (topRight) {neighboringBombs++};
  if (leftNeighbor) {neighboringBombs++};
  if (rightNeighbor) {neighboringBombs++};
  if (bottomLeft) {neighboringBombs++};
  if (below) {neighboringBombs++};
  if (bottomRight) {neighboringBombs++};

  return neighboringBombs;
};
// I have to to make a new function to exclude any negative numbers or to exclude any numbers past highest index .length - 1;
// for x it would be if x = 0 dont count anything to its left
// if x .length - 1;
// const checkCorners = (x, y) => {
//   if(x === 0 && y === 0){
//
//   } else if (x === 0 )
// }
const replaceSpotPicked = (x, y) => {
  const numOfBombs = checkNeighbors(x,y);
  board[y][x] = numOfBombs;
}

console.log(board);
