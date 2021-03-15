function allTheDoggos() {
  console.log('inside function');
  let doggos = new XMLHttpRequest();
  // console.log(dog)
  doggos.onreadystatechange = function (){
    if (doggos.readyState == XMLHttpRequest.DONE) {
      // console.log(doggos.response);
      let doggoImg = JSON.parse(doggos.response);
      console.log(doggoImg.message);
      if (doggos.status == 200) {
        let myDiv = document.getElementById("main");
        let newDiv = document.createElement("img");
        console.log(doggoImg)
        newDiv.setAttribute("src", doggoImg.message);
        //   newDiv.innerHTML = doggos.message; // url to a random image
        myDiv.appendChild(newDiv);
      } else if (doggos.status == 400) {
        console.log("There was an error 400");
      } else {
        console.log("something else other than 200 was returned");
      }
    }
  };

  doggos.open("GET", "https://dog.ceo/api/breeds/image/random", true);
  doggos.send();
}

allTheDoggos();

// function jsonPlaceHolderRequest(){
//     let req= new XMLHttpRequest();
//     req.open("Get","https://jsonplaceholder.typicode.com/users",true);
//     req.onload=function(){
//         if(req.status>=200 && req.status<400){
//         var data= JSON.parse(this.response)

//        data.forEach((user)=>{ document.getElementById('main').innerHTML+=`<ul><li>${user.name}</li><li>${user.email}</li><li>${user.username}</li></ul>`})
//         }
//         else {
//             document.getElementById('error').innerHTML=`Error: It's not working!`

//           }
//     }
//   req.send();
// }

// jsonPlaceHolderRequest()
