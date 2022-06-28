function getArrayDim(squareArray) {
  let rows = squareArray.length;

  //Check for empty array
  if ( rows === 0 ){
    return -1;
  }

  let columns = squareArray[0].length;

  //One dim array
  if( columns === 0 ){
    return -1;
  }
  //Check for square aray
  if ( rows !== columns){
    return -1;
  }
  return rows;
}
 
/*
  Iterate through the 2 dim array in a spiral direction
  input array has to be a square array, if not return -1
*/
function unroll(squareArray) {
  let n = getArrayDim(squareArray);
  //Bad input data return -1
  if ( n === -1 ){
    return -1;
  }
  
  // define 4 boundaries of square matrix
  let top = 0;
  let down = n -1;
  let right = n-1;
  let  left = 0;
  let curDir = 0;
  let i = 0;
  let array = [];
  let numElements = 0;
  
  while ( numElements < n * n){
    
    //Move to right
    if ( curDir === 0){
      //row is fixed col increases
      for ( i =left; i<=right; i+=1 ){
        array.push(squareArray[top][i]);
        numElements += 1;
      }
      // move top boundary
      top += 1;
      curDir += 1;
    } else if (curDir === 1) {
      // Moving down, row increases, col is fixed
      for ( i=top; i<=down; i+=1 ){
        array.push(squareArray[i][right]);
        numElements += 1;
      }
      right -= 1;
      curDir += 1;
      
    } else if ( curDir === 2){
      //Moving left, row is fixed, col decreases
      for ( i=right; i>=left; i-=1 ){
        array.push(squareArray[down][i]);
        numElements += 1;
      }
      down -= 1;
      curDir += 1;
      
    } else {
      // Move up, row decreases, col is fixed
      for ( i=down; i>=top; i-=1 ){
        array.push(squareArray[i][left]);
        numElements += 1;
      }
      left += 1;
      curDir += 1;
      curDir = curDir % 4;
    }
   
  }
  return array;
}

module.exports = unroll;
