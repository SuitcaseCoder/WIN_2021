// // ** ---- ** FUNCTIONS PART TWO ** ---- **

// // FUNCTIONS AS ARGUMENTS
//Declare an add function
// // considered a callback function because it's called back on in the doMath fucntion
// function add(first, second) {
// 	return first + second;
// }

// function multiply(a, b){
//     return a * b;
// }
// //Declare a function that takes a function as an argument
// // considered a high-order function because it accepts a function as an argument 
// function doMath(operation, moreMath, number1, number2) {
//     // // executing the 'operation' function
//     let result = operation(number1, number2); //2
//     console.log(result);
//     result = result  + moreMath(number1,number2) // 3
//     console.log(result);
// 	return result;
// }
// console.log(doMath(multiply, add, 1, 2));

//Pass a function into another.
// let sum = console.log(doMath(add, 1, 2));

// // ARRAY FUNCTIONS 

// // FILTER * 
// // filters through by looping through the array and checking if a conditional is true, if it is true it will add it to a brand new array and return the new array
// // creates a brand new array 
// // argument has to be a function
// let students = [
// 	{name: 'John Lennon', average: 90},
// 	{name: 'Ringo Starr', average: 58},
// 	{name: 'Paul McCartney', average: 82}
// ];

// let passingStudents = students.filter(function(eachItemFromArray){
// 	return eachItemFromArray.average > 100;
// });

// THIS IS WHAT FILTER WOULD LOOK LIKE WITHOUT FILTER METHOD 
// Return all elements of an array that pass a truth test.
// - behind the scenes of a filter/find array function
// filter = function (collection, test) {
//     const passedArray = [];
//     each(collection, (element, index, array) => {
//       if (test(element, index, array)) {
//         passedArray.push(element)
//       }
//     })
//      return passedArray;
//   };

// console.log(passingStudents);

// // // if we didn't have filter array function we needed to do this:
// function checkAverage(students){
//     let passing = [];
//     for(let i =0; i<students.length; i++){
//         console.log(students[i]);
//         if(students[i].average > 60){
//             passing.push(students[i]);
//         }
        
//     }
//     return passing
// }
// console.log(checkAverage(students));

// console.log(students.forEach(function(student){
//      console.log()
// }))





// result of filter: 
// passingStudents === [
// 	{name: 'John Lennon', average: 90},
// 	{name: 'Paul McCartney', average: 82}
// ];

// // FIND ARRAY FUNCTION
// // same as filter, but instead returns first item that matches conditional
// let students = [
// 	{name: 'John Lennon', average: 90},
// 	{name: 'Ringo Starr', average: 58},
// 	{name: 'Paul McCartney', average: 82}
// ];

// let passingStudents = students.find(function(student){
//     // it will return the first item in the array that meets tthis conditional statement
// 	return student.average > 50;
// });
// console.log(passingStudents);
// // passingStudents === [
// // 	{name: 'John Lennon', average: 90}
// // ];

// // MAP ARRAY FUNCTION
// // iterates through every item in the array
// // executes code to each item
// // returns a new array
// let students = [
// 	{firstName: 'Cam', lastName: 'Newton'},
// 	{firstName: 'Ted', lastName: 'Ginn'},
// 	{firstName: 'Greg', lastName: 'Olsen'}
// ]

// let fullNames = students.map(function(student){
// 	return `${student.firstName} ${student.lastName}`;
// })

// fullNames === ["Cam Newton", "Ted Ginn", "Greg Olsen"]

// // REDUCE ARRAY FUNCTION
// let students = [
// 	{name: 'Cam Newton', assignmentsCompleted: 6},
// 	{name: 'Ted Ginn', assignmentsCompleted: 10},
// 	{name: 'Greg Olsen', assignmentsCompleted: 8}
// ]

// ** note for Laura - come back to this ** 
// // the idea of reduce is to reduce an entire array essentially into one item, so this is nt the best example
// let animals = ['cat', 'dog', 'snail', 'bird', 'bear'];
// let result = animals.reduce(function(letter, current){
//     console.log(current[0]);
//     return current[0] == letter;
// },'b');
// console.log(result);

// let totalAssignments = students.reduce(function(sum,current){
//     console.log(`current ${current.name} & sum: ${sum}`);
// 	return sum + current.assignmentsCompleted;
// }, 0);

// totalAssignments === 24;

// // CHALLENGE ONE SOLUTION
// let superHeroes = [ ["Batman", "Bruce Wayne"],
//                    ["Spiderman", "Peter Parker"],
//                    ["The Flash", "Barry Allen"]];

// let secretIdentity = superHeroes.map(
//     function(revealArray){
//         return revealArray.join(" is ");
//     }
// );
// console.log(secretIdentity);
// console.log(secretIdentity.join(" ----- "));

// let food = ['burgers', 'salad', 'tomatoes', 'fries'];
// let newFood= food.join(" ");
// console.log(newFood);

// // ASYNCHRONOUS PROGRAMMING 
// // allows code to run independently from other code
// // think of the restaurant example

// // CALLBACK PATTERN

// setTimeout(fx, time in miliseconds);
// run the function - first parameter AFTER time in milliseconds goes by
// setTimeout(function(){
// 	console.log('later')
// },9000);

// // stand-alone console log
// // printing to the console
// console.log('now');

// // event listener
// button.addEventListener('click', function(){
// 	alert('click');
// })

// 
// getData('/my-api/data', function(data) {
// 	console.log('got data', data)
// });

// console.log('hi');

// // THIS IN AN ASYNC FUNCTION
// let teacher = {
// 	name: 'Shane',
//     // saving a function to the key labeled 'speak'
// 	speak: function() {
// 		//Maybe you're fetching data from an API, or getting user input
//         // // set Timeout essentially delays a function by x milliseconds
//         // // inner scope
//         // // because setTimeout belongs to the 'window' object as a part of javascript, any time you try to reference 'this' inside of a setTimout it will try to find something within the 'window' object not the object you've defined.
		// setTimeout(function(random = "david"){
        //     // this is referring to the object that's calling upon this THIS keyword
        //     console.log('this inside of setTimeout: ' + random);
		// 	console.log('later my name is ' + this.random); //undefined
		// },5000)
		
//         console.log(this.name); // shane
//         // look for 'this' in its immediate scope first and then move outward
// 		console.log('Now my name is ' + this.name); // 'Shane'
// 	}
// }

// let tomObj = {
//     teacher: 'tom',
//     doSomething: teacher.speak()
// }
// tomObj.doSomething;

// teacher.speak();

// // ASSIGN CONTEXT

// // CLOSURE HACK
// let teacher = {
// 	name: 'Shane',
//     name1: 'bob',
//     name2: 'george',
// 	speak: function() {
		
// 		//Save this to a variable
//         console.log('this on line 225: ' + this.name);

// // assign context by literally taking 'this' and assigning it to a variable 
// 		let self = this;
		
// 		//self is visible inside function because of closure
// 		setTimeout(function(){
// 			console.log('later my name is ' + self.name, self.name2);
// 		},1000);
// 	}
// }

// teacher.speak();
// console.log(teacher.name)
// console.log(teacher.name1)
// console.log(teacher.name2)


// // CALL() AND APPLY()
// let teacher = {name: 'Shane'};

// // function assignment
// let speak = function(item1, item2){
// 	console.log(this.name, item1, item2);
// }

// // call and apply are doing the exact same thing
// // assigned when it's being executed
// // call accepts the parameters as is
// // apply accepts the parameters within an array
// // Apply only works with Arrays (A:A);
// speak.call(teacher, 'coffee', 'ramen'); //'Shane', 'coffee', 'ramen'
// speak.apply(teacher, ['coffee', 'ramen']); //'Shane', 'coffee', 'ramen'

// // function.bind
// // assigning context when function is defined

// let teacher = {
// 	name: 'Shane',
// 	speak: function() {
		
// 		//Bind a function to a specific context
//         // assigning a fx to a variable
// 		var boundFunction = function(){
//             // inside of this function, we want to use the this keyword
// 			console.log('later my name is ' + this.name);
//             //  in order to use 'this' keyword we have to bind it by passing 'this' in as an argument to the bind method
// 		}.bind(this);
		
// 		//boundFunction will always run in bound context
// 		setTimeout(boundFunction,1000);
// 	}
// }

// teacher.speak();

// let zoo = {
//     mammals: ['giraffes', 'dolphins', 'dogs'],
//     zookeepers: 39,
//     // zooObject: this,
//     name: 'san diego zoo',
//     tellMeAboutZoo: function(){
//         console.log(this.mammals);
//     },

// }

// console.log(zoo.tellMeAboutZoo());
// // console.log(zooObject.mammals);
// let zooObject = zoo.this;
// console.log(zooObject);

// // assigning context using es6 arrow functions //similar to how we assign functions to variables in call() and apply();
// let someFunc = function(...params) {
// 	//Some code here
// }

// let someFunc = (...params) => {
// 	//Some code here
// }

// // function declaration
// function doSomething(param1, param2){
//     //code
//     return param1 + param2
// }

// // // functin assignment
// let doSomething = (param1,param2) => {
//     return param1 + param2;
// }

// console.log(doSomething(532,907));


// let teacher = {
// 	name: 'Shane',
// 	speak: function() {

//         function boundFunction(){
//             console.log(`later...`);
//         }
// 		//Bind a function to a specific context
// 		var boundFunction = () => {
// 			console.log('later my name is ' + this.name);
// 		};
		
// 		//boundFunction will always run in bound context
// 		setTimeout(boundFunction,1000);
// 	}
// }

// teacher.speak();

// let cerealsINeverGot = ['oreo os', 'capn crunch', 'cheerios', 'lucky charms', 'fruity pebbles'];

// cerealsINeverGot.map(function(item){
//     console.log(item + ' is delicious!');
// })

// //arrow function 
// // what's being passed in as a argument to replace the parameter, is going to be each individual item (or element ) in an array
// cerealsINeverGot.map((cereal) => {
//     console.log('printing out cereal which is param inside map function : ' + cereal);
//     console.log(cereal + ' is delicious!');
// })

// //arrow function 
// //if only one parameter is needed, you don't need to wrap it in parenthesis
// cerealsINeverGot.map(item => {
//     console.log(item + ' is delicious!');
// })

// function multiply(firstNumber, secondNumber){
//     return firstNumber * secondNumber
// }

// console.log(multiply(34, 813));

// let result = (firstNumber, secondNumber) => {
//     return firstNumber * secondNumber;
// }
// console.log(result(34, 813));

// // CHALLENGE THREE SOLUTION
// // 'slideshow' object comes from the last slide in week 3 day 2's slidees.

// //CHALLENGE FOUR SOLUTION

var show = {
	photList: ['an array'],
	current: 0, //number,
	nextPh: function() {}, //function, --> if/else statement
	prevPh: function(){}, //function, --> if/else statement
	currPh: function() {}, //fx--> return
	playIn: null, //null 
	play: function(){}, //function --> setInterval() // assigning context (this)
	paus: function(){}, //function --> clearInterval() method
}

var slideshow = {
    photoList: ['birds', 'puppies', 'rainbows', 'kittens', 'babies'],

    currentPhotoIndex: 0,

    nextPhoto: function() {
        if(this.currentPhotoIndex < this.photoList.length - 1) {
            this.currentPhotoIndex++;
            console.log('currentPhoto is: '+ this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('End of Slideshow');
              this.pause();
        }
    },

    prevPhoto: function() {
        if(this.currentPhotoIndex > 0) {
            this.currentPhotoIndex--;
            console.log('currentPhoto is: ' + this.photoList[this.currentPhotoIndex]);
        } else {
            console.log('Start of Slideshow');

        }
    },

    getCurrentPhoto: function() {
        return this.photoList[this.currentPhotoIndex];
    },

    playInterval: null,

    play: function() {
        var self = this;
        this.playInterval = setInterval(function(){self.nextPhoto()}, 2000)
    },

    pause: function() {
        clearInterval(this.playInterval);
    }

}


