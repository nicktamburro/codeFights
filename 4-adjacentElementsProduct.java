
//cool to remember we can just write the function for things like these, not the whole program
//don't need Main etc.

//SO, it's going to return an int, so we say int instead of function

int adjacentElementsProduct(int[] inputArray) {
	//AND it takes an int in the arguments, actually an array of ints
    int product = inputArray[0] * inputArray[1];
    //here's the product of the first 2, to establish a baseline
    for(int i = 1; i < inputArray.length-1; i++){
    	//loop, remember say int!
    	//one * next one
        int temp = inputArray[i] * inputArray[i+1];
        //if it's greater than product, it's the new prodcut!
        if(temp > product){
            product = temp;
        }
    }
    return product;
}