/*//INSTRUCTIONS: Given a year, return the century it is in. The first 
century spans from the year 1 up to and including the 
year 100, the second - from the year 101 up to and 
including the year 200, etc.*/

//MOCHA TEST MOVED TO TEST FOLDER!!
/*var assert = require('assert');*/
//-------------------------------------------------------------------------------------------------------

function centuryFromYear(year) {
    if (year > 0 && year < 101){
        return 1;
    }else{
        return (Math.ceil(year / 100));
    }
    
}
//---------------------------------------------------------------------------------
//MOCHA TEST MOVED TO TEST FOLDER!!
/*describe('centuryFromYear', function() {
    it('when given a year, it returns the Century', function() {

        let result1 = centuryFromYear(1998);
        let result2 = centuryFromYear(1);
        let result3 = centuryFromYear(3008);

      assert.equal(result1, 20, 'centuryFromYear(1998) is 20');
      assert.equal(result2, 1, 'centuryFromYear(1) is 1');
      assert.equal(result3, 31, 'centuryFromYear(3008) is 31');
    });
});*/

