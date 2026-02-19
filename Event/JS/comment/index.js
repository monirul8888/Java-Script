const saveButton = document.getElementById("save-button");
const commentText = document.getElementById("comment-text");
const commentSection = document.getElementById("comment-section");

saveButton.addEventListener("click", function() {
    const text = commentText.value.trim();
    
    if (text === "") {
        alert("Please write a comment before adding!");
        return;
    }

    // Create new paragraph for the comment
    const newComment = document.createElement("p");
    newComment.textContent = text;

    // Add it to the comment section
    commentSection.appendChild(newComment);

    // Clear the textarea
    commentText.value = "";
});
