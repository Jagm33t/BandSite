

// // Array of default comments

// // const comments = [
// //   { url:"../assets/Images/Mohan-muruge.jpg" , name: 'Connor Walton', timestamp:  '02/17/2021', text: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.' },
// //   { url:"../assets/Images/Mohan-muruge.jpg" , name: 'Emilie Beach', timestamp:  '01/09/2021', text: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.  ' },
// //   { url:"../assets/Images/Mohan-muruge.jpg" , name: 'Miles Acosta', timestamp:  '12/20/2020', text: 'I cant stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Cant get enough.' },
// // ];

console.log("herere")
apiKey = "5218b745-34db-4023-b4da-1a32e81e281d";
let url = `https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`;

const commentsArray = (url) => {
  axios
  .get (url)
  .then(response => {

    console.log(response.data)
    response.data.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
    displayAllComments(response.data);
  })
  .catch ((err) => {

  })
}
commentsArray(url);


let imgUrl = "../assets/Images/Mohan-muruge.jpg"
// Display a comment on the page
function displayComment(comment) {
  const container = document.querySelector('.comment-container');


  const commentElem = document.createElement('div');
  commentElem.classList.add('comment-element');


  const imgElem = document.createElement('img');
  imgElem.classList.add('comment-image');
  imgElem.setAttribute('src', "../assets/Images/Mohan-muruge.jpg");
  commentElem.appendChild(imgElem);

  const nameElem = document.createElement('h3');
  nameElem.textContent = comment.name;
  nameElem.classList.add('comment-name');
  commentElem.appendChild(nameElem);

  const timestampElem = document.createElement('p');
  timestampElem.textContent =(new Date()).toLocaleDateString();
  timestampElem.classList.add('comment-time');
  commentElem.appendChild(timestampElem);

  const textElem = document.createElement('p');
  textElem.textContent = comment.comment;
  textElem.classList.add('comment-area');
  commentElem.appendChild(textElem);

  container.appendChild(commentElem);
}

// Display all comments on the page
function displayAllComments(arrayOfComments) {
  const container = document.querySelector('.comment-container');
  container.innerHTML = '';
 

  arrayOfComments.forEach(comment => {
    displayComment(comment);
  });
}



function postComment (name,comment){

  let newCommentObj = {
    name: name,
    comment: comment,
  }
  
  axios
  .post('https://project-1-api.herokuapp.com/comments?api_key=5218b745-34db-4023-b4da-1a32e81e281d', newCommentObj)
  .then((response) => {
    console.log(response);
  
   
    response.sort((a, b) => {
      return b.timestamp - a.timestamp});
  
      
  })

  .catch((error) => {
    console.error(error);
  });
}


//Event listener to form submit button
const commentform = document.querySelector('.comment-form');
commentform.addEventListener('submit', (e) => {
  e.preventDefault()
  // e.target.name.value
  postComment(e.target.name.value, e.target.comment.value);
});



//Input field in comment section creating error display
const nameInput = document.getElementById('name-input');
const commentInput = document.getElementById('comment-input');

nameInput.addEventListener("blur",validInput);
commentInput.addEventListener("blur",validInput);



function validInput(event){
  const input = event.target;
  if(input.value === ""){
    console.log(input);

    input.classList.add("error");
  }else {
    input.classList.add("noerror");
  }
}













