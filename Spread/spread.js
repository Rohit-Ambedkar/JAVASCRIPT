// Expands an iterable into multiple values.

/*function func(...arr){
    // do something
}*/

// let arr =[1,2,3,4,5,6,7,8,9];
// console.log(...arr);

// with Array Literals.
/*let arr =[1,2,3,4,5];
let newarr =[...arr];
newarr.push(6)
console.log(newarr);
console.log(arr);
*/

// with Object Literals.

let data ={
    email:"india@gmail.com",
    password:"12@we"
};

const datacopy ={...data,id:1234,country:"india"};

console.log(datacopy);

let obj2 ={..."hello"};
console.log(obj2);

