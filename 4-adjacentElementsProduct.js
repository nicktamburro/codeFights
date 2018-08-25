//Given an array of integers, find the pair of adjacent 
//elements that has the largest product and return that product.

function adjacentElementsProduct(inputArray) {
 
//let product = -100;
//NO this is dumb... here:
let product = inputArray[0] * inputArray[1];
    
    for (i = 0 ; i < inputArray.length; i++){
        
        let currentProduct = inputArray[i] * inputArray[i+1];
        
        if (currentProduct >= product){
            product = currentProduct;
        }   
    }  
    return product;  
}

let inputArray1 = [4, 20, 15, 84];
adjacentElementsProduct(inputArray1);

module.exports = adjacentElementsProduct;