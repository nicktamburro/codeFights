int makeArrayConsecutive2(int[] statues) {

    Arrays.sort(statues);
    int count = 0;
   
    for(int i = 0; i<statues.length - 1; i++){
        count+= (statues[i+1] - statues[i]) - 1;
    }
    return count;
}c 