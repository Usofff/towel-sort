
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined){
      return [];
  }
  let arr = [];
    matrix.forEach((element, i) => {
      if(i%2!=0){
        element.reverse();
      }
    });
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          arr.push(matrix[i][j]);
          
      }
      
    }
    // matrix.forEach(element => {
    //   arr.push(element);
    // });
    return arr;
}
