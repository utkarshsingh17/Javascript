// //------------Math functions------

// console.log(Math.trunc(909.000001));
// console.log(Math.trunc(1.000001));
// console.log(Math.trunc(-5.87655342));
// console.log(Math.trunc(-100.23456));

// console.log(Math.floor(4/9));
// console.log(Math.floor(4/8));

// console.log(Math.trunc(-19/17));
// console.log(Math.floor(-19/17));

// console.log(Math.ceil(25/17));

// console.log(Math.max(23,3,45,67,89));
// console.log(Math.min(23,3,45,67,89));

// console.log(Math.pow(2,3));

//-----Math Constants-----
// console.log(Math.PI);
// console.log(Math.E); //Euler's formula

//----Demo: Calculate circumference of circle---

// function calcCircum(radius){
//   return 2*Math.PI*radius;
// }

// console.log(calcCircum(2));

//----------Functions-----

//--1.Function Declaration Syntax
// function funcName(){
//function body
//return statement
//}
// funcName();

//--2. Function Expression Syntax---

// const funcName= function (a,b){
//   console.log(a+b);
// }

// funcName(3,4);

//---3. Arrow Functions----

// const funcName = (a,b) => {
//   console.log(a+b);
// }

// funcName(4,5);

//-----Advantages of Arrow functions----
//1. Function to add two numbers---

// function add(a,b){
//   return a+b;
// }
// add(3,4);

// const addArrow = (a,b) => a+b; // in single-line of code we can skip curly brackets as well as return keyword

// console.log(addArrow(2,7));

// const addArrow =(a,b) => console.log(a+b);

//2. Function which takes two parameters & it will return true if both of them are even or it will return us false.

// function checkEven(a,b){
//   if(a%2===0 && b%2===0){
//     return true;
//   }else{
//     return false;
//   }
// }

// console.log(checkEven(2,2));

// const checkArrow=(a,b) => a%2===0 && b%2===0;
// console.log(checkArrow(2,2));

//---Curly brackets in Arrow functions----
// const calPercentage = (sub1,sub2) => {
//   const percentage=(sub1+sub2)/200*100;
//   return percentage;
// }

//----skip round brackets----
// const checkArrow = a => console.log(a);

//----Activity-odd numbers----

// const oddArrow = (a,b) => a%2 !==0 && b%2 !==0;

// console.log(oddArrow(3,5));
// console.log(oddArrow(3,6));

//-----Spread operator----

//var copy_obj = {...obj}

// const arr=[1,2,3,4,5];

// // const copy_arr=arr; //array referncing

// const copy_Arr=[...arr]  //1,2,3,4,5
// copy_Arr[2]=30;

// console.log(copy_Arr);
// console.log(arr);
//----------function and block scopee------
//function test(a) {
//  var b = a;
////  console.log(b);
//}
//test(7);
//onsole.log(b);
//var a = 2;
//console.log(a);
//if (a === 2) {
//  var b = 3;
//}
//console.log(b);
