// ** ARRAYS
// data storage that's basically of list of items
// always defined with square brackets[]
// all arrays start at 0;
// every item is separated with a comma
// it can hold all data types

// let teachers = ["Melissa", "Yusuf", "Laura", "Gabriela", "Andrea", "Taylor"];;
// console.log(teachers[1]);
// console.log(teachers[0]);
// teachers[0] // Melissa

// how to access items in an array
// nameOfArray[# of item in the array that you want]
// zero-based (all arrays start at 0);

// let laura = ['pizza', 30, 'Texas', null, undefined, 'frogs'];
// console.log(laura[1]);

// --- ARRAY FUNCTIONS ---

// .length() : return the length of the array (how many items);
// let teachers = ['bob', 'gabe','taylor','sarah'];
// .length chained to the end of the name of the array which you want to find the length of
// console.log(teachers.length);
// let amountOfTeachers = teachers.length;
// console.log(amountOfTeachers);

// PUSH & POP
// push - adds to the end of the array
// pop - removes from the end of the list
// changes and returns the original array
// let teachers = ['bob', 'gabe','taylor','sarah'];
// teachers.push('Laura');
// console.log(teachers);
// teachers.pop();
// console.log(teachers);

// //SHIFT & UNSHIFT
// //unshift - adds to  the begining of the list
// //shift - removes from the beginning of the list
// //changes and returns the original array
// let teachers = ['bob', 'gabe','taylor','sarah'];
// teachers.unshift('Laura');
// console.log(teachers);
// teachers.shift();
// console.log(teachers);

// // you can define an empty array and add to it later
// let students = [];
// students.push('Erin', "David", 'Nicholas');
// console.log(students);

// // arbitrary adding items to an array
// let teachers = ['bob', 'gabe',"taylor",'sarah', "I don't remember my teacher's name"];
// console.log(teachers);

// teachers[4] = 'marcus';
// console.log(teachers);
// teachers[2] = "Lydia";
// console.log(teachers);

// // template literals
// console.log(`my list of students are: ${teachers}`);

// FINDING AN ITEM
// let grades = [99,90,89,50];
// let failing = grades.indexOf(50);
// console.log(failing);

//  let teachers = ['bob', 'gabe',"taylor",'sarah'];
//  console.log(teachers.indexOf('gabe'));

// // SLICE
// // creates a brand new array containing the items you've 'sliced' (removed)
// // accepts 2 parameters (starting point, ending point (not including the ending point))

// let animals = [
//   "frogs",
//   "bats",
//   "giraffes",
//   "gorillas",
//   "lions",
//   "ladybug",
//   "alligator",
//   "parrot",
// ];
// let newAnimals = animals.slice(2, 4);
// // console.log(newAnimals);
// // console.log(animals);

// let otherAnimals = (2, animals.length);
// console.log(otherAnimals);

// // SPLICE
// // changes exisiting array
// // accepts 3 parameters: (starting point (array index), how many items you want to remove, which items you want to add )
// //
// let animals = [
//   "frogs",
//   "bats",
//   "giraffes",
//   "gorillas",
//   "lions",
//   "ladybug",
//   "alligator",
//   "parrot",
// ];

// animals.splice(2,4, 'hedgehog', 'sharks', 'camel', 'bear', 'kangarroo');
// console.log(animals);
// console.log(animals[5]);

// ITERATING THROUGH AN ARRAY (LOOPING THROUGH AN ARRAY)

// FOR LOOPS
// let animals = ['frogs','bats', 'hedgehog','sharks','camel','alligator','parrot','eight']

// console.log(animals.length);
// // // for (starting point; until what point we're going to loop through data set; how to iterate (one-by-one))
// for(let i = 0; i <= animals.length; i++){
//     // execute code to be applied to EACH item(each animal)
//     console.log(`My favorite animal today is: ${animals[i]}`);
// }

// let cities = ['Paris', 'Sydney', 'Charlotte', 'San Diego', 'Berlin'];

// for(let i = 0; i < cities.length; i++){
//     console.log(`${cities[i]} has the best food`);
// }

// // RETURN TO FOR EACH AFTER LEARNING FUNCTIONS

// // SORTING ARRAYS
// let scores = [100, 54, 300, 23, 90];
// scores.sort();
// console.log(scores);

// let nums = [3,7,2,9,0,4 ];
// console.log(nums.sort());

// let plants = ['trees', 'grass', 'coral', 'fern'];
// console.log(plants.sort());
// console.log(reverse.sort());

// // // reverse
// console.log(scores.reverse());
// console.log(nums.reverse());

// ---- ** FUNCCTION BREAK ** -----

// // function : js keyword -- hey I'm about to define a function
// // nameOfYourFucntion : hey when i reference this function I'm going to call by its given name -- dev gets to define the name of the function -- camelCase
// // parameters : defined by parenthesis -- items/variables/things that are required for the function to run.
// // any code you want to execute

// let donationMade = prompt("how much do you want to donate"); // amt of money user wants to donate
// let amountSoFar = 1000;

// function nameOfFunction(donationMade, amountSoFar) {
//   let stringNum = Number(donationMade);
//   // any code you want to be executed
//   console.log(`so far we have ${stringNum + amountSoFar}`);
// }

// // run the function:
// // calling the anem of the fucntion (providing the paramets needed)
// nameOfFunction(donationMade, amountSoFar);

// ---- ** END FUNCCTION BREAK ** -----

// ***OBJECTS***
// // way to store a lot of info with 'labels'
// // defined with a curly bracket {}
// // labels are called key:value pairs
// // actual data being stored is being stored as a value within each property
// let course = {
//   key: "value",
//   instructor: "Laura",
//   ta: ["melissa", "yusuf"],
//   length: 4,
//   students: 36,
//   subject: "javascript",
// };

// // accessing items in an object
// // dot notation
// console.log(course.students);
// console.log(course.subject);

// // bracket notation -- requires quotes around the property
// nameOfObject.nameOfProperty
// console.log(course);
// console.log(course["students"]);
// console.log(course["subject"]);

// // reassigning values
// // use dot / bracket notation to reassign the value to whatever you want
// let zoo = {
//     reptile: 'crocodile',
//     amphibian: 'frogs',
//     mammals: 'dolphins',
//     rodents: 'gopher'
// }

// zoo.amphibian = 'newt';
// zoo.mammals = 'sheep';

// // // adding a key:value pair to the object
// zoo.marsupials = 'koala';

// console.log(zoo);

// // ADVANCED OBJECTS
let zoo = {
    reptile: ['crocodile','snakes','lizards', 'horned frogs'], // 1
    sections: ['safari', 'aquarium', 'aviary'], // 2
    management: {
        ceo: 'tom',
        vp: 'liz',
        zookeepers: ['jake', 'david', 'rose', 'alexis']
    }, // 3 
    numAnimals: 5000,
    open: true,
}
// console.log(zoo.reptile[1]);
// console.log(zoo.sections[2]);
// console.log(zoo.management.vp)
// console.log(zoo.management.zookeepers[2]);
// zoo.new = 'new item';
// // console.log(zoo);

// zoo.reptile.push('another reptile');
// console.log(zoo.reptile);

// pointing to a new spot in memory
// zoo.ceo = ['tom', 'lisa'];
// console.log(zoo.ceo);

// // changing the value of that variable
// var tomato = 'red';
// tomato = 'green';

// var fruit = ['tomato', 'starwberry', 'mango'];

// // Value types
// / changing the values 
// let x = 1;
// let y = 1;
// x === y; //true

// let y = x; 	// x == 1, y == 1
// x === y; 	// true

// x = 2; 		// x == 2, y == 1
// x === y; 	// false

//Reference types
// let x = {name: 'Evan'}
// let y = {name: 'Evan'}
// x === y; //false;

// let y = x; 		//x and y are {name: 'Evan'}
// x === y;		//true

// x.name = 'Noah'
// y.name; // 'Noah'

// typeof -- js keyword that provides the data type of a value/variable
console.log(typeof 7);

let animals = ['dog', 'cat', 'mouse'];
console.log(typeof animals);

let dogs= {
    name: 'joe',
    breed: 'great dane',
    color: 'gray'
}

// {
//     "name" : "joe",
//     "breed": "great dane"
// }

console.log(typeof dogs.breed);





