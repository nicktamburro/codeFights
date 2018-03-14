var assert = require('assert');
var add = require('../1-add.js');

//TODO, error with assert: "ReferenceError: assert is not defined"

describe('add', function() {
    it('returns the sum of 2 parameters', function() {

        var result1 = add(1, 10);

      assert.equal(result1, 11, 'add(1, 10) is 11');
    });
});