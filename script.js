// ----------------VARIABLES-------------------
// let or const

// - cant assign a const any value again
// - can reassign values to a "let" variable

// reassigning =>
// let tempVar = 1;
// tempVar = 2;

// - dont use var

// const myVar = 250;
// console.log(myVar);

// let temp = 11;
// console.log(temp);

// -----------DATA TYPES-----------------
// string
// const myString = "hey";

// boolean
// const temp = true;

// arrays
// const friends = [22, true, "friend"];
// console.log(friends);
// console.log(friends[1]);
// console.log(friends[3]); => returns undefined

// undefined is a value of a variable which hasnt been initialized

// big int
// const bigIntNum =
//   111111111111111111111111111111111111111111111111111111111111111111111111n;
// console.log(bigIntNum);

// null
// let tempVar = null;
// this says that this variable's value doesnt exist

// -----------------TYPE OF------------------
// console.log(typeof 88);
// console.log(typeof "hello");
// console.log(typeof true);
// console.log(typeof [1, 77]);
// console.log(typeof null); => returns null
// console.log(typeof undefined);
// console.log(
//   typeof 1111111111111111111111111111111111111111111111111111111111111111111111n
// );

// -------------MATH OPERATORS----------------
// let temp = 1;
// temp = temp + 3;
// console.log(temp);

// temp = temp ** 2;
// console.log(temp);

// increment & decrement
// let temp = 1;
// temp++;
// console.log(temp);

// ----------------FUNCTIONS------------------
// function makeConsoleLog() {
//   console.log("this is a function");
//   console.log("total count");
//   console.log("typing on a tv 😎");
// }

// makeConsoleLog();

// array
// let myFriends = [];

// function addMyFriends(friend) {
//   myFriends.push(friend);
//   console.log(myFriends);
// }

// addMyFriends("luffy");
// addMyFriends("zoro");

// let tempArray = [1, 2, 3, 4];
// tempArray[1] = "edited";
// console.log(tempArray);

//---------------EQUALITY-----------------
// console.log(1 === 1);
// console.log(1 == "1");

// always use ===
// === also compares the data type
// == typecasts the value

// ---------------OBJECTS-----------------
// const myobj = {
//   keyname: "value",
//   keyname2: "value",
//   keyname3: function () {
//     return "keyname3";
//   },
// };

// console.log(myobj);

// dont need to have quotes around the key name if it doesnt have any whitespace
// accessing a value of an obj -> obj.keyName or obj[keyName]

// --------CALL BY REFERENCE-----------

// in case of primitive data types - num, bool, string, big int
// let num = 100;
// let num2 = 200;
// function primitiveMutate(primitive) {
//   primitive++; // this is a copy of the num and num2 and the original num and num2
//   console.log(primitive);
// }
// primitiveMutate(num);
// console.log(num);
// primitiveMutate(num2);
// console.log(num2);

// in case of objects
// const profile = {
//   name: "luffy",
//   age: 11,
// };

// function mutate(obj) {
//   obj.age++; // this will effect the original value in the object as well
//   console.log(obj.age);
// }

// mutate(profile);
// console.log(profile);

// THIS IS BECAUSE OBJ WORKS IS BY REFERENCE(an address is passed)

// ----------------SCOPE-----------------
function x() {
  const hello = "world";

  if (true) console.log(hello);

  console.log(hello);
}

x();
// console.log(hello); // this throws an error because of the scope of the hello variable is
// inside the function x only.
