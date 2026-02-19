document.getElementById("save-comment").addEventListener("click", function(){
    const commentText = document.getElementById("comment-text");
    const newComment = commentText.value;
    console.log(newComment);

    const sectionElement = document.getElementById("comment-section");

    const sectionP = document.createElement("p");
    sectionP.innerText = newComment;
    sectionElement.appendChild(sectionP);
    commentText.value = "";
})