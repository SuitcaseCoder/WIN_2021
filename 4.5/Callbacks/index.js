// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some; //10
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum; //10
//   }
  
//   let result = myCalculator(5, 5);
//   myDisplayer(result);

//   //

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     myDisplayer(sum);
//   }
  
//   myCalculator(5, 5);

// //
// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }

// function printResults(someNumber){
//     return `this is a random number: ${someNumber}`;
// }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(5, 5, printResults);

// //
// let numbers = [1, 2, 4, 7, 3, 5, 6];
// numbers.sort((a, b) => a - b);
// console.log(numbers); // [ 1, 2, 3, 4, 5, 6, 7 ]

// // 
// // definted & executed first
// console.log('1')

// setTimeout(function afterTwoSeconds() {
//   //defined second
//   //executed third
//   console.log('inside my callback function inside the functin being passed in: 2')
// }, 2000)

// // defined third and executed second
// console.log('3')

// Date is a JS keyword it's pulling from an existing object template and creating a new instance from that object template
// let d = new Date();
// console.log(d);

// //
// setInterval(myFunction, 1000);

// function myFunction() {
//   let d = new Date();
//   document.getElementById("demo").innerHTML=
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds();
// }
  
//   write a setTimeout function that executes another function after 5 seconds
// that 2nd function should return the sum of 2 numbers
// setTimeout((num1 = 5, num2=8)=>{
//     return num1 +num2
// }, 5000);


// //
// XMLHttpRequest - is another javascript
// // allows us to create new instances of an xmlhttprequest object
// let req = new XMLHttpRequest(); 
// console.log(req); // will only show on the browser

// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }

//   function getFile(myCallback) {

//     let req = new XMLHttpRequest();
//     console.log(req);
//     req.open('GET', "/Users/lauraruizroehrs/Desktop/TECHTALENTSOUTH/Carolina Fintech WIN/4.5/Callbacks/mycar.html");
//     req.onload = function() {
//       if (req.status == 200) {
//         console.log('req.status: '+ req)
//         console.log(this);
//         // //  this is referring to whatever 'response' you get back from an http request
//         // // oftentimes it will come back as a json structre
//         // // can compare 'this' to what you get in the response body on postman
//         myCallback(this.responseText);
//       } else {
//         //   // req.status is coming from the result of a rquest,it's going to be the status code from a request (100,200,300,400,500);
//         myCallback("Error: " + req.status);
//       }
//     }
//     // // .send() actually sends the request
//     req.send();
//   }
  
//   getFile(myDisplayer); 

// // 
// // same example but with actual api

// function myDisplayer(some) {
//     // console.log(some);
//     document.getElementById("demo").innerHTML = some;
//   }

//   function getFile(myCallback) {
//     let req = new XMLHttpRequest();
//     console.log(req);
//     req.open('GET', "https://jsonplaceholder.typicode.com/comments/8");
//     req.onload = function() {
//         console.log(`status: ${req.status}`);
//       if (req.status == 200) {
//           console.log(`this (response object): ${this.response}`);
//           console.log(`email: ${this.name}`);
//         myCallback(this.email);
//       } else {
//         console.log(`status: ${req.status}`)
//         myCallback("Error: " + req.status);

//       }
//     }
//     req.send();
//   }
  
//   getFile(myDisplayer); 

// //
// function ajaxCall() {
//     let ajaxRequest = new XMLHttpRequest();
  
//     ajaxRequest.onreadystatechange = function() {
//       if (ajaxRequest.readyState == XMLHttpRequest.DONE ) {
//         if (ajaxRequest.status == 200) {
//           let myDiv = document.getElementById('main');
//           let newDiv = document.createElement('div');
//           newDiv.innerHTML = ajaxRequest.responseText;
//           myDiv.appendChild(newDiv);
//         }
//         else if (ajaxRequest.status == 400) {
//           console.log('There was an error 400');
//         }
//         else {
//           console.log('something else other than 200 was returned');
//         }
//       }
//     };
  
//     ajaxRequest.open("GET", 'http://jsonplaceholder.typicode.com/todos', true);
//     ajaxRequest.send();
//   }

//   ajaxCall();

// //
// var form = document.querySelector('form')
// form.onsubmit = function (submitEvent) {
//   var name = document.querySelector('input').value
//   request({
//     uri: "http://example.com/upload",
//     body: name,
//     method: "POST"
//   }, function (err, response, body) {
//     var statusMessage = document.querySelector('.status')
//     if (err) return statusMessage.value = err
//     statusMessage.value = body
//   })
// }

// var form = document.querySelector('form')
// form.onsubmit = function formSubmit (submitEvent) {
//   var name = document.querySelector('input').value
//   request({
//     uri: "http://example.com/upload",
//     body: name,
//     method: "POST"
//   }, 
// //   gave our second function a name so we can call it by its name
//   function postResponse (err, response, body) {
//     var statusMessage = document.querySelector('.status')
//     if (err) return statusMessage.value = err
//     statusMessage.value = body
//   })
// }

// //
// document.querySelector('form').onsubmit = formSubmit

// function formSubmit (submitEvent) {
//   var name = document.querySelector('input').value
//   request({
//     uri: "http://example.com/upload",
//     body: name,
//     method: "POST"
//   }, postResponse)
// }

// function postResponse (err, response, body) {
//   var statusMessage = document.querySelector('.status')
//   if (err) return statusMessage.value = err
//   statusMessage.value = body
// }


// //
// module.exports.submit = formSubmit

// function formSubmit (submitEvent) {
//   var name = document.querySelector('input').value
//   request({
//     uri: "http://example.com/upload",
//     body: name,
//     method: "POST"
//   }, postResponse)
// }

// function postResponse (err, response, body) {
//   var statusMessage = document.querySelector('.status')
//   if (err) return statusMessage.value = err
//   statusMessage.value = body
// }

// // different js file
// var formUploader = require('formuploader')
// document.querySelector('form').onsubmit = formUploader.submit

// var fs = require('fs')

// fs.readFile('/Does/not/exist', handleFile)

// function handleFile (error, file) {
//   if (error) 
//   return console.error('Uhoh, there was an error', error)
//   // otherwise, continue on and use `file` in your code
// }







