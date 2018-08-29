function matrixElementsSum(matrix) {
  let price = 0;
  let hauntedIndex = [];
  
  //okay we need nested loops
  for (let i = 0; i<matrix.length; i++){
    //this will loop through arrays,there are 3
    for (let j=0; j<matrix[i].length; j++){
      //this should loop through the 3 arrays, remember the matrix[i]
      if(matrix[i][j] == 0){
        //if it's zero, we want to lose the whole index
        hauntedIndex.push(j);
      }
      else if(hauntedIndex.indexOf(j) === -1){
          //indexOf === -1 if it DOESN'T SHOW UP in the search,
          //and now we can add up what's left
        price+=matrix[i][j];
      }
    }
  }

  return price;



}