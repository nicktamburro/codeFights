boolean almostIncreasingSequence(int[] sequence) {
boolean verdict = true;
int icheck = 0;
int jcheck = 0;
    
    for(int i=0; i<sequence.length - 1; i++){
     
    if(sequence[i] >= sequence[i+1])
            icheck++;
    }
    
    for(int j=0; j<sequence.length - 2; j++){
        if(sequence[j] >= sequence[j+2]){
            jcheck++;
        }
    }
   
  if (icheck + jcheck > 2){
      verdict =  false;
}
    
    return verdict;
}
