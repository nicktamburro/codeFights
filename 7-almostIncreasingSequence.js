//better... now only failing [1, 2, 3, 4, 3, 6] (getting 2 = false, should return true)
//and [3, 5, 67, 98, 3] (getting 2 = false, should return true)
//yeah, no I'm shooting myself in the foot still. Well, okay for now. 

function almostIncreasingSequence(sequence) {
    let wrong = 0;
    
    //so loop through the array...
    for(i=0;i<sequence.length; i++){
        //if something to the right is less than or = something to the right, wrong++
        if(sequence[i] <= sequence[i-1])
            wrong++;
       
       //now we just expand the reach, but if these 2 things are true, it fails... 
        if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]){
            wrong+=2;
            return false;
  
        }
    }
    
    console.log(wrong);
    if(wrong > 1){
        return false;
    }else if (wrong <= 1){
        return true;
    }
    
    
    
}



/*function almostIncreasingSequence(sequence) {
let wrong = 0;
    
    for (i = 0 ; i<sequence.length; i++){
        if (sequence[i] >= sequence[i+1]){
            wrong++;
        }else{
            if (sequence[i]>=sequence[i+2]){
                wrong++;
            }
        }
    
        
    }     
       console.log(wrong);
    if (wrong > 1){
        return false;
    }else{
        return true;
    }
 
}
*/