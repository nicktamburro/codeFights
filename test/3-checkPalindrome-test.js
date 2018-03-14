var assert = require('assert');
var checkPalindrome = require('../arcade3.js');

describe('checkPalindrome', function() {
    it('checks to see if a string is a palindrome', function() {

        let result1 = checkPalindrome("amanaplanacanalpanama");
        let result2 = checkPalindrome("thisisnotapalindrome");
        let result3 = checkPalindrome("wowmomwow");

      assert.equal(result1, true, 'checkPalindrome(amanaplanacanalpanama) is true');
      assert.equal(result2, false, 'checkPalindrome(thisisnotapalindrome) is false');
    });
});