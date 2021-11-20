const test = [3, 7, 1, 2, 3, 5, 7, 4, 16];

const res = test.filter((num) => num % 2 === 0);
console.log(res);

const res2 = [];
test.forEach((element) => {
  if (element % 2 === 0) res2.push(element);
});
console.log(res2);

const res3 = test.map(function (num) {
  return num * 2;
});
console.log(res3);
