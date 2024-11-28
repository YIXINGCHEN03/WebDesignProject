function changeClass() {
    let mobileMenu = document.getElementById("mobile");

    mobileMenu.style.display = 
    (mobileMenu.style.display === "none") ? "block" : "none";
}

function dismiss(){
    let crossBtn=document.getElementById("mobile");
    crossBtn.style.display = "none";
}

// for content in blog detail.html
function show(){
    let ContentShow=document.getElementById("monkey");
    ContentShow.style.display = (ContentShow.style.display === "none")? "block" : "none";
    const hideTxt = document.getElementById("close");
    if(ContentShow.style.display==='block'){
        hideTxt.innerHTML= 'hide';
    }else{
        hideTxt.innerHTML='show';
    }
}

// comment form
const commentBox = document.getElementById('commentBox');
function myFunction(){
    commentBox.style.display = (commentBox.style.display === "none") ? "block" : "none";
}

// for comments
    const commentForm = document.getElementById('commentForm');
    const commentsContainer = document.getElementById('commentDisplay');
    const titleElement = document.getElementById("title")
    const CommentCountElement = document.getElementById("comment-count");
    const SubmitBtn = document.getElementById("Submit")
    let commentCountonBtn = 0 ;
    let  commentCount=0;
    function showComment(){


        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const commentInput = document.getElementById('comment');

        const name = nameInput.value;
        const email = emailInput.value;
        const comment = commentInput.value;

        if(SubmitBtn.click){
            commentCountonBtn++;
        }
        CommentCountElement.textContent = commentCountonBtn;

        if(name && comment && email) {
            commentCount++;

            const currentDate = new Date();
            const dateString = currentDate.toLocaleDateString();
            const timeString = currentDate.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});

            const newComment = document.createElement('div');
            newComment.className = 'comments';
            newComment.innerHTML = 
            `<div class="container h-50">
                <div class= "CommentDecoration position-relative pb-2">
                    <strong class="fs-3">${name}:</strong> 
                    <span class="position-absolute top-0 end-0"><a>Reply</a></span>
                    <p style="font-size: 14px;"><i class="fa-regular fa-clock fa-xs"></i> ${dateString} ${timeString}</p>
                    <p class="mt-2">${comment}</p>
                </div>
            </div>`;

            commentsContainer.appendChild(newComment);

            nameInput.value = '';
            commentInput.value= '';
            emailInput.value='';

            titleElement.textContent = `${commentCount} Comment${commentCount !== 1 ? 's' : ''}`;
        }
    }

    // React
    let likeCount = 0;

    function likeFunction() {
        const likeButton = document.getElementById("React");
        const likeCountElement = document.getElementById("like-count");

        if (likeButton.classList.contains("liked")) {
            // Unlike
            likeCount--;
            likeButton.classList.remove("liked");
        } else {
            // Like
            likeCount++;
            likeButton.classList.add("liked");
        }

        likeCountElement.textContent = likeCount;
    }

    // Start of Subscribe
// change "subscribed" when click 
function ChangeText(){
    const Need2Check = document.getElementById("input");

    const changeText = document.getElementById("subscribe").innerHTML="Subscribed";
    window.alert("Email: "+ Need2Check.value+ " already successfully subscribed")
}

// change text on button when there is no text in input 
const Need2Check = document.getElementById("input");
const changeText=document.getElementById("subscribe")
Need2Check.addEventListener('input',function(){
    if(Need2Check.value == ''){
        changeText.textContent="Subscribe"
    }else{
        changeText.textContent="Subscribe"
    }
})

// End of Subscribe
