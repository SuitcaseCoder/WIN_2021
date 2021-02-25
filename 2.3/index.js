// console.log('hello world');

// var myAge = 30;
// const yourAge = 25;
// let color = "red";
// console.log(myAge , yourAge, color);

// myAge = 21;
// // yourAge = 40;
// color = "green";
// console.log(myAge, color);

// var weather;
// weather = 'sunny';

// console.log(myNum);
// console.log(greeting);
// console.log(myAge)

// LET
// let x = 5;
// console.log(x);
// x = 7;
// console.log(x);

// let x = 6;
// let y = 'seven';
// let z = true;

// CONST
// const x = 5;
// console.log(x);
// x = 7;
// console.log(x);

// const my_fave_number = 7; // this variable cannot be changed

// console.log(my_fave_number);

// let x = 10 + my_fave_number;
// console.log(my_fave_number);
// console.log(x);

// my_fave_number = 9; // error, this cannot be changed

// DATATYPES

// STRING
// let a = "Hello, World!";
// console.log(a);
// let b ='This is JavaScript!'; // Can use single or double quotes
// console.log(b);
// // datatype: string
// let c = "7"; //includes numbers, but not read as numbers
// // datatype: number
// let m = 7;
// let d = "It's Seven"; //To include quotation marks in a string, you must use a different quotation inside and outside
// let e = 'It\'s Seven'; //alternatively, you can use backslashes to ignore special characters in strings
// let g = 'It\'s Seven'

// // NUMBERS
// let x = 7;
// let y = 7.8;
// let z = 0.45;
// console.log(a, b, z);

// // BOOLEANS
// let a = true; //boolean //true
// let c = "true"; // string
// let b = false;

// var myVariable = true //boolean
// let myNum = 7 //number
// let myString = 'seven'//string

// let x = 7;
// console.log(x);
// x = "my dog Fritz ";
// console.log(x);
// x = false;
// console.log(x);

// IMPLICIT COERCIION
// let x = 7 + 7 + 7; //21
// console.log(x);
//         // Straight arithmetic resulting in a Number value.

// // // y = 7 + 7 + "7";
// let y = 7 + "7" + 7;
// console.log(y);

// const m = 7 + 7 + '7'; //concatenate
// console.log(m)

// const weather = "today is" + 80 + "degrees.";
// console.log(weather);

// // variables are typically camelCase
// const myName = "Laura";
// // re-assigning the value of myName
// myName = "Laura";

// console.log(myName);
// console.log(typeof(y));
//         // The first two 7's are calculated (14), the last 7
//         // is concatenated onto the 14 as a string.
//         // resulting in a string value
//         // "14" + "7" = "147"

// z = "7" + 7 + 7;
// console.log(z);
// console.log(typeof(z));
//         // The entire expression is implicitly converted
//         // into a string and concatenated.
//         // "7" + 7 = "77"; "77" + 7 = "777"

// const my_fave_number = 7; // this variable cannot be changed

// console.log(my_fave_number); // prints 7

// let x = 10 + my_fave_number; // we can use the const
// console.log(x); // prints 17

// my_fave_number = 9; // error, this cannot be changed

// let coffee = "hot"; //string
// let temp = 67; //number
// let weather = "27"; //string
// let age ="30";
// let itsSunny = false; //boolean
// let clouds = null; //null -it doesn't exist
// let raindrops = 0; //number
// // undefined

// let traffic = true; //truthy
// let cars = 200; //truthy
// let walker = null; //falsey

// console.log(weather + age + temp);

// EXPLICIT COERSION
// let amountRaisedSoFar = 1000;

// let donation = prompt("How much would you like to donate?");
// // "600"
// console.log(typeof donation);

// amountRaisedSoFar = parseFloat(donation) + amountRaisedSoFar;

// console.log("We have now raised: " + amountRaisedSoFar + "!");

// TYPE CASTING
// let x = parseInt("10");
// console.log(x);
// x = parseFloat("10.55");
// console.log(x);
// let l = 5;
// console.log(l);
// let y = l.toString();
// console.log(y);
// console.log(typeof(y));

// let a = null;
// console.log(a);
// console.log(typeof(a));
// a = 7;
// console.log(a);
// console.log(typeof(a));

// STRING CONCATENATION
// let greeting = "Hello, ";
// let myName = prompt("What's your name");
// let myAge = prompt('how old are you? ')
// let end = "I'm so glad you're here!";
// console.log(greeting + myName + "how's it going?");
// console.log(greeting + " " + myName + " " + "how's it going" +end);

// console.log(`${greeting} ${myName}, how's it going? Happy ${myAge}th birthday! ${end}`);

// TEMPLATE LITERALS
// let myName = "Shane";
// console.log(typeof(myName));
// let age = 25;

// console.log("happy birthday " + myName + "! How is " + (age + 1) + " treating you?")
// console.log(`Happy Birthday ${myName}! How is ${age+1} treating you?`);
// console.log(`hello world I am ${30} years old. Are dogs cute? ${true} . what's you're age ${myName}`);

// NULL & UNDEFINED
// let something;
// console.log(typeof something) //undefined

// foo does not exist, it is not defined and has never been initialized:
// console.log(foo); // "ReferenceError: foo is not defined"

// // foo is known to exist now but it has no type or value:
// let foo = null;
// console.log(foo);

// console.log(typeof nothing);
// let something;
// console.log(typeof something);
// console.log(something);

// something = null;
// console.log(typeof something);
// console.log(something);

// something = null;
// something;

// let students = ['sara', 'bob', 'joe', 'tracy', 'skip'];
// student = ['sara', 'bob', 'joe', null, 'skip'];

// --- FLOW CONTROL ---

// IF STATEMENT
// Simple if statement
// let x = true; //boolean
// console.log(typeof x);

// if (something in here is TRUE) then {
//     execute the code that's inside these curly brackets.
// }

// if (dinner is eaten) {
//     eat 3 candies;
// } else if (other conditional - all veggies done) {
//     eat 1 candy
// }

// let raining = false;

// if(!raining) {
//     console.log("i'll go to the park");
// } else {
//     console.log("no thanks, I'm staying home");
// }

//Simple if statement
// let x = true;
// if(x) {
// 	console.log(true);
// } else if (x == true) {
// 	console.log("this won't run");
// } else {
// 	console.log(false);
// }

// CHECK THE WEATHER
// let temp = "45";
// var myName = "laura";

// if (temp !=== 45) {
//     console.log("I'm going hiking!");
// } else if (temp < 45 && temp > 20){
//     console.log("I'm going shopping");
// } else {
//     console.log("I think I'll stay home today")
// }

// let color = "magenta";

// if( color == "red"){
//     console.log('color is red')
// } else if (color == "orange"){
//     console.log('color is orange')
// } else if (color == "yellow"){
//     console.log('color is yellow')
// }
// else if (color == "green"){
//     console.log('color is green')
// }
// else if (color == "blue"){
//     console.log('color is blue')
// } else {
//     console.log("color isn't in the rainbow");
// }

// = == ===
// let a = "7"; // assign
//  7 == "7" // compare - value not data type --> true
//  7 ===  "7" //false
//  a === "7" // compare - value AND data type -->true

//  let current = 1000;
//  let donation = prompt('money please');
//  let donType = typeof donation;
//  if(donType == number){
//      console.log(current + donation);
//  }

// if ( 7 == "7"){
//     // do something
//     console.log('true');
// }

// if ( 7 === "7")

// let x = true;

// if(x) {
//     console.log(true);
// } else if (x == true) {
// 	console.log("this won't run");
// } else {
// 	console.log(false);
// }

// let x = 7;

// if(x <= 7) {
//     console.log('first block of code');
// } else if (x >= 7 ) {
//     console.log("second block of code ");
// }
// else {
// 	console.log('last block of code');
// }

// COMPARISON OPERATORS
// let temp = 60;

// if (temp !== 45) {
//     console.log("I'm going hiking!");
// } else {
//     console.log("It's too cold to go hiking");
// }

// LOOSE EQUALITY
// let x = 10;
// if(x == '10') { //Type coersion is happening here!
// 	console.log(true);
// }

// if(x === '10') {
// 	console.log(true);
// }

// (0 ==  '0') // true
// 0 === "0"; // false

// ('' ==  0 ) // true, the string will implicitly be converted to an integer
// ('' === 0 ) // false, no implicit cast is being made

// CHALLENGE ONE SOLUTION
// let cups = 3;

// if(cups < 3){
//     console.log("Yes. I'll take another cup of coffee!");
// } else if(cups <=  3) {
//     console.log("I think I'm okay for now.");
// }

// TRUTHY FALSEY VALUES
// if('abc') {
// 	console.log('123')// this block would run
// }

// && -> and
// || -> or

// if(10 && 'abc' && true) {
//     console.log('all of these are true');
// 	// this block would run
// }

// let whatever; //whatever is undefined
// if(whatever) {
// 	console.log(true);
// } else {
// 	console.log(false); //this would run
// }

// if(!whatever){
// 	console.log(false); //this would run
// }

// if(false || 0 || null){
// 	console.log(true); //since none of these evaluate to true, this will not run
// } else {
//     console.log('neither of thse are considered truthy');
// }

// SHORT CIRCUIT EVALUATION
// somevar && myFunction() //equivalant to if(somevar)
// somevar || myFunction() //equivalant to if(!somevar)

// ------- START HERE ON MONDAY AM ------
// start on slide #37 of week 2 day 3
// let myNum = 7;
// let myList = [7, 9, 0, 32, 12];
// let students = ['sara', 'bob', 'jake', 'skip'];

// for (let i = 0; i <= students.length; i++){
//     console.log(`hello ${students[i]}`);
// }

// CHALLENGE TWO SOLUTION
// let temp = 85;
// let precipitation = false;
// let indoors = true;

// console.log("The temperature is " + temp + " degrees");

// if (temp > 80 && precipitation === false) {
//   console.log("time to swim!");
// } else if (indoors) {
//   console.log("time to swim!");
// }

// --- ITERATION ---

// FOR LOOP
// for (starting point; keep going until you reach a certain point; how you want to iterate through data set ) {
//     whatever code you want to run and be applied at EACH item in your loop.
// }

// i + 1  // i++
// 10 + 1  == 10++  //11

// [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (let i = 0; i <= 9; i++) {
//   console.log("currently at item: " + i);
//   console.log(`current item + 2:  ${i + 2}`);
// }

// console.log(15 % 2);

// how to loop through a set of numbers 0-20;
// how to add 2 to each item ONLY IF that item is an even number
// for (let i = 0; i <= 20; i++) {
//     console.log("current item: "+ i);

//     // is it even?
//     // if a number is divisible by 2 == even
//     // i = current item in our loop
//     // divide i by 2 and give us any remainder 
//     // is the result of that division

//   if (i % 2 == 0) {
//     console.log(i + 2);
//   } else {
//     console.log("odd");
//   }
// }

// console.log("-------");

// for (let i = 9; i >= 1; i--){
//     console.log(i);
//     // console.log(i + 2 );
// }

// CHALLENGE THREE solution
// for (let bottle = 99; bottle >= 0; bottle --){
//     // console.log(`${bottle} bottles of root beer on the wall`)
//     // "printing to console"

//     // if (bottle === 0) {
//     //   console.log("Hey! Go buy more root beer!");
//     // }
//     // else {
//     //     console.log(bottle + " bottles of root beer on the wall");
//     // }
// }

// WHILE LOOP
// let myRandomNumber = 2;
// while(myRandomNumber <= 10) {
//     console.log('random number: ' + myRandomNumber);
//     // myRandomNumber = myRandomNumber + 1;
//     // console.log('random number plus 1 : '+ myRandomNumber);
//     // or x +=1
//     // or x++
// }

// ---- QUICK REVIEW ----
// 18 == "18" // true
// 18 === "18" // false

// student = true;
// if(student == true){
//     // execute any code  
//     console.log('you have hw today') ; 
// } 

// students = ['mary', 'thomas', 'frank','sue','grant'];
// // looping through a set data
// for(let i = 0; i <= students.length; i++){
//     // execute any code
//     // applied to EACH ITEM individually 
//     // ${any variable goes inside of this}
//     console.log(` ${students[i]}  you get 5 extra points today!`);
// }

// ---- END QUICK REVIEW ----

// for(let i = 0; i <=10; i++){
//     console.log(`num + 5:   ${i + 5}`)
// }


// make sure you have a stopping point for while loops
// let paper = 3;
// while(paper <= 10) {
//     paper = paper + 1;
//     console.log(booleans);
//     // or paper +=1
//     // or paper++
// }

// DO WHILE
// let paper = 11;
// do{
//     paper = paper +1;
//     console.log(paper);
// } while(paper <=10)

// let x = 10;
// do {
//      x +=1
//      console.log(x);
// } while(x < 10);

// let userInput = prompt("give me a number");
// console.log(userInput);

// BREAK AND CONTINUE
// for(let i = 0; i < 10; i++) {
// 	console.log(i);
// 	console.log('before break'); // will only print once
// 	break; // exits the next loop
// 	console.log('after break'); //never happens
// }

// console.log('outside of loop');

// for(let i = 0; i < 10; i++) {
// 	console.log(i);
// 	console.log('before continue'); // will print 10 times
//     continue; // continues to the next iteration
//     i + 10;
// 	console.log('after continue'); //never happens
// }

// SWITCH STATEMENTS
// let myNumber = 1;
// switch(myNumber) {
// 	case 9:
// 		console.log('three')
// 	case 1:
// 		console.log(1);
// 		// break;
// 	case 3:
// 		console.log(3);
// 		break;
// 	default:
// 		console.log('default')
// }

// if(myNumber == 3){
//     console.log('three');
// }

// let y = 10;

// if(y > 5){
//     console.log(y);
//     console.log(x);
// } else {
//     let x = 7;
// //     console.log(x);
// // }

// var , const, let ;

// --- SCOPE ---
// console.log(test); //console: undefined
// if(!test){ //true
//   var test = true; //create and assign test
//   console.log(test); //console: true
// }
// console.log(test); //this is dangerous!

// if(test == true){
//     console.log(test + ' is true');
// }

// LET
// let test = true;
// if(test){
//   let test = true; //this is a completely new variable that only exists in this scope
//   console.log(test); //console: false
// }
// console.log(test); //console: true

// function myFunction(thisIsMyTest){
//     thisIsMyTest = false;
//     console.log('this is my test ' + thisIsMyTest);
// }

// myFunction(test);
// console.log(test);

// let test = true;
// console.log(test); // true
// // scope
// if(test){
//   test = false;
//   console.log(test); // false
// }
// console.log(test);

// var x = 0;
// for(let i = 0; i<=10; i++){
//     x= x + 1;
//     // console.log(x)
// }

// console.log(x);

// for(let i = 0; i<=10; i++){
//     x= x + 1;
//     // console.log(x)
// }

// console.log(x);


// VAR VS LET
// let
// for (let i = 0; i < 10; i++){
//     console.log(i); // possible because i is within the scope
//   }
//   console.log(i); // undefined because i only existed in the loop

// var
// for (var i = 0; i < 10; i++){
//     console.log(i); //
//     }
//     console.log(i); // will log 9, the final value of i in the for loop,
//                 //because var declared it globally
