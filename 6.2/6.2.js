const test1 = "abcde";
const test2 = "aabbcde";
const test3 = "aabBcde";
const test4 = "indivisibility";
const test5 = "Indivisibilities";
const test6 = "aA11";
const test7 = "ABBA";
const test8 = "AB45675647056BA";
const test9 = "";
const test10 = "f";

const countDuplicates = (str) => {
  if (!str.length || str.length === 1)
    return "0 # no characters repeats more than once";
  else {
    const myStr = str.toLowerCase();
    const chars = {};
    let res = [];
    let finalString = "";
    for (const char of myStr) {
      if (chars[char]) chars[char]++;
      else chars[char] = 1;
    }
    res = Object.entries(chars).filter((char) => char[1] > 1);

    if (!res.length) return "0 # no characters repeats more than once";
    else {
      finalString += `${res.length} # `;
      res.forEach((element) => {
        finalString += `"${element[0]}" occurs ${element[1]} times,`;
      });
      return finalString;
    }
  }
};

console.log(countDuplicates(test1));
console.log(countDuplicates(test2));
console.log(countDuplicates(test3));
console.log(countDuplicates(test4));
console.log(countDuplicates(test5));
console.log(countDuplicates(test6));
console.log(countDuplicates(test7));
console.log(countDuplicates(test8));
console.log(countDuplicates(test9));
console.log(countDuplicates(test10));
// output
// 0 # no characters repeats more than once
// 2 # "a" occurs 2 times,"b" occurs 2 times,
// 2 # "a" occurs 2 times,"b" occurs 2 times,
// 1 # "i" occurs 6 times,
// 2 # "i" occurs 7 times,"s" occurs 2 times,
// 2 # "1" occurs 2 times,"a" occurs 2 times,
// 2 # "a" occurs 2 times,"b" occurs 2 times,
// 6 # "4" occurs 2 times,"5" occurs 3 times,"6" occurs 3 times,"7" occurs 2 times,"a" occurs 2 times,"b" occurs 2 times,
// 0 # no characters repeats more than once
// 0 # no characters repeats more than once
