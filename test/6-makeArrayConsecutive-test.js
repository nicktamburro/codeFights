//the tests I want to do:
// it adds up the missing spaces for numbers

//so like, [1, 2, 4, 5, 7, 8, 10] would be 3... I think I'm skipping some steps...
//one test isn't passing, array [4,5,6], which makes no sense.... 

var assert = require('assert');
var makeArrayConsecutive = require('../6-makeArrayConsecutive.js');

describe('makeArrayConsecutive', function() {
    it('gives total of missing numbers in a consecutive array', function() {

        let result1 = makeArrayConsecutive([1, 2, 4, 5, 7, 8, 10]);
        let result2 = makeArrayConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

      assert.equal(result1, 3, 'makeArrayConsecutive([1, 2, 4, 5, 7, 8, 10]) is 3');
      assert.equal(result2, 0, 'makeArrayConsecutive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) is 0');
    });
});


