function commonCharacterCount(s1, s2) {

	//commonChar variable
    let commonCharacters = 0;

    //split both strings
    s1 = s1.split('');
    s2 = s2.split('');

//loop through first array
    for( let i = 0; i < s1.length; i++ ) {
    	//and second array
        for( let j = 0; j < s2.length; j++ ) {
            // if it's the same character
            if ( s1[i] === s2[j] ) {

                // first, take out this char because it's already been counted... 
                s2.splice(j, 1);

                // increment total characters found
                commonCharacters++;
                break;
            }
        }
    }

    return commonCharacters;
}