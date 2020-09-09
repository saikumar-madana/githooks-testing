const checkPalindrome = require("../src/handler").checkPalindrome;

test('check palindrome', () => {
  expect(checkPalindrome(121)).toBe(true);
});
