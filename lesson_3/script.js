console.log("======================== task 1 ========================");

let num_1 = 100;
nextNum: for (let i = 2; i <= num_1; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue nextNum;
  }
  console.log(i);
}

console.log("======================== task 2 and task 3 ========================");

let cart = [{
    name: "iphone_12",
    price: 2000
  },
  {
    name: "watch",
    price: 500
  },
  {
    name: "air_pods",
    price: 800
  }
];

let totalPrice = countBasketPrice(cart);
console.log("total cart price is: " + totalPrice + "$");

function countBasketPrice(arr) {
  return arr.reduce((acc, item) => acc + item.price, 0);
}

console.log("======================== task 4 ========================");

let num_2 = 9;
let arr = [];
for (var i = 1; i <= num_2; arr.push(i++)){}
console.log(arr.join('\n'));

console.log("======================== task 5 ========================");

showPyramid(20);

function showPyramid(row) {
  let arr = ['x'];
  while (arr.length <= row) {
    console.log(arr.join(''));
    arr.push('x');
  }
}
