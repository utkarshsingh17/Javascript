//-------for loop-----------

// for (let i=1; i<=10; i++){
//   console.log(i);
// }
//DRY RUN :
// i=1 ; 1<=10 (true) --> 1 ; i++ -->2;
// 2<=10 (true)--> 2; i++ -->3;
// 10<=10 (true) --> 10; i++ -->11;
// 11<=10 (false) -->stop

// for (let i=0; i<10; i++){
//   console.log(i+1);
// }

// for (let i=10; i>=1; i--){
//   console.log(i);
// }

// for(;;){
//   console.log("Print something....");
// }

//------Arrays------

// let arr=[]; //empty array

// let shoppingCart=['Iphone 14', 'Airpods', 'Cushion Cover','Bag',2, true, null,null, undefined, [], {}, function abc(){}];

//---Accessing elements from the array-----
// Square bracket notation--

// let result= shoppingCart[3];
// console.log(result);

//---access last element of the array---

// console.log(shoppingCart[shoppingCart.length-1]);
// console.log(shoppingCart.length);

// shoppingCart[3]="Gucci Bag"; //mutable
// console.log(shoppingCart);

//----Activity Arrays----
//  let arr=[];

// arr[0]=1;
// arr[1]="Hello";
// arr[2]=null;
// arr[3]=true;
// arr[4]="Piotr";

// console.log(arr[1]);
// arr[4]="Crio.Do";
// console.log(arr);

//----------Iteration on array elements-----
//  let arr=[1,2,3,4,5];

// for(let i=0; i<arr.length; i++){
//   console.log(arr[i]);
// }

//----Strict & Non-strict equality operators----

// console.log("true" == true); // "true" == 1 -->false
// console.log("0" == true);  //"0" == 1 -->false
// console.log("1" == true);  //"1" == 1 --> true

// console.log("0" == false);   // "0" == 0 -->true
// console.log(1 == true);  // 1 == 1 --> true
// console.log(0 ==false); //0 == 0 -->true

// console.log(1 === true);
// console.log(0 === false);

//-----Array Referencing----

// let x=[1,2,3];
// let y = x; // array-referencing - both point to the same memory location.

// x[0]= 1000;

// console.log(x);
// console.log(y);

//-----Activity-array referencing----

// let a = [1,2,3];
// let b = [1,2,3];
// let c = a;

// console.log(a === b);
// console.log(a == b);
// console.log( a === c);
// console.log(a == c);

//--------Array methods----

// let arr=[1,2,3,4,5];

// arr.push(6); //add element at the end of the array
// console.log(arr);

// arr.push(7,8,9,10);
// console.log(arr);

// arr.pop(); //delete the last elelemt from the array
// console.log(arr);

// arr.unshift(50,51,52); //add element at the beginnning of the array
// console.log(arr);

// arr.shift(); // delete the element from the beginning of the array

//------Activity - Todo List

// let todoDB=[];

// function addTodo(item, priority){
//   if(priority === "high"){
//     todoDB.unshift(item);
//   }else{
//     todoDB.push(item);
//   }

// }

// addTodo("Play Cricket","low"); // Play Cricket
// addTodo("Study JS","high"); // Study JS, Play Cricket
// addTodo("Doing takehomes","high"); // Doing takehomes, Study JS, Play Cricket
// addTodo("Sleep & Chill","low"); // Doing takehomes, Study JS, Play Cricket, Sleep & Chill
// addTodo("Watching Netflix","random"); // Doing takehomes, Study JS, Play Cricket, Sleep & Chill, Watching Netflix

// console.log(todoDB);

//------Falsy or Truthy values

// let arr=[1, true, false, "", null, "Cricket", "Bag", 3, undefined,"Iphone 14", NaN];

//---print TRUTHY values
// for(let i=0; i<arr.length; i++){
//   if(arr[i]){
//     console.log(arr[i]);
//   }
// }

//---print FALSY values
// for(let i=0; i<arr.length; i++){
//   if(!arr[i]){
//     console.log(arr[i]);
//   }
// }

//-------Sort Method-----

// let arr=["Cricket", "Volleyball", "Basketball", "Lawn-Tennis", "Table-Tennis", "Football"];
// arr.sort();
// console.log(arr);

// let arrNums=[23,34,12,86,92,35,17,56];
// arrNums.sort();
// console.log(arrNums);

// let numsExample=[1,2,10,11,1000,1001,1111,1110,10000];
// numsExample.sort();  //Callback Functions
// console.log(numsExample);

//------Reverse Method--------

// let arr=["Cricket", "Volleyball", "Basketball", "Lawn-Tennis", "Table-Tennis", "Football"];

// arr.reverse();
// console.log(arr);

// let arrNums=[23,34,12,86,92,35,17,56];
// arrNums.reverse();
// console.log(arrNums);
