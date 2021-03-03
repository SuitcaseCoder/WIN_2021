// hi there! I wanted to give y'all a few more notes on today's class because I know how difficult this class can be

// ARRAY FUNCTIONS

// In order to understand array functions, we first have to understand how javascript works in the background. 
// The JavaScript language is 'saved' as one giant object. 
// Within the 'giant js object', there are a ton of key:value pairs. 
// Some of those key:value pairs are organized by what they can be used for
    // // for example, array functions, are just regular functions that we execute by chaining it to an array, so it grabs the entire array, loops through each item and executes some code. 
    // there are different types of functions/methods available to us that are stored in the 'java


let js = {
    arrayFunctions:
        [
            // iterate through arrays
            {map: function(){}},
            // iterate through arrays but return something based on a conditional
            {filter: function(){}}
        
        ],
    methods: [
        {},
    ]
}

// // PRACTICE ARRAY FUNCTIONS
// let animals = ['birds','dogs','cats','bears','lions', 'monkeys']; //array // [element, element, element, element]
// let movies = ['the shining', 'parent trap', 'crazy stupid love'];

// // I want to map through the animals list
// let sentences = animals.map(
//     // I'm gonna provide 'map' a function -telling it what to do at each iteration
//     // // that function is going to require a parameter (which you get to name) 
//     // // the argument being passed in will ALWAYS be whichever element in the array that the 'loop'/iteration is currently on
//     function(animal){
//         // console.log(element);
//         return `${element} are found at the zoo.`;
//     }
//     // map will take the result of the above function and create a new array with it.
// );

// console.log(sentences);


// // ------
// let animals = ['birds','dogs','cats','bears','lions', 'monkeys']; 
// let movies = ['the shining', 'parent trap', 'crazy stupid love'];

// // .map(function(){

// // })
// let sentences = animals.map(
//     function(animal){
//         return `${animal} are found at the zoo.`;
//     }
// );

// console.log(sentences);
// // ------

// functions take in arguments but use parameters until that argument is passed in
// function myFunction(parameter, placeHolderName, willBeReplaced){
//     return `hello, ${parameter}, today we're talking about: ${placeHolderName}, ..... ${willBeReplaced}`;
// }

// console.log(myFunction('susan', 'javascript', 'ladeeda'));
// console.log(myFunction('tom', 'html', 'wooohoo'));


// function writeOnBoard(studentNumberTwo, studentNumberThree){
//     // console.log(...rest);
 
//     // write on board
//     // table 1: studentNumberFour, studentNumber15
//     // table 2: studentNumberTwo, studentNumberThree
// }

// console.log(writeOnBoard(['billy','wilson', 'jake', 'tom', 'david', 'mike', 'gabby' , 'alex', 'john' ]));

