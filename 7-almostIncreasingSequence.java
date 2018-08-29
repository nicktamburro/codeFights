boolean almostIncreasingSequence(int[] sequence) {
boolean verdict = true;
int icheck = 0;
int jcheck = 0;
    
    //need to make it .length - 1 to avoid Out Of Bounds exception
    for(int i=0; i<sequence.length - 1; i++){
     
    if(sequence[i] >= sequence[i+1])
            icheck++;
    }
    
    //now since we're skipping one in the check, needs to be .length - 2
    //to avoid same exception
    for(int j=0; j<sequence.length - 2; j++){
        if(sequence[j] >= sequence[j+2]){
            jcheck++;
        }
    }

   
  if (icheck + jcheck > 2){
    //needs to be greater than 2, because it can count the same number twice sometimes... like
    //if [10, 1, 2, 3, 4], 10 is greater than 1 (icheck) AND 10 is greater than 2 [jcheck]
      verdict =  false;
}
    
    return verdict;
}
