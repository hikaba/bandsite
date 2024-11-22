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

//creating api key and base url variables
const baseURL = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
const apiKey ="fb949080-b7ee-4573-9c43-96f008c248a0";


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
    const response = await axios.post(`${baseURL}comments?api_key=${apiKey}`,newUserComment);
    console.log(response);
    getCommentDataAndAppendToList();
}

async function getCommentDataAndAppendToList(){
    commentsListElement.innerText ="";
    const response = await axios.get(`${baseURL}comments?api_key=${apiKey}`);
    userComments = response.data;
    console.log(userComments);
    const commentsReverse = userComments.reverse();
    
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
