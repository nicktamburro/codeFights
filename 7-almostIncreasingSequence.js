function almostIncreasingSequence(sequence) {
let wrong = 0;
    
    for (i = 0 ; i<sequence.length; i++){
        if (sequence[i] >= sequence[i+1]){
            wrong++;
        }
    
        
    }     
       console.log(wrong);
    if (wrong > 1){
        return false;
    }else{
        return true;
    }
 
}