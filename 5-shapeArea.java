int shapeArea(int n) {
    int countDown = n;
    int count = 0;
    
    if (n == 1){
        count+=1;
    }
    
    
    for(int i=1; i<n; i++){
        
        count+=(countDown - 1)*4;
        countDown--;
            
        if(countDown == 1){
            count+=1;
        }
        
      
}
return count;
}