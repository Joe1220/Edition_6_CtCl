function rotateMatrix(matrix) {
  if (!matrix || matrix.length < 1 || (matrix.length !== matrix[0].length)) {
    return new console.error('false input');
  }
  let result = [];
  let len = matrix.length - 1;
  for (let row = 0; row < matrix.length; row++) {
    let temp = [];
    for (var col = 0; col < matrix.length; col++) {
      let item = matrix[col][row];
      temp.unshift(item);
    }
    result.push(temp);
  }
  return result;
}

console.log(rotateMatrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]))
