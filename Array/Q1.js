

let months =["january","july","march","august"];


months.shift();
months.shift();
months.unshift("june");
console.log(months); // [ 'june', 'july', 'march', 'august' ]

months.unshift("july");
console.log(months); // [ 'july', 'june', 'july', 'march', 'august' ]