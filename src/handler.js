function checkPalindrome(number) {
    let stringifiedNumber = number.toString();
    let reversedStringifiedNumber = stringifiedNumber.split("").reverse().join("");
    if (stringifiedNumber === reversedStringifiedNumber) {
        return true;
    }
    return false;
}

function sum(a, b) {
    return a + b;
}

module.exports = sum;