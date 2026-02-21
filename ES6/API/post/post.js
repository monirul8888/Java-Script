
const handlePost =()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data=>{
        displayPost(data);
    })
}

function displayPost(posts){
    
    const postContainerId = document.getElementById("post-container-id");
    for (const post of posts){
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `
        <h1>${post.title}</h1>
        <p>${post.body}</p>
        <button>Details</button>
        `;

        postContainerId.appendChild(div);
    }
}