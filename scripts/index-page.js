//array with some comments
let userComments = [
    {
        name: 'Victor Pinto',
        date: "11/02/2023",
        comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
    },
    {
        name: 'Christina Cabrera',
        date: "10/28/2023",
        comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.' 
    },
    {
        name: 'Isaac Tadesse',
        date: '10/20/2023',
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough."
    }
];


//gettting the form and display sections
const commentsForm = document.getElementById("comments__form");
const commentsDisplay = document.getElementById("comments-display");
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
    // userComments.push(userComment);
    createCommentCard(userComment)
}

function createCommentCard(comment){
    console.log(comment);
    const commentsDisplayContainer = document.createElement('div');
    commentsDisplayContainer.className = 'comments-display__container';
    //adding the html with the user information into the comments-display container
    commentsDisplayContainer.innerHTML = `
        <div class="comments-display__content">
            <div class="comments-display__icon-wrapper">
                <div class="comments-display__user-image"></div>
            </div>
      
            <div class="comments-display__comment">
                <div class="comments-display__wrapper">
                    <p class="comments-display__content comments-display__content-bold">
                        ${comment.name}
                    </p>
                    <p class="comments-display__content comments-display__content-light">
                        ${comment.date}
                    </p>
                </div>
                
                <p class="comments-display__content">
                    ${comment.comment}
                </p>
            </div>
        </div>
        <hr class="comments-display__divider">
    `;

    //adding the comment to existing commentsDisplay container
    //parent element, inserting new element before the first child, like a stack
    commentsDisplay.insertBefore(commentsDisplayContainer, commentsDisplay.firstChild);
    commentsForm.reset();
}
//creating pre-existing cards from array
for(let i=0; i< userComments.length; i++){
    createCommentCard(userComments[i]);
}