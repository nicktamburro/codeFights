/*Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking 
the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. 
You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.*/


//TODO This is big and clumsy, and there's a way better solution to this that uses Math.pow, figure that out...


function shapeArea(n) {

let countDown = n;
let count = 0;
    
    if (n == 1){
        count += 1;
    }
    
for (i = 1; i < n; i++){
    count += (countDown-1) * 4;
    countDown--;
    if (countDown == 1){
        count++;
    }
    console.log(countDown);
    
}

return count;
}