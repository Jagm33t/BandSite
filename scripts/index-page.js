

//Api key
apiKey = "5218b745-34db-4023-b4da-1a32e81e281d";
let url = `https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`;


//Making request to Api
const commentsArray = (url) => {
  axios
  .get (url)
  .then(response => {

    //sorting comment from new to old
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

  //Creating Like button on every comment
  const likeBtn = document.createElement('button');
  likeBtn.classList.add('comment-like');
  likeBtn.textContent = 'Like';
  commentElem.appendChild(likeBtn);


  //Calling event when Like button is pressed
  likeBtn.addEventListener('click', () => {
    likeComment(comment.id, likeBtn);
  });

  //Adding delete button on every button
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('comment-delete');
  deleteBtn.textContent = 'Delete';
  commentElem.appendChild(deleteBtn);

  //Calling event when delete button is pressed
  deleteBtn.addEventListener('click', () => {
    deleteComment(comment.id, commentElem);
  });


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


// Updating when pressed Like button
function likeComment(commentId, likeBtn) {
  axios
    .put(`https://project-1-api.herokuapp.com/comments/${commentId}/like?api_key=${apiKey}`)
    .then((response) => {
      const updatedLikes = response.data.likes;
      likeBtn.textContent = ` ${updatedLikes}`;
    })
    .catch((error) => {
      console.error(error);
    });
}

// Deleting comment when delete button is pressed
function deleteComment(commentId, commentElem) {
  axios
    .delete(`https://project-1-api.herokuapp.com/comments/${commentId}/?api_key=${apiKey}`)
    .then(() => {
      commentElem.remove();


    })
    .catch((error) => {
      console.error(error);


    });
}


//Posting request to Api 
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












