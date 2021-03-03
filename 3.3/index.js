// // DOM

// //accessing elements (nodes) in my html file (DOM)

//Get a single node
// // document is a keyword in js and it's the 'object's' name
// // .getElementById() -- method that is going to search through the dom's nodes (html file's elements) and it's going to FIND the first element with an id of (whatever's in the parameter);
// let el = document.getElementById("username");
// console.log(el);

// let wordsElement = document.getElementById("words");
// console.log(wordsElement);

// //open the console in chrome:
// // right click > inspect --> tab over to the console
// // view > developer > js console

// //
//Get all inputs
// // return an ARRAY of ALL the elements that match wht you're looking for 
// // return ALL elements of the given kind
// let inputs = document.getElementsByTagName('input');
// console.log(inputs);
// // // // return all elements with the given class name
// let inError = document.getElementsByClassName('error');
// console.log(inError);


// console.log(inputs.length); //2
// console.log(inError.length); //1

// // QUERY SELECTOR /QUERY SELECT ALL
//Get all inputs

// // QUERY SELECTOR - will return first one it finds
// let firstButton = document.querySelector('button');

//QUERY SELECTOR ALL - will return all the nodes that match
// //go find an element/node that is an input element and has a class of error
// input#username //id
// input.red //class
// let inError = document.querySelectorAll('input.inErr');


// console.log('firstBtn: '+ firstButton); //single button node
// console.log('inErr ' + inError); //Node list of inputs with class 'error'


// let redElements = document.getElementsByClassName('red');
// console.log(redElements);
// let redQueryAll = document.querySelectorAll('.red')
// console.log(redQueryAll);

// // DIFFERENCE BETWEEN QUERY SELECTOR AND GET ALL ELEMENTS
// //query selector: returns a nodeList which looks like an array but we don't have access to many array methods
// // getElements... : return an HTML collection that does accepet array fuctions/methods

// let secondListItem = document.querySelector('ul').children.children;
// console.log(secondListItem);

// let selectedItem = document.querySelector('selected');
// let first = selectedItem.previousElementSibling;
// console.log(first);
// let last = selectedItem.nextElementSibling;
// console.log(last);
// let list = selectedItem.parentElement;
// console.log(list);
// let header = selectedItem.parentElement.parentElement; // grandparent
// console.log(header);
// let section = selectedItem.parentElement.parentElement.nextElementSibling;
// console.log(section);


//Laziness is your friend...
// let q = document.querySelector.bind(document) // entire element
// let qa = document.querySelectorAll.bind(document); //all the elements inside of document


// let one = document.querySelector('header') //1
// qa('section'); // document.querySelectorAll('section') //2
// q('section.current'); //3
// q('section.current').nextElementSibling;
// q('section.current').previousElementSibling.children[0];
// let example = document.querySelector('section.current').previousElementSibling.children[1];
// console.log(example);

// let usingGetElement = document.getElementsByClassName('current')[0].previousElementSibling.children[1];
// console.log(usingGetElement)

// q('h2.highlight').parentElement.parentElement;

// let foo = Array.from(qa('section h2'))
//     .map(function(headline){
//         return headline.parentElement;
// });

//     console.log(foo);

// let p = document.getElementById('words'); // returned - entire element
// console.log(p);

// p.innerHTML = 'cats are really cool', 3000;

// let changedElement = document.getElementById('changeInside');
// changedElement.innerHTML = 'hello world'; //changes the text inside

// var a = document.querySelector('a'); // <a><

// //Get an attribute
// console.log(a.href); //"http://google.com"

// //Set an attribute
// a.name = 'new link name';
// {/* <a name="new link name"></a>// */}

// //Add a new attribute
// a.target = "_blank";
// // <a target="blank"></a>


// let img = document.querySelector('img').remove();
// let box = document.querySelector('#box').remove();

// 1. CREATE A NEW ELEMENT .createElement()
// let newEl = document.createElement('h1');
// // {/* <h1></h1> */}

// // define what's inside of the element - context
// newEl.innerHTML = 'THIS IS MY BRAND NEW ELEMENT';
// {/* <h1>THIS IS MY BRAND NEW ELEMENT</h1> */}

// // find an element in the dom to append your new elment to
// let bod = document.querySelector('body').append(newEl);
// // newEl.append() = 'this is my new element';

//  let newDiv = document.createElement('div');
// //  newDiv.class = "red";
// //  <div class="red"></div>
// newDiv.innerHTML = "this is my new div and it has a class of red so the text is red too";
// let bod = document.querySelector('body').append(newDiv);
// // // newEl.append() = 'this is my new element';

// // 1. CREATE A NEW ELEMENT .createElement()
// let newEl = document.createElement('h1');
// // {/* <h1></h1> */}

// // define what's inside of the element - context
// newEl.innerHTML = 'THIS IS MY BRAND NEW ELEMENT';
// {/* <h1>THIS IS MY BRAND NEW ELEMENT</h1> */}

// find an element in the dom to append your new elment to
// let bod = document.querySelector('body').append(newEl);
// // newEl.append() = 'this is my new element';

let box = document.getElementById('box');
// 1: element that's listening 
// 2. starting the method
// 3. (A - the kind of event that we're listening for, B - the function that we want to run when that event happens)
// // the param  being passed into the function is the event itself (whether it's a click, mouseover, keyboard up arrow)
box.addEventListener('mouseover', function(somethingHappenedToThisElement){
    // alert is a keyword in javascript 
	alert('clicked!');
})

// //Combine with DOM editing
// el.addEventListener('mouseover', function(event){
// 	el.innerHTML('over');
// })
