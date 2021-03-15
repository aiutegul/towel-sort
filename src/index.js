
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) 
    return [];
  else if(matrix.length == 0) 
    return [];
  else if(matrix.length == 1)
    return matrix[0].sort();
  else {
    let sorted = [];
    for(let i = 0; i < matrix.length; i++) {
      if (i % 2 == 0) {
        matrix[i].sort(function(a, b) { return a - b; });        
      }
      else {
        matrix[i].sort(function(a, b) { return b - a; });
      }
      sorted = sorted.concat(matrix[i]);
    }
    return sorted;
  }
  
}
