//write a function that returns the sum of two numbers: 
var assert = require('assert');

//solution
function add(param1, param2){
    return(param1 + param2);
}

//Mocha test
describe('add', function() {
    it('returns the sum of 2 parameters', function() {

        var result1 = add(1, 10);

      assert.equal(result1, 11, 'add(1, 10) is 11');
    });
});



add(3, 4);
add(10, 3487);