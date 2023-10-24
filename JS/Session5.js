//------includes method------
// let arr=[1,2,3,4,5];

// console.log(arr.includes(3));
// console.log(arr.includes(6));

// console.log(arr.includes(3,3));

//------split method----
// 'use strict'
// let str="Crio.Do is the best place to learn";

// let arr=str.split(" ");
// console.log(arr);
// let arr1=str.split("");
// console.log(arr1);
// let arr2=str.split();
// console.log(arr2);
// let arr3=str.split(".");
// console.log(arr3);
// let arr4=str.split(true);
// console.log(arr4);
// let arr5=str.split("z");
// console.log(arr5);
// let arr5=str.split("e");
// console.log(arr5);

//-----join method---
// let arr=["Cricket", "is", "a", "good","game"];

// let str=arr.join(" ");
// console.log(str);
// let str=arr.join("-");
// console.log(str);
// let str=arr.join("");
// console.log(str);
// let str=arr.join("lol");
// console.log(str);
// let str=arr.join(true);
// console.log(str);
// let str=arr.join();
// console.log(str);

//----------Mutlidimensional arrays----

// let arr=[1,2,3,4,5]; //1D Array
// console.log(arr[2]);

// let anotherArray =[1,2,3,4,[5,6,7]]; //2D Array
// console.log(anotherArray[4][1]);

// let threeDArray = [1,2,3,4,[5,6,7,[8,9,10]]]; // 3D array
// console.log(threeDArray[4][3][1]);

//-----Iteration on Multidimensional Arrays-----

// let arr=[1,2,3,4,5]; //1D Array

// for(let i=0; i<arr.length; i++){
//   console.log(arr[i]);
// }

// let arr=[[1,2],[3,4]]; //2D Array

// for (let i=0; i<arr.length; i++){  //0,1
//   for(let j=0; j<arr[i].length; j++){
//     console.log(arr[i][j]);
//   }
// }

//----Dry run
// i=0 j=0 -->1      , i= 0 j=1-->2
// i=1 j=0 -->3      , i=1 j=1 -->4

//-------Code Demo -Print 2D array with indexes----

// let arr=[[0,1],[1,2],[3,4]];

// for (let i=0; i<arr.length; i++){  //0,1
//   for(let j=0; j<arr[i].length; j++){
//     console.log(`[${i},${j}]=${arr[i][j]}`);
//   }
// }

//-------- Introduction to JS Objects----

// let arr = []; //empty array

// let obj={}; //empty object

//----create an object ---using object literal

// let exampleObj ={
//   name:"Rahul",
//   class:"VIII",
//   dob:"12/06/1998",
//   fatherName:"Ashok",
//   address:"XYZ City",
//   pinCode: 3002001,
//   passedLastExam: true,
//   lastExamMarks : [99,98,97,96,95],
//   anoObj:{
//     newProp:"random value"
//   }
// }

// console.log(exampleObj.lastExamMarks);

//------Access values in an object

//1. Dot notaion---

// console.log(exampleObj.pinCode);
// console.log(exampleObj.date of birth);

//2. Square bracket notation

// console.log(exampleObj['pinCode']);
// console.log(exampleObj['date of birth']);

//-----Updating values in an object----

// exampleObj.pinCode=302002;  //Mutable
// console.log(exampleObj);

//----Add new properties in an object---Empty object & add properties--

// exampleObj.gender="male"; //Mutable
// console.log(exampleObj);

//----Delete a property from an object

// delete exampleObj.gender;
// console.log(exampleObj);

//-----Activity----CRUD our Objects----

// let person = {             //Create
//   name : "Crio.Do",
//   jobTitle: "Learner",
//   email:"xyz@gmail.com",
//   isVerified : false
// }

// console.log(person.name);       // Read
// console.log(person.isVerified);

// person.isVerified = true;      // Update

// delete person.name;      // Delete

// person.firstName = "Crio.";
// person.lastName = "Do";

// console.log(person);
