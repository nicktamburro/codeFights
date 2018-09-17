//better... now only failing [1, 2, 3, 4, 3, 6] (getting 2 = false, should return true)
//and [3, 5, 67, 98, 3] (getting 2 = false, should return true)
//yeah, no I'm shooting myself in the foot still. Well, okay for now. cd 

function almostIncreasingSequence(sequence) {
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
