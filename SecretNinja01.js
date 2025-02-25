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

// PW2.01.08 roman-to-integer
function romanToInt(s) {
    const map = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000 
    };

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] < map[s[i + 1]]) {
            total -= map[s[i]];
        } else {
            total += map[s[i]];
        }
    }
    return total;
};
console.log(romanToInt('III'));

// PW2.01.09 longest-common-prefix
function longestCommonPrefix(strs) {
    if (!strs.length) return "";

    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (!prefix) return "";
        }
    }
    return prefix;
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "flow", "car"]));

// PW2.01.10 valid-parentheses
function isValid(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '['};
     for (let char of s) {
        if (map[char]) {
            if (stack.pop() !== map[char]) return false;
        } else {
            stack.push(char);
        }
     }
     return stack.length === 0;
};
console.log(isValid("()"));
console.log(isValid("(]"));