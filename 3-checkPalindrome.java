boolean checkPalindrome(String inputString) {
	//remember in Java we have to declare what the function returns... boolean
	//AND have to declare what the arguments/parameters will be..... String

//loop through the characters in the string
   for (int i= 0; i<inputString.length(); i++){
   	//I don't totally get the parens after length, because length is a function?
      if(inputString.charAt(i) != inputString.charAt(inputString.length() -i - 1))
      	//but yeah, so it checks if the char at 0 matches the char at the end
      	//then if char at 1 matches 2nd to last...

      	//so remember charAt!
      	//and .length()
         return false;
      
    
   }
        return true;
}

String reverseString(String inputString){

		for(int i=0; i<inputString.length(); i++){
			char t = charAt(i);
			charAt(i) = inputString.charAt(inputString.length() - i - 1);
			inputString.charAt(inputString.length() - i - 1) = t;
		}

		return inputString;

}