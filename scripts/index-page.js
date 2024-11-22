import { BandSiteApi } from "./band-site-api.js";

//creating api key and base url variables
const baseURL = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
const apiKey ="fb949080-b7ee-4573-9c43-96f008c248a0";

//creating instacne of bandsiteapi class
const comments = new BandSiteApi(apiKey);
//gettting the form and display sections
const commentsForm = document.getElementById("comments__form");
commentsForm.addEventListener('submit', handleFormSubmit);
const commentsListElement = document.getElementById("comments-list");

async function handleFormSubmit(event){
    event.preventDefault();
    console.log("form submitted");
    const date = new Date();
    const newUserComment = {
        name: event.target.userName.value,
        comment: event.target.userComment.value
    }
    const response = await comments.postComment(newUserComment);
    console.log(response);
    getCommentDataAndAppendToList();
}

async function getCommentDataAndAppendToList(){
    commentsListElement.innerText ="";
    const response = await comments.getComments();

    // console.log(userComments);
    const commentsReverse = response.reverse();
    
    //loop through comments array
    for(let i = 0; i < commentsReverse.length; i++) {
        let comment = commentsReverse[i];
        const timestamp = new Date(comment.timestamp);
        const date = `${timestamp.getMonth()}/${timestamp.getDay()}/${timestamp.getFullYear()}`;
    
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
         dateElement.innerText = date;
         wrapperElement.appendChild(dateElement);

         let commentElement = document.createElement("p");
         commentElement.classList.add("comments-display__user-info");
         commentElement.innerText = comment.comment;
         userInfoElement.appendChild(commentElement);
    }
    commentsForm.reset();
}

getCommentDataAndAppendToList();
