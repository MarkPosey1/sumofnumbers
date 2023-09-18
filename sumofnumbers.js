const _ = require('underscore');

function sumFor(list) {
  let sum = 0;
  for (const num of list) {
    sum += num;
  }
  return sum;
}

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, num) { return memo + num; }, 0);
}


console.log(sumFor([1, 2, 3, 4, 5]));
console.log(sumWhile([1, 2, 3, 4, 5]));
console.log(sumRecursion([1, 2, 3, 4, 5]));
console.log(sumTheSimpleWay([1, 2, 3, 4, 5]))