

// // ---
// add an event listener to an Element
// run a function when that event is triggered
// coplete both the listening and the triggering after x time

// //console.log('line16')
//     checkbox[0].addEventListener('click', function(event){
//         setTimeout(function(){
//             console.log('line18')
//             listItems[0].remove(); },2000)
//     });

// // .remove()

// let tasks = document.getElementsByClassName('.task'); //arr //element
// console.log(tasks); // task  // 
// tasks.map(node => {
//     // // inside of each iteration
//     node[i].addEventListener("click", 
//     function(event){
//         console.log('hey I got to inside the function that is a param');
//         console.log(event);
//         node[i].remove();
//     }
// )
// })

// setTimeout - delay second button being delayed;
let secondItem = document.getElementById('second');
// // <li >two </li>
secondItem.addEventListener("click", function(event){
    console.log(event);
        setTimeout(function(){
            secondItem.remove(); // final goal
        }, 2000)
    }
);


// let taskTwo = document.querySelector('#two');
// console.log(taskTwo); // task  // 
// taskTwo.addEventListener("click", 
//     function(phaseOne){
//         console.log('hey I got to inside the function that is a param');
//         console.log(phaseOne);
//         taskTwo.remove();
//     }
// );

// let taskThree = document.querySelector('#three');
// console.log(taskThree); // task  // 
// taskThree.addEventListener("click", 
//     function(event){
//         console.log(event);
//         taskThree.remove();
//     }
// );


