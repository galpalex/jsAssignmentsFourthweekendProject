const a = "xyaabbbccccdefww";
const b = "xxxyyyyabklmopq";

const longest = (str1, str2) => {
  const twoStrings = str1.concat(str2).split("").sort();
  const res = [];
  res.push(twoStrings[0]);
  for (let i = 1; i < twoStrings.length; i++) {
    if (twoStrings[i] !== twoStrings[i - 1]) res.push(twoStrings[i]);
  }
  return res.join("");
};
console.log(longest(a, b));
//output abcdefklmopqwxy
