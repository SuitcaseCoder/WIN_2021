// ----***FUNCTIONS PART ONE***----

// //Declaring & executing a function
// // Each function has it's own task
// // Functions help keep code organized
// // Functions accept arguments (anything that's required in order for that function to function)
// //Functions are declared but won't run until called upon (functions 101 - there are exceptions but that's later on in the course )


// // FUNCTION SYNTAX
// // you can name your function anything you'd like
// // you can name the arguments inside of your function anything you'd like
// // parameters: 'placeholder names' 
// // arguments: actual values being passed in


// // function nameOfFunction(anything you might need -- placeholder names){
//     // code to be executed
// }

// // // declaring a function
// function sumTwoDigits(digitOne, digitTwo){
//     let sum = digitOne + digitTwo
//     return sum;
// }

// // // run the function
// console.log(sumTwoDigits(8,2));
// console.log()

// function greeting(){

//     // return -- actually returns a value from a function
//     // return statement can only be used once within a function
//     return 'hello world';
//     // return 'bye!'
// }

// console.log(greeting());

// // WRONG
// function greeting(){

//     // console.log - prints to the console doesn't RETURN anything
//     console.log('hello world');
// }

// greeting();

// // you can pass in more arguments than there are parameters but passing in less, might cause an error or return something you don't want
// function sumNumbers(numOne, numTwo, numThree){
//     // console.log(numOne,numTwo,numThree);
//     return numOne + numTwo + numThree;
// }

// console.log(sumNumbers(4,6,8,10,5,3,26,84,34)); // 18
// console.log(sumNumbers(4,6)); //NaN

// // // you can define the args as you declare the function
// function sumNumbers(numOne = 4, numTwo = 5 ){
//     return numOne + numTwo
// }

// console.log(sumNumbers());


// function sumNumbers(numOne = 4, numTwo = 5, b, c ){
//     console.log(b,c);
//     return numOne + numTwo; //NaN
// }

// console.log(sumNumbers(1,2));

// function sumNumbers(numOne = 4, numTwo = 5, b, c){
//     let add = b + c;
//     console.log(add);
//     return numOne + numTwo + add;
// }

// console.log(sumNumbers(1,2));

// // 
// function sumNumbers(numOne = 4, numTwo = 5, b, c){
//     let add = b + c;
//     console.log(add);
//     return numOne + numTwo + add;
// }

// console.log(sumNumbers(1,2, 10, 20));

// // 
// function add() {
//     // declaring a new variable that's holding a 0 
// 	let sum = 0;

//     // for loop - loop through our list of arguments
// 	for(let i = 0; i < arguments.length; i++) {
//         // sum + each individual argument at every loop
//         console.log('currently at loop # ' + i);
// 		sum += arguments[i];
//         console.log(sum);
// 	}
//     // return the latest value of sum
// 	return sum;
// }
	
// console.log(`result of: ${add(1,2,3,4,5,6,7,8)}`);

// function sumNumbers(numOne, numTwo, numThree .... numFifty);
// function sumNumbers(...rest){
// 	let sum = 0;

//     // for loop - loop through our list of arguments
// 	for(let i = 0; i < rest.length; i++) {
//         // sum + each individual argument at every loop
//         console.log('currently at loop # ' + i);
// 		sum += arguments[i];
//         console.log(sum);
// 	}
//     // // return the latest value of sum
// 	return sum;
// }

// console.log(sumNumbers(1,2,4,55,6,7,9,9,6,543,2,3,45,67,8,9,87,654,32,4,3,456,78,76543));




// function nameOfFunction(anyParamsNeeded){
//     // code here
//     return // something
// }

// // call the function and pass in any args you need
// nameOfFunction(needOneParam);

// // //
// var billAmount = 58.86;

// function gratuity(){

// }







// // CHALLENGE ONE SOLUTION
// let billAmount = 100.58;

// // calculate gratuity
// // // return billAmt * 2
// function gratuity(){
//     let sum = billAmount * 0.2;
//     return sum;
//   }

// //   get total amt incl. gratuity
// // // 
// function totalWithGrat(someNumberIdontknowyet){
//   return (gratuity() + someNumberIdontknowyet);
// }

// // totalWithGrat(billAmount.toFixed(2));


// console.log(
//     // template literals
//   `your total, including gratutity is:
// 	$${totalWithGrat(billAmount)}`
// );

// // random questions about ch. one
// // using toFixed()  does round up
// console.log(7.78.toFixed(1));

// // escaping characters 
// let myName = 'Laura';
// console.log('hello my name isn\'t Tom, it\'s' + myName)

// // FUNCTION DECLARATION VS FUNCTION ASSIGNMENT
// // hoist: javascript's way of using a variable before it's been declared. js moves declarations towards the top where it's needed
// // function declaration hoists declaration & definition

// let myArr = [4,7,8,9];
// let course = {
//     instructor: 'Laura',
//     subject: 'javascript',
//     students: 32,
//     // key: value (function)
// }

// // function declaration // hoist
// console.log(add(3,5));
// function add(a,b){
//     return a + b;
// }

// //function assignment // no hoisting
// console.log(add(2,4));
// let add = function(a,b){
//     return a + b
// };


// // ANONYMOUS FUNCTIONS
// // nameless
// // way more common when embedded in larger sets of code

// let calculator = {
//     // key: add
//     // value: function 
// 	doSomethingWithNumbers: function(a,b) {
// 		return a + b;
// 	},
//     numbers: [3,4,6,6,7],
//     name: 'course 101'
// }

// calculator.doSomethingWithNumbers(2,3) // 5
// calculator.name; // 'course 101'

// let arrayOfMystery = [ 4,5,6,
//     ['anonymous','array'],
//     { name: 'anonymous object' },
//     function(){ return 'Anonymous Function!'}
// ];

// console.log(arrayOfMystery[0][1]); // array
// console.log(arrayOfMystery[1].name); // anonymous object
// console.log(arrayOfMystery[5]()); // anonymous function!





// // * CHALLENGE TWO SOLUTION * 
// let hands = ['rock', 'paper', 'scissors'];
// // 
// // let userPlay = prompt('rock,paper,or scissor');


// // // makes the computer return one of the three options at random 
// function getComputerHand(){ 
//     // random number
//     // integer - whole number
//     // return between 0-1

//     // returns one of the three 'hands' from hands array
// 	return hands[parseInt(Math.random()*10) % 3]
// }

// // // compare user's 'choice/hand' against the computer's random hand
// // // you provide the hand by passing it in as an argument 
// function compare(choice1, choice2){ 
// 	console.log("Player1: " + choice1); 
//   console.log("Player2: " + choice2);
  
//   if (choice1 == choice2){
// 		return "Tie!";
//   }
//   if (choice1 == "rock"){
// 		if (choice2 == "paper"){
//     	return "Player2 Won!";
// 		}
//     else{
//     	return "Player1 Won!";
//     }
//   }
//   else if (choice1 == "paper"){
//   	if (choice2 == "scissors"){
//     	return "Player2 Won!";
//     }
//     else{
//     	return "Player1 Won!";
//     }
//   }
//   else if (choice1 == "scissors"){
//   	if (choice2 == "rock"){
//     	return "Player2 Won!"
//     }
//     else{
//     	return "Player1 Won!"
//     }
//   }
// }

// let choice1 = getComputerHand(); // computer's choice //rock, paper, or scissor
// let choice2 = hands[2]; // our choice // from the hands array
// let game_result = compare(choice1, choice2); // get the result

// console.log(game_result); // log the result


// // SCOPE

// // let
// function getGreeting(name) {
//     // assigns a string to the variable greeting
// 	let greeting = "hello ";
//     console.log(greeting);
//     // returns the greeting + name being passed in as an argument
// 	return greeting + name;
// }
// // call the function (pass in the name )
// console.log(getGreeting('Shane')); // 'Hello Shane'
// // console.log(greeting) //undefined

// // // var
// function getGreeting(name) {
// 	var greeting = "hello ";
// 	return greeting + name;
// }
// getGreeting('Shane'); // 'Hello Shane'
// console.log(greeting) //undefined

// // const
// function getGreeting(name) {
// 	const greeting = "hello ";
// 	return greeting + name;
// }
// getGreeting('Shane'); // 'Hello Shane'
// console.log(greeting) //undefined

// function has its own scope
// function getTotal(a,b){
//     // if/else block creates its own scope
//     if(a > b){
//         let c = "random text";
//         console.log('a is greater this is c: ' + c);
//     } else {
//         console.log('b is greater');
//     }

//     console.log(c);
// }

// console.log(getTotal(8, 3));
// // console.log(c);


// // IIFE - immediately invoked function expressions

// // not immediately invoked
// function greeting(name){
//     console.log('hello ' + name);
// }

// greeting('Laura');

// (function(){
// 	let myVar = "look mom, private variables!";
//     console.log('myVar ' + myVar)
// 	//Do some stuff with myVar...
// })();

// console.log(myVar); //undefined;


// // SCOPE CHAIN & CLOSURES
// // looks for required variables from 'inside - out'

// city is a variable defined in the global scope
// let city = 'New Orleans';
// // function assignment
// let greet = function() {
//     // using a variable that was defined outside of this function's scope
//     // closure created when a variable defined outside of this scope is being used within this scope
// 	console.log('Hello ' + city);
// }

// greet(); // Hello New Orleans

// function outer() {
// 	let x = 'x';

//     // inner scope being created by nesting a function inside of another function
// 	function inner() {
//         // creating a variable within the inner (nested) function
// 		let y = 'y';

//         // by using x - defined in our parent scope - we are creating closure
// 		console.log(x); 
// 	}
//     // outside of our inner-most scope but inside our outer-scope
// 	console.log(x); 
// 	console.log(y); 
// }

// console.log(outer());

// // // trying to re-assign a variable within the nested scope that has been defined in the parent scope
// function outer() {
// 	 let x = 'x';
//      console.log(x);
// 	function inner() {
//         // trying to re-assign x 
//         x = "b";
//         console.log(x);
// 	}
//     inner();
// 	console.log(x); 
// 	// console.log(y); 
//     return x;
// }

// console.log(outer());

// // MORE COMPLICATED EXAMPLE OF NESTED SCOPE
// let landscape = function() {
//     // result can be accessed and used within both inner scopes
//     let result = "";

//     // first nested function - nested scope
//     let flat = function(size) {
//         for (let count = 0; count < size; count++)
//             result += " _ ";
//     };

//     // second function - 2nd nested scope
//     let mountain = function(size) {
//         result += "/";
//         for (let count = 0; count < size; count++)
//             result += " '";
//         result += "\\";
//     };

//     flat(3);
//     mountain(4);
//     flat(6);
//     mountain(1);
//     flat(1);
//     return result;
// };

// console.log(landscape());


// // VARIABLE NAME CONFLICTS
// // it's 'legal' to name things the same as long as they don't interact within the same scope, but don't do it - it's not good practice

// let coworkersName = 'David';
// let greet = function() {
// 	const coworkersName = 'Matt'
// 	console.log('line 447: ' + coworkersName);
// }

// console.log(' line 450 ' + coworkersName); // David
// greet(); // Matt

// let carolinaFintechSpring2021 = {
//     students = 35, 
//     instruct
// }
// function handleSubmitButton(){

// }

// let name = 'David';
// let greet = function(name) {
// 	console.log(name);
// }
// greet('joe'); // 'joe'

// //equivalant to

// let name = 'David';
// let greet = function(mySuperUniqueVariableName) {
// 	let name = mySuperUniqueVariableName;
// 	console.log(name);
// }
// greet('joe'); // 'joe'

// // THIS KEYWORD
// // refers to whichever scope you're inside of

// function 
// let
// var 
// .length()

// let teacher = {
// 	name: 'Assaf',
// 	sayName: function() {
//         name = "David";
// 		console.log(this.name);
//         console.log(teacher.name);
// 	}
// }
// teacher.sayName(); //'Assaf'

// function sayName() {
// 	console.log(this.name);
// }

let teacher = {
	teacher: 'Assaf',
	sayName: function() {
		console.log(this.teacher);
	}
}

console.log(teacher.sayName());


let teacher1 = {
	teacher: 'tom',
	speak: teacher.sayName
} //tom

let teacher2 = {
	teacher: 'Shane',
	speak: teacher.sayName
}

let student4 = {
	teacher: 'Shane',
	speak: teacher.sayName
}

// teacher1.speak(); // 'Assaf'
// teacher2.speak(); // 'Shane'
// student4.speak(); // 


