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
// function x() {
//   const hello = "world";

//   if (true) console.log(hello);

//   console.log(hello);
// }

// x();
// console.log(hello); // this throws an error because of the scope of the hello variable is
// inside the function x only.

// ---------------VARIABLE SHADOWING-----------------
// const myAge = 22;
// function printMyAge() {
//   const myAge = 25;
//   console.log(myVar);
// }

// doing this wont give any error because you are creating a variable in a different scope here
// this is also know as variable shadowing as myAge = 25 is shadowing the myAge = 22;

// printMyAge();

// ---------------- DOCUMENT OBJECT MODEL ----------------
// document object -

// console.log(document); //what JS does is that creates a tree like representation of HTML doc
// that u have sent it and calls it document object model

// DOM is a programmatic representation of the HTML document

// -------------- QUERY SELECTOR ---------------
// const heading = document.querySelector(".heading1");
// // heading is holding a reference to the h1 in the DOM
// heading.innerText = "hello bro";
// console.log(heading);

// ---------------- QUERYSELECTOR ALL------------
// const allListItems = document.querySelector("ul li");
// // only returns first element
// console.log(allListItems);

// const allListItems1 = document.querySelectorAll("ul li");
// console.log(allListItems1);

// for (let i = 0; i < allListItems1.length; i++) {
//   const listItem = allListItems1[i];
//   listItem.innerText = "yooo";
// }

// MORE ON TRAVERSING
// const para = document.querySelector("#para");
// console.log(para);

// this is slightly more performant than queryselector
// because this creates a hash map of the ids on the page with their corresponding references
// const para = document.getElementById("para");
// console.log(para);

// const ul = document.querySelector("ul");
// const li = ul.querySelectorAll("li");

// we can use query selector and query selector all with any node of the DOM
// and JS doesnt allow us to use getElementById with the node of the DOM but only with the
// document

// ----------- EVENT LISTENERS ------------------
// const incrementButton = document.querySelector("#increment");
// const decrementButton = document.querySelector("#decrement");

// let counter = 0;
// function incrementCounter() {
//   const counterElement = document.getElementById("counter");
//   counter++;
//   counterElement.innerText = counter;
//   console.log("run");
// }

// function decrementCounter() {
//   const counterElement = document.getElementById("counter");
//   counter--;
//   counterElement.innerText = counter;
//   console.log("run");
// }

// incrementButton.addEventListener("click", incrementCounter);
// decrementButton.addEventListener("click", decrementCounter);

// ------------CREATE & REMOVE ELEMENT-------------
// const incrementButton = document.querySelector("#increment");
// const decrementButton = document.querySelector("#decrement");
// const counterElement = document.getElementById("counter");
// let counter = 0;
// const ulElement = document.getElementById("list-items");
// function incrementCounter() {
//   counter++;
//   counterElement.innerText = counter;
//   // // create an element
//   // const li = document.createElement("li");
//   // const b = document.createElement("b");
//   // const textNode = document.createTextNode("sentence");
//   // b.appendChild(textNode);
//   // const counterNode = document.createTextNode(counter);
//   // li.appendChild(b);
//   // li.appendChild(counterNode);
//   // // append it
//   // ulElement.appendChild(li);

//   const li = document.createElement("li");
//   li.setAttribute("data-counter", counter);
//   li.innerHTML = "<b>something</b> - " + counter;
//   console.log(li);
//   ulElement.appendChild(li);
// }

// function decrementCounter() {
//   const li = ulElement.querySelector('[data-counter="' + counter + '"]');
//   const number = parseInt(li.getAttribute("data-counter"), 10);
//   if (number % 2 === 0) {
//     li.remove();
//   }
//   // li.remove();
//   counter--;
//   counterElement.innerText = counter;
// }

// incrementButton.addEventListener("click", incrementCounter);
// decrementButton.addEventListener("click", decrementCounter);

// ------------------- CSS STLYE MANIPULATION -----------------
// const li = document.querySelector("li");
// li.style.background = "blue";
// li.style.padding = "10px";

// ----------------- ES6 DESTRUCTURING ---------------------
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);

// const obj1 = { name: 11 };
// const obj2 = { age: 22 };
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// if you are destructuring two obj into one and if both the objs contains the same property
// then the property which comes after will override the one which came before

// if the name of the key and the value is the same then u can just write the name of the key
// for eg - const tempObj = {name: 'hello', age}

// -------------------- ARROW FUNCTIONS -----------------------
// by default JS takes all the functions and hoists them to the top
// for eg- this is compeletely valid syntax

// likeThis();
// function likeThis() {
//   return false;
// }

// This thing doesnt happen in the case of arrow functions
// const arrowfunc = () => {
//   return false;
// };

// ---------------- ARRAY FUNCTIONS ------------------
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// FOR LOOP
// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
// }

// MAP
// const mappedArr = arr.map((element) => element ** 2);
// console.log(mappedArr);

// FILTER
// if true will return an element
// const filteredArr = arr.filter((element) => element > 3);
// console.log(filteredArr);

// const friends = [
//   {
//     name: "x",
//     age: 11,
//   },
//   {
//     name: "y",
//     age: 12,
//   },
//   { name: "z", age: 13 },
// ];

// console.log(friends.filter((element) => element.age > 11));

// FIND
// console.log(friends.find((friend) => friend.name === "x"));

// FOR EACH
// friends.forEach((friend) => {
//   console.log(friend);
// });

// ------------------ TEMPLATE LITERALS ----------------
// const aboutMe = `hello,
// this is me`;
// console.log(aboutMe);

// const person = { name: "luffy", age: 16 };
// const aboutMe =
//   "my name is " + person.name + " and I am " + person.age + " years old";
// console.log(aboutMe);

// const aboutMeUsingTL = `my name is ${person.name} and I am ${person.age} years old`;
// console.log(aboutMeUsingTL);

// -------- PROMISES & FETCH -----------
// FETCH API FROM THE BROWSER
// const promiseObj = fetch("/data.json"); //takes in a URL and this returns a promise object which says that in future it ll have a definitive value

// // if promise resolves then this 'then' runs and 'data' is what this promise resolves to
// promiseObj.then((response) => {
//   // console.log(response);
//   const promiseObj2 = response.json(); //this also returns a promise json() is used to parse the response as JSON
//   promiseObj2.then((data) => console.log(data));
// });
