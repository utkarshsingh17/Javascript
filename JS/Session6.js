//------Nested Objects----
// let person={
//   name:"Rahul",
//   age:24,
//   designation:"Learner",
//   address:{
//     streetName:"ABC Street",
//     landMark:"XYZ Sqaure Circle",
//     pinCode:300201,
//     city:"Bengaluru",
//     state:"Karnataka",
//     anObj:{
//       a:1,
//       b:2,
//       c:3,
//       d:{
//         e:4,
//         f:5
//       }
//     }
//   }
// }

//-----Activity: Nested Objects-----

// const userDetails = {
//     name: {
//       first: "Kapil",
//       last: "Raghuwanshi",
//     },
//     jobTitle: "JS Instructor @ Crio.do",
//     email: {
//       work: "kapil@epsilon.com",
//       personal: "",
//     },
//     status: {
//       isOnline: true,
//       isVerified: false,
//     }
//   }

// userDetails.name.first="Crio";
// userDetails.name.last="Do";

// userDetails.status.isProMember=false;

// console.log(userDetails);

//-------Object Destructuring---

// let person={
//   name:"Crio.Do",
//   age:10,
//   designation:"Edtech"
// }

// const name = person.name;
// const age = person.age;
// const designation = person.designation;

// const {name,designation,age}= person; //destructuring syntax
// console.log(name);
// console.log(designation);
// console.log(age);

//----When variable names are different----

// const {name:nameVar, age:ageVar, designation:designationVar} = person;
// console.log(nameVar);
// console.log(designationVar);
// console.log(ageVar);

//-----Arrays are like objects in JS---

// let arr=[1,2,3,4,5];
// let obj={
//   name:"Crio.Do"
// }

// console.log(typeof(arr));
// console.log(typeof(obj));

//---Object vs Array----

// console.log(Array.isArray(arr));
// console.log(Array.isArray(obj));

//-----Array Destructuring---

// let arr=[1,2,3,4,5];

// const [a,b,c,d,e]=arr;
// console.log(c,e);

// const [,,c,,e]=arr;
// console.log(c,e);

//----2D array destructuring---
// let arr=[1,2,3,4,5,[6,7]];
// const [a,b,c,d,e,f] = arr;
// console.log(f);
// const [g,h]=f;
// console.log(g,h);

//-----Array of Objects----

// let arr=[
//   {}, //index0
//   {},  //index1
//   {},  //index2
//   {}
// ]

// let zomatoRestro =[
//   {
//     name:"Italian Palace",
//     rating:4.7,
//     dishes:{
//       italian:['Pizza','Pasta','Lasagna','Quesadilla'],
//       punjabi:["Chole Bhature","Chole Kulche"]
//     }
//   },
//    {
//     name:"Punjabi Palace",
//     rating:4.1,
//     dishes:{
//       italian:['Pizza','Pasta','Lasagna','Quesadilla'],
//       punjabi:["Chole Bhature","Chole Kulche"]
//     }
//   },
//    {
//     name:"North Palace",
//     rating:3.8,
//     dishes:{
//       italian:['Pizza','Pasta','Lasagna','Quesadilla'],
//       punjabi:["Chole Bhature","Chole Kulche"]
//     }
//   }
// ]

// let filteredRestros = zomatoRestro.filter((restro)=>restro.rating >4.0);
// console.log(filteredRestros);

//-----Actvity-Array of Objects----

// let vehicle=[
//   {
//     color:"white",
//     capacity:"5 seater",
//     type:"Hatchback"
//   },
//   {
//     color:"red",
//     capacity:"11 seater",
//     type:"Sedan"
//   },
//   {
//     color:"black",
//     capacity:"7 seater",
//     type:"SUV"
//   }
// ];

//---How to access---
// console.log(vehicle[1].type);
// console.log(vehicle[1]['type']);

//----Activity : Access array of Objects----

// var student = [

//   {
//       name: "Kevin",
//       std_id: 10,
//       marks: 25
//   },
//   {
//      name: "Austin",
//      std_id: 20,
//      marks: 30
//   },
//   {
//       name: "Robin",
//       std_id: 30,
//       marks: 20
//   }

// ]

// let maxMarks = student[0].marks; //25
// let maxMarksName = student[0].name //Kevin

// for(let i=1; i<student.length; i++){
//   if(student[i].marks>maxMarks){
//     maxMarks = student[i].marks;
//     maxMarksName= student[i].name;
//   }
// }
// console.log(maxMarksName);

// // when i=1 -->if (30>25){maxMarks = 30, maxMarksNAme = Austin
// // when i=2 -->if (20>30){maxMarks = 30, maxMarksNAme = Austin

//--------Special Numbers----
// console.log(5/0);
// console.log(typeof(5/0));

// console.log(-5/0);
// console.log(-0/5);
// console.log(0/0);
