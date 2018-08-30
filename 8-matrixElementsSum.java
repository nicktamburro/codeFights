int matrixElementsSum(int[][] matrix) {
    
    int price = 0;
    
    //the java version loops in reverse, inside first, then outside...
    
    for (int j = 0; j < matrix[0].length; j++)
        //so we get rid of the index first
        for (int i = 0; i < matrix.length; i++) {
            if (matrix[i][j] > 0) 
                price +=matrix[i][j];
            //the break is the secret here
            else break;
        }
    return price;
}
