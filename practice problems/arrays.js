// ----- ** ONE ** -----

// //  * Task description: Write a method that creates a new array with given values 
// // * Expected Result: (3, 'a') => ['a', 'a', 'a'] 
// //  * Task Complexity: 1 of 5 
// //   arraySize - size of array 
// //   value - value to fill 
// //   returns - new array 



// ----- ** TWO ** -----
  // // * Task description: Write a method that reverts input array 
  // // * Expected Result: [1, 2, 3] => [3, 2, 1] 
  // //* Task Complexity: 1 of 5 
   // array - Array of any elements  




// ----- ** THREE ** -----
// //  * Task description: Write a method that clears array from all unnecessary elements, like false, undefined, empty strings, zero, null 
// // * Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3] 
// //  * Task Complexity: 1 of 5 
// //  array - An array of any elements 


  


// ----- ** FOUR ** -----
// //  * Task description: Write a method that returns an object composed of key-value pairs. 
// //  * Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 } 
// //  * Task Complexity: 2 of 5 
// //   array - a deep array of pairs 

// // ***** FIVE *****
// // create an array of names 
// // add three new names to the end of that array

// ***** SIX *****
//       find a needle in the haystack -> if a word matches 'needle' return the index of that word within that array



// //  ***** Seven *****
// //     Return an array, where the first element is the count of positives numbers and the second   element is sum of negative numbers.

// // If the input array is empty or null, return an empty array.


// // --- SOLUTIONS ---
// ONE - FOUR: https://github.com/andrewborisov/javascript-practice/tree/master/arrays

// // --- FIVE --- 
// let names = ['george', 'sarah', 'andrea', 'thales', 'gabi'];
// names.push('carlos', 'monica', 'caro');
// console.log(names)

// SIX - SOLUTION
// function findNeedle(haystack) {
//   //   map through array of mambo jumbo

//   let count = 0;
//   let result;
//   haystack.map((word) => {
//     //     increase count at every iteration
//     let position = count++;
//     // console.log('first: ' + position);
//     // if word matches 'needle'
//     if (word == "needle") {
//       //       return index --> need a counter variable that holds the count we're on maybe minus one
//       result = `found the needle at position ${position} `;
//       //   return  result;
//     }
//   });
//   return result;
// }

// console.log(
//   "running the function: " +
//     findNeedle([
//       "3",
//       "123124234",
//       undefined,
//       "needle",
//       "world",
//       "hay",
//       2,
//       "3",
//       true,
//       false,
//     ])
// );

// // better solution:
// function findNeedleTwo(haystack) {
//   return "found the needle at position " + haystack.indexOf("needle");
// }

// console.log(
//   "running the function: " +
//     findNeedleTwo([
//       "3",
//       "123124234",
//       undefined,
//       "needle",
//       "world",
//       "hay",
//       2,
//       "3",
//       true,
//       false,
//     ])
// );

// // SEVEN - SOLUTION 
// function countPositivesSumNegatives(input) {
//   //   define two arrays -> one for positives and one for negatives
//   //   then sum each of the arrays up
//   // return a new array with just the two sums

//   let positives = [];
//   let negatives = [];
//   let sums = [];

//   if (input == null || input.length == 0) return [];

//   input.map((num) => {
//     if (num < 0) {
//       negatives.push(num);
//     } else if (num > 0) {
//       positives.push(num);
//     }
//   });

//   let posLength = positives.length;
//   let negSum = negatives.reduce((a, b) => a + b, 0);
//   //   console.log(negSum);
//   sums.push(posLength, negSum);

//   return sums;
// }

// console.log(
//   countPositivesSumNegatives([
//     0,
//     2,
//     3,
//     0,
//     5,
//     6,
//     7,
//     8,
//     9,
//     10,
//     -11,
//     -12,
//     -13,
//     -14,
//   ])
// );