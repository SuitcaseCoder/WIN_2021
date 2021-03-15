// // // PROMISES

// // //create a variable that holds the promise 
// const myPromise = 
// // // create a promise and pass in our function
//   (new Promise(myExecutorFunc))
// //   // chain as many actions as needed
// // // first param = success, second, rejected
//   .then(handleFulfilledA,handleRejectedA)
//   .then(handleFulfilledB,handleRejectedB)
//   .then(handleFulfilledC,handleRejectedC);

// // or, perhaps better ...

// const myPromise =
//   (new Promise(myExecutorFunc))
// //   // then methods are going to get passed the fulfilled value of the promise being made
//   .then(handleFulfilledA)
// //   // any other chained on .then() is going to accept the fulfilled / successful result of the previous then method
//   .then(handleFulfilledB)
//   .then(handleFulfilledC)
// //   // the error being passed into the catch method is going to be the value of the failed promise 
//   .catch(handleRejectedAny);


// //   //
// handleFulfilled(value)       { /*...*/; return nextValue;  }
// handleRejection(reason)  { /*...*/; throw  nextReason; }
// handleRejection(reason)  { /*...*/; return nextValue;  }

// // //
// const promiseA = new Promise(myExecutorFunc);
// const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
// const promiseC = promiseA.then(handleFulfilled2, handleRejected2); 

// //
// const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
//     resolutionFunc(777);
//     rejectionFunc(console.log('err'));
// });
// // At this point, "promiseA" is already settled.
// promiseA.then( (val) => console.log("asynchronous logging has val:",val) );
// console.log("immediate logging");

// // produces output in this order:
// // immediate logging
// // asynchronous logging has val: 777

// // //
// async function myAsyncFunction() {
//     return 1;
// }
  
// myAsyncFunction().then(alert); // 1

// // await
// async function waitOneSecond() {

//     // // create a new promise
//     // // to that promise pass in resolve (successful value) and reject (failed value)
//     let beDone = new Promise((resolve, reject) => {
//         // after a second, run resolve function
//       setTimeout(() => resolve("done!"), 1000)
//     });
  
//     // await X - waiting for the promise to be completed, once it's completed THEN we can set the value of the result of promise to a new variable
//     // // await is only available inside of an async function
//     let result =  await beDone; // wait until the promise resolves (*)
  
//     console.log(result); // "done!"
//   }
  
// waitOneSecond();

// // // FETCH
// let promise = fetch(url, [options])

// //
// // // creating a variable
// // // the result of a fetch request to a url is going to be saved in that variable ONLY AFTER the request has been completed
// let response = await fetch(url);

// // // if the response of the fetch request to an api comes back as ok (successful), THEN
// if (response.ok) { // if HTTP-status is 200-299
//   // get the response body
// //   // take the response and turn it inot JSON format ONLY AFTER the response has been turned into JSON format, we will save that JSON-formatted response to the json variable
//   let json = await response.json();
// } 
// // // else if the status of the response is not ok (ok: false)
// else {
//     // // return ann allert with the HTTP error and the status of the response (status code)
//   alert("HTTP-Error: " + response.status);
// }




// //
// async function doSomethingWithResponse(){
//     console.log('inside async func');
//     let response = await fetch('https://dog.ceo/api/breeds/image/random');
//     console.log(response);
//     if (response.ok) { // if HTTP-status is 200-299
//     // get the response body
//     console.log(response.ok);
//     let json = await response.json();
//     console.log(json);
//     } else {
//     console.log("HTTP-Error: " + response.status);
//     }
// }
// doSomethingWithResponse();


// // // FETCH WITH .THEN() CHAINING
// fetch('https://javascript.info/article/promise-chaining/user.json')
//   // .then below runs when the remote server responds
//   .then(function(response) {
//     // response.text() returns a new promise that resolves with the full response text
//     // when it loads
//     // .text() is a fetch method that's going to turn any response into 'text' format instead of json
//     return response.text(); 
//   })
//   .then(function(resultOfPrevThen) {
//     // ...and here's the content of the remote file
//     alert(text); // {"name": "iliakan", "isAdmin": true}
// });

// same as before, but response.json() parses the remote content as JSON
// fetch('https://dog.ceo/api/breeds/image/random')
//   .then(response => {
//       console.log(response);
//       return response.json();
//   })
//   .then(user =>{
//       console.log(user);
//       alert(user.message);
//   }); // iliakan, got user name

// // Make a request for user.json
// fetch('https://javascript.info/article/promise-chaining/user.json')
//   // Load it as json
//   .then(response => {
//     console.log('response from user api: '+ response);
//       return response.json()
//     })
//   // Make a request to GitHub
//   .then(user =>
//       fetch(`https://api.github.com/users/${user.name}`)
//   )
//   // Load the response as json
//   .then(response => response.json())
//   // Show the avatar image (githubUser.avatar_url) for 3 seconds (maybe animate it)
//   .then(githubUser => {
//       console.log(githubUser);
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);
// }).catch(err => {console.log(response.status)});


// // // ASYNC/AWAIT FETCH
// async function showAvatar() {
//     // read our JSON
//     let response = await fetch('https://javascript.info/article/promise-chaining/user.json');
//     let user = await response.json();
  
//     // read github user
//     let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
//     let githubUser = await githubResponse.json();
  
//     // show the avatar
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-example";
//     document.body.append(img);
// }
  
//   showAvatar();


//   // USING ASYNC KEYWORD IN AN ANONYM FUNCTION
//   (async () => {
//     let response = await fetch('https://javascript.info/article/promise-chaining/user.json');
//     let user = await response.json();
//     // ...
//   })();

//   async function loadJson(requestLocation) { // (1)
//     let response = await fetch(requestLocation); // (2)
  
//     if (response.status == 200) {
//       let json = await response.json(); // (3)
//       return json;
//     }
  
//     throw new Error(response.status);
    
//   }
  
//   loadJson('https://dog.ceo/api/breeds/image/random')
//     .catch(alert); // Error: 500 (4)