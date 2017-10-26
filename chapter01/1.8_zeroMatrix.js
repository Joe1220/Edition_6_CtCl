var zeroMatrix = matrix => {
  if (!matrix) {
    throw new Error('invalid matrix');
  }
  if (matrix.length === 0) {
    return matrix;
  }

  let row = new Array(matrix.length);
  let col = new Array(matrix[0].length);
  
  for (let i = 0; i < row.length; i++) {
    for (let j = 0; j < col.length; j++) {
      if (matrix[i][j] === 0) {
        row[i] = true;
        col[j] = true;
      }
    }
  }

  for (let i = 0; i < row.length; i++) {
    for (let j = 0; j < col.length; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}



console.log(zeroMatrix([
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
]))
