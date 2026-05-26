// Value we pass to the function

//Syntax

/* function funName(arg1,arg2){
    let sum = a+b;
    console.log(sum);
}
    funName(parameter1,parameter2);
*/


 /* function Add(x,y){
    let sum = x+y;
    console.log(sum); // 5
    
}
Add(2,3); */


//Q3. Create a Function that gives us the average of 3 number


  /*  function avg(a,b,c){
        let average = (a+b+c)/3;
        let sum = a+b+c;
        console.log(`your number's sum is ${sum}`);
        console.log(`your number's average is ${average}`);
}
avg(1,2,3);
*/


//Q4. Create a function that prints the multipliation table of a number.
 
 /*function printTable(n){
    for(let i=n;i<=n*10;i+=n){
    console.log(i);
    }
}
printTable(5);*/


// Q5. Create a function that returns the sum of numbers from 1 to n

/*function getsum(n){
    let sum =0
    for(let i=1;i<=n;i++){
    sum+=i;

    }
    return sum;
}
console.log(getsum(50));
*/

//Q6. Create a function that returns the concatenation of all strings in an array.

function concat(str){
    let result;
    for(let i=0;i<str.length;i++){
        result+=str[i];

    }
    return result;
}
let str =["hii","hello","bye","!"];
console.log(concat(str));
