module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  }

  if (matrix.length === 1) {
    return matrix;
  }

  return matrix.reduce((result, row, rowIndex) => [
    ...result,
    ...rowIndex % 2 === 0 ? row : row.reverse()
  ]);
}
