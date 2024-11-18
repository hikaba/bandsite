
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

    const userComment = {
        name: name,
        date: `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`,
        comment: comment
    }

    createCommentCard(userComment)
}

function createCommentCard(comment){
    const commentsDisplayContainer = document.createElement('div');
    commentsDisplayContainer.className = 'comments-display__container';
    //adding the html with the user information into the comments-display container
    commentsDisplayContainer.innerHTML = `
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
    `;

    //adding the comment to existing commentsDisplay container
    //parent element, inserting new element before the first child, like a stack
    commentsDisplay.insertBefore(commentsDisplayContainer, commentsDisplay.firstChild);
    commentsForm.reset();
}





