// // FRIDAY REVIEW DAY

//  let = [2,6,'red', 'blue', 90, null, 'string'] // array
//  let nameOfObject = {
//      key: 'value',
//     //  anonymous function
//      action: function(param){
//         //do something
//      },
//  }

//  let -- has local scope, can be re-assigned
//  const -- cannot be reassigned
//  var -- has global scope, can be re-assigned

// // FUNCTIONS

// anything inside the parenthesis are ALWAYS placeholder names that will be replaced with the argument being passed in when it gets executed
// function functionName(params){
//     // code to be executed
//     // another function, math, console, really anything that code an do, for loops, etc. 

//     // always returns something
//     return params + ' are my params';
// };
// console.log(functionName('this is my argument that will replace my params'));

// // define parameters in function
// function multiplyTwoNumbers(num1 = 4, num2 = 9){
//     return num1 * num2;
// }

// console.log(multiplyTwoNumbers(6,10));

// //
// function subtractTwoNumbers(a, b){
//     let result = a - b;
//     return result * 5; // 120
// }
// console.log(multiplyTwoNumbers(6,10));

// // 
// function multiplyTwoNumbers(num1, num2){
//     console.log('seeing what values of num1 & num2 are: ' + num1,num2); //just for us devs to know what's going on
//     // num1 = 6;
//     console.log('1: ' + num1);
//     // num2 =10;
//     console.log('2: ' + num2);
//     return num1 * num2;
// }

// console.log(multiplyTwoNumbers(3,9));

// // 
// function multiplyTwoNumbers(num1 = 1, num2 =2){
//     console.log('num1 & num2 ' + num1 + num2); //just for us devs to know what's going on
//     num1 = "six";
//     // console.log('1: ' + num1);
//     num2 ="ten";
//     // console.log('2: ' + num2);
//     return num1 * num2;
// }

// console.log(multiplyTwoNumbers(7,24));

// // 
// function doMath(a){
//     console.log(a);
//     if(a !== "NaN"){
//         return a * 10;
//     } else {
//         return 'doesn\'t work';
//     }
// }

// doMath(prompt('what\'s your favorite number'));

// // 
// var cookie = "oreo";

// function favoriteCookie(snack){
//     return `My favorite cookie is: ${snack} `;
// }

// console.log(favoriteCookie(cookie)); // oreo

// function redefineCookie(snack){
//     snack = 'choco chip'
//     return `cookie is now: ${snack} `;
// }

// console.log(redefineCookie(cookie)) //choco chip
// console.log('cookie value after redefine: ' + cookie);
// // so global variables can be passed in as arguments to functions and then within the function, they can be redefined (reassigned) and within that function they will have the value of however you reassigned the paramter (which originally was the global variable) but if you reference the global variable outside of the function (even after its run) the value of the global variable will not change

// // nested function

// function add(num1, num2){
//     let addition = num1 + num2
//     console.log(addition); // 7

//         function multiply(test){
//             // console.log(addition);//7
//             let num3 = 23;
//             return num3 + test;  
//         }

//     console.log(multiply(4)); // 34
//     // return num3 + addition; // 30 
// }

// add(5,2);


// // template literals vs concatenation

// concatenation: string things together / similar to how a train is made up of a ton of train cars 
// template literals doe the same thing just different syntax

// let tvQuote = 'marsh melons, marshmallows, sorry';
// let episode = 7;
// let season = 4;

// // // concatenation
// // // aware of spaces, escape characters, plus, variables don't have quotes around them
// let sentence = "'My favorite TV Quote is '" + tvQuote + ' which is found on season ' + season + ' in episode ' + episode;
// console.log(sentence);
// // // not like this:
// // console.log("my fave quote is tvQuote in season season in episode episode");
// // console.log(my fave quote is tvQuote in season season in episode episode)

// // // template literals use back ticks and you wrap any existing variable inside the ${};
// let templateString = `My favorite TV quote is ${tvQuote} which is found on season ${season} in episode: ${episode}`;

// let animals = ['dog', 'cat', 'frog', 'mouse', 'bear', 'snake', 'jellyfish'];

// console.log(animals[4]);
// console.log(animals.length); // number of elements in an array

// 
// for(let i=animals.length; i < animals[0]; i++){
//     console.log(`my favorite animal at the moment is: ${animals[i]}`)
// }

// for(let i=animals.length - 1; i >= 0; i--){
//     console.log(`my favorite animal at the moment is: ${animals[i]}`)
// }

// // same but forEach
let animals = ['dog', 'cat', 'frog', 'mouse', 'bear', 'snake', 'jellyfish'];

// animals.forEach(function(eachAnimal){
//     console.log(`current animal: ${eachAnimal}`);
// })

// function printFaveAnimal(){
//     return animals.forEach(function(eachAnimal){
//         // console.log(`current animal: ${eachAnimal}`);
//     });
// } 

// function printCurrentFaveAnimal(){
//     return animals[3];
// }

// printFaveAnimal();
// console.log(printCurrentFaveAnimal());

// // to do list remove one item when checked
// // get the elements that have class of 'task'
// let tasks = document.getElementsByClassName('task');  // array

function removesItem(){
    // add an eventListener to the item being clicked on
    tasks.forEach(function(task){
        task.addEventListener('click',  function(event){
            task.remove();
        })
    })
}

removesItem()


// let tasks = document.getElementsByClassName('task');  // array
// console.log(tasks);

// function removesItem(){
//     console.log(tasks); //array
//     // add an eventListener to the item being clicked on
//     tasks[3].addEventListener('click', function(event){
//         console.log('hey we made it here');
//     })
// }

// removesItem()







// animals[0]
// animals[1]