function makeArrayConsecutive2(statues) {

    let count = 0;

    //THIS is a thing I just need to memorize... 
    //_____.sort(function(a,b){return a - b})
    //which tells it HOW we want it to sort for us... 
    let sorted = statues.sort(function(a, b){return a - b});
    //console.log(sorted);
    //.sort(function(a,b){return a - b});
    if(sorted.length <= 1){
        return 0;
    }
    else{
    for(i = 0; i<sorted.length - 1; i++){
        count += (sorted[i+1] - sorted[i]) - 1;
      //console.log(count);
    }
    } 
   
    return count;
  
}