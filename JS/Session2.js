//----------------------Expressions-------------

//----1. Mathematical Expressions
// console.log(2+2);
// console.log(2 + 3 / 4 % 5 * 6);

//----2. Relational Expressions-------
// console.log(5>4);
// console.log(5<4);

//----3. Logical Expressions----

// console.log( 5>4 && 6>5); //AND OPERATOR
// console.log( 5<4 && 6>5); //AND OPERATOR

// console.log( 5<4 || 6>5); //OR OPERATOR

// console.log(!true); //NOT Operator
// console.log(!(6>5));

//----------OPerators-----------

//---1. Mathematical Operators  +,-,*,/,%
// console.log(10 % 2);
// console.log(11 % 3);

//----2. Relational Operators <,>,<=,>=,===, !==
// console.log(7>4); //true
// console.log(7<4); // false
// console.log(5 <=4); //false
// console.log(5>=5); //true

// console.log( 5 === 5); //Strict equality operator
// console.log( 5 == 5);  //Non-strict equality operator

// console.log('5'=== 5);
// console.log('5'== 5);

// console.log( 5 !== 5); //Strict Not equal-to
// console.log( 5 != 5); // Non-strict equal-to

// console.log("6" !== 6);
// console.log("6" != 6);

//-----------------------Activity Demo----
// console.log('JS'/4);
// console.log(typeof('JS'/4));

//------If-else conditional statements--------
// let number = -5;
// if(number >0){
//   console.log("Number is +ve");
// } else {
//   console.log("Number is -ve");
// }

//-------If-else-if-Else---------

// let number = 0;
// if(number >0){
//   console.log("Number is +ve");
// } else if(number === 0){
//   console.log("Number entered is 0");
// } else {
//   console.log("Number is -ve");
// }

//-----Activity----
// var age=16;
// if(age>18){
//   console.log("can drive");
// }else{
//   console.log("cannot drive");
// }

//-------------Formatted Output----------------
// console.log(100);
// console.log("****************");
// console.log(2);
// console.log("****************");
// console.log(true);
// console.log("****************");
// console.log(40);
// console.log("****************");
// console.log(false);
// console.log("****************");
// console.log(6);
// console.log("****************");
// console.log(2);
// console.log("****************");
// console.log(2);
// console.log("****************");
// console.log(2);
// console.log("****************");
// console.log(2);
// console.log("****************");

//------Functions-------------
// function formattedOutput(){ //Declaration of function
//   console.log(2);
//   console.log("******************");
// }

// // Calling the function
// formattedOutput();
// formattedOutput();
// formattedOutput();
// formattedOutput();
// formattedOutput();
// formattedOutput();
// formattedOutput();
// formattedOutput();
// formattedOutput();
// formattedOutput();

//--------------------Parameters-------------
// function formattedOutput(param1){ //Declaration of function
//   console.log(param1);
//   console.log("******************");
// }

// // Calling the function
// formattedOutput(100); //arguments
// formattedOutput(2);
// formattedOutput(true);
// formattedOutput(40);
// formattedOutput(false);
// formattedOutput(6);
// formattedOutput(2);
// formattedOutput(2);
// formattedOutput(2);
// formattedOutput(2);

//-------------------Multiple parameters----------
// function formattedOutput(param1,param2,param3){ //Declaration of function
//   console.log(param1,param2,param3);
//   console.log("******************");
// }

// // Calling the function
// formattedOutput(100,101,102,103); //arguments
// formattedOutput(2,3,4);
// formattedOutput(true);
// formattedOutput(40);
// formattedOutput(false);
// formattedOutput(6);
// formattedOutput(2);
// formattedOutput(2);
// formattedOutput(2);
// formattedOutput(2);

//-----Activity Functions--------
// function myName(){
//   console.log("Crio.Do");
// }

// myName();
// myName();
// myName();


//-------Bank Message Parametric Functions----

// function bankMessage(name,accno){
//   console.log("Congratulations "+name+" on updating your KYC successfuly today for account number : xxxxxxxx"+accno);
// }

// bankMessage("Abhay",1234);
// bankMessage("Akhil",5674);
// bankMessage("Anuj",9876);
// bankMessage("Anshul",1267);


// --------Return Values from Function-----------

// function multiply(x,y){
//   console.log(x*y);
// }

// multiply(5,2);
// multiply(5,1);

// function calcPercentage(sub1,sub2,sub3){
//   let percentage = ((sub1+sub2+sub3)/360*100);
//   return percentage;
// }

// const result = calcPercentage(101,102,103);
// console.log(result);
