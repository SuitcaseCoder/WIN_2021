// // reference: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Test_your_skills:_Object-oriented_JavaScript

// If you want to learn more about OOP check out this link first: 
// (or any other resources you want for reviewing oop)
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS

// then try this exercise: 
// TASK:
// In this task we provide you with a constructor. We want you to:
    // 1) Add a new method to the Shape class's prototype, calcPerimeter(), which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.
    // 2) Create a new instance of the Shape class called square. Give it a name of square and a sideLength of 5.
    // 3. Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the browser DevTools' console as expected.
    // 4. Create a new instance of Shape called triangle, with a name of triangle and a sideLength of 3.
    // 5. Call triangle.calcPerimeter() to check that it works OK.




// CONSTRUCTOR PROVIDED: 
// function Shape(name, sides, sideLength) {
//     this.name = name;
//     this.sides = sides;
//     this.sideLength = sideLength;
//   }
  
  // Write your code below here
      

  // // one of the group's answer: 
  function Shape(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
    this.perimeter;
    this.calcPerimeter = function(){
        this.perimeter = this.sides * this.sideLength;
        return this.perimeter;
    };
};
var square = new Shape("square", 4, 5);
var triangle = new Shape("triangle", 3, 5);
console.log(square);
console.log(triangle);