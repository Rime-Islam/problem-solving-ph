// PW2.01.06 longest-substring-without-repeating-characters
function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0, maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};
console.log(lengthOfLongestSubstring('abccaabb'));

// PW2.01.07 integer-to-roman
function intToRoman(num) {
    const values = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" },
    ];

    let result = '';
    for (let {value, symbol } of values) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
};
console.log(intToRoman(1994));
