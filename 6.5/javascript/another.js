//index.js
// require("style-loader!css-loader!../css/app.css");
// require('./another.js');

// app/javascript/index.js	
function sayHello(){
    let header = document.querySelector("#greeting");
    let hello = ("<h1> hello world </h1>");
    header.innerHTML = hello;
  }
   
module.exports = sayHello();
