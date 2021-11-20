const test1 = "Dermatoglyphics";
const test2 = "aba";
const test3 = "moOse";
const test4 = "";
const test5 = "a";

const isIsogram = (str) => {
  if (!str.length || str.length === 1) return true;
  else {
    const sorted = str.toLowerCase().split("").sort();
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i] === sorted[i - 1]) return false;
    }
    return true;
  }
};

console.log(isIsogram(test1));
console.log(isIsogram(test2));
console.log(isIsogram(test3));
console.log(isIsogram(test4));
console.log(isIsogram(test5));
