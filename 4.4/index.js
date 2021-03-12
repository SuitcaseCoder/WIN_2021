// ... make the actual request to the server // make a request to look for a specific image https://jsonplaceholder.typicode.com/photos/3 

function thirdPhoto(response){
    console.log(response); // 
//     // {
//     "albumId": 1,
//     "id": 3,
//     "title": "officia porro iure quia iusto qui ipsa ut modi",
//     "url": "https://via.placeholder.com/600/24f355",
//     "thumbnailUrl": "https://via.placeholder.com/150/24f355"
// }
    let newEl = document.createElement('img');
    let imgURL = response.url;
    newEl.setAttribute(src="imgURL")

}