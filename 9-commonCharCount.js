function commonCharacterCount(s1, s2) {

	//commonChar variable
    let commonCharacters = 0;

    //split both strings
    s1 = s1.split('');
    s2 = s2.split('');

//loop through first array
    for( let i = 0; i < s1.length; i++ ) {
    	//then loop entired second array, just comparing to one index in s1
        for( let j = 0; j < s2.length; j++ ) {
            // if it's the same character...
            if ( s1[i] === s2[j] ) {

                // ...first, take out this char because it's already been counted... 
                s2.splice(j, 1);

                // then increment total characters found
                commonCharacters++;
                //then we break back to the first loop
                break;
            }
        }
    }

    console.log(commonCharacters);
}

let s1 = "asdfasdfwer";
let s2 = "werwerasdf";

commonCharacterCount(s1, s2);