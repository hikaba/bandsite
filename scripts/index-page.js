//array with some comments
let userComments = [
    {
        name: 'Isaac Tadesse',
        date: '10/20/2023',
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    },
    {
        name: 'Christina Cabrera',
        date: "10/28/2023",
        comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.' 
    },
    {
        name: 'Victor Pinto',
        date: "11/02/2023",
        comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
    },
];


//gettting the form and display sections
const commentsForm = document.getElementById("comments__form");
commentsForm.addEventListener('submit', handleFormSubmit);


function handleFormSubmit(event){
    event.preventDefault();
    //getting input values
    const name = event.target.userName.value;
    const comment = event.target.userComment.value;
    const date= new Date();
    //validation stuff
    if(name === '' || comment === ''){
        alert("Please complete form before submitting")
        return;
    }
    // creating object for usercomment
    const userComment = {
        name: name,
        date: `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`,
        comment: comment
    }
    userComments.push(userComment);
    displayComments();
}
const commentsListElement = document.getElementById("comments-list");

function displayComments (){
    commentsListElement.innerText = "";

    for(let i = userComments.length -1; i >= 0; i--) {
        let comment = userComments[i];
        
        // console.log(comment);
         let itemElement = document.createElement("li");
         itemElement.classList.add("comments__list-item");
         commentsListElement.appendChild(itemElement);

         let imageIconElement = document.createElement("div");
         imageIconElement.classList.add("comments-display__image-icon")
         itemElement.appendChild(imageIconElement);

         let userInfoElement = document.createElement("div");
         userInfoElement.classList.add("comments-display__user");
         itemElement.appendChild(userInfoElement);

         let wrapperElement = document.createElement("div");
         wrapperElement.classList.add("comments-display__user-wrapper")
         userInfoElement.appendChild(wrapperElement);

         let userNameElement = document.createElement("p");
         userNameElement.classList.add(
            "comments-display__user-info",
            "comments-display__user-info--bold"
         );
         userNameElement.innerText = comment.name;
         wrapperElement.appendChild(userNameElement);

         let dateElement =document.createElement("p");
         dateElement.classList.add("comments-display__user-info");
         dateElement.innerText = comment.date;
         wrapperElement.appendChild(dateElement);

         let commentElement = document.createElement("p");
         commentElement.classList.add("comments-display__user-info");
         commentElement.innerText = comment.comment;
         userInfoElement.appendChild(commentElement);
    }
    commentsForm.reset();
}
//creating pre-existing cards from array
displayComments();