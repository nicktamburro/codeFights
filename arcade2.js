function centuryFromYear(year) {
    if (year > 0 && year < 101){
        return 1;
    }else{
        return (Math.ceil(year / 100));
    }
    
}

