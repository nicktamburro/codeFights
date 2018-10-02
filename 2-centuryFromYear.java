int centuryFromYear(int year) {
   if (year % 100 == 0){
      return year / 100;
   }
    else{
       return year / 100 + 1;
    }
    

}

int centuryFromYear2(int year){
    if(year % 100 == 0){
        return year / 100;
    }else{
        return year / 100 + 1;
    }
}