const test = "abCdefg";

const accum = (str) => {
  const res = str.toUpperCase().split("");
  for (let i = 1; i < res.length; i++) {
    for (let j = 0; j < i; j++) {
      res[i] = res[i].concat(str[i].toLowerCase());
    }
  }
  return res.join("-");
};
console.log(accum(test));
