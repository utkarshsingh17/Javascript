//-----------If-else chaining-----
// let a = 5;
// let b = 6;
// let c = 7;
// if (a>=b && a>=c){
//   console.log("a is greatest");
// } else if(b>=a && b>=c){
//   console.log("b is greatest");
// } else{
//   console.log("c is greatest");
// }

//------Nested Conditionals------
// let a = 5;
// let b = 6;
// let c = 7;
// if(a >= b){
//   if(a >= c){
//     console.log("a is greatest");
//   }
// } else if(b >= a){
//   if(b >= c){
//     console.log("b is the greatest");
//   }
//   else{
//     console.log("c is the greatest");
//   }
// }

//-----------Strings----------
// let str=''; //an empty string
// let str1="Crio.do";
// let str2="Hello world";

// console.log(str2.length);
// console.log("Crio".length);

// console.log("Hey what's up");

//------------Escape Sequences----- \

// console.log('This is a single quote (\') and this is a double quote (")');
// console.log("this is a backslash \\");
// console.log("this is a backslash \\\\");
// console.log("Crio.Do is the best place to learn \n No doubts on that");
// console.log("Crio.Do is the best place to learn \t No doubts on that");

//-----------Accessing specific characters from strings--

// let str = "Crio.Do is the best place to learn by doing";

// //---1.charAt() method----
// console.log(str.charAt(4));

// //----Square bracket notation-----
// console.log(str[4]);

// //Access the last character from my string
// console.log(str[str.length-1]);

//-------String Immutability-----

// let myStr="Bob";
// myStr[0]="J";
// //console.log(myStr);

// myStr ="Job"; //allowed
// console.log(myStr);

//---------strict mode-----
 //'use strict'
// let myStr="Bob";
// myStr[0]="J";
// console.log(myStr);

//-----Template Strings----

// let str=` this is a template string
// and now we are in new line`;
// console.log(str);

// let name = "Rahul";
// let percent = 60;
// console.log("Hey "+name+" congratulations as you get "+percent+"% off on your next delivery");

// console.log(`Hey ${name} congratulations as you get ${percent} % off on your next delivery`);

// console.log(`we can add any expressions ${2+2}`);
// console.log(`we can add any expressions ${2>1}`);

//------------Substrings-------
// let str="Crio.Do is the best place to learn by doing";

// let result = str.substring(0);
// console.log(result);
