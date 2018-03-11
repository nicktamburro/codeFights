//Given an array of integers, find the pair of adjacent 
//elements that has the largest product and return that product.

function adjacentElementsProduct(inputArray) {
 
let product = -100;
    
    for (i = 0 ; i < inputArray.length; i++){
        
        let currentProduct = inputArray[i] * inputArray[i+1];
        
        if (currentProduct >= product){
            product = currentProduct;
        }   
    }  
    return product;  
}