

function loadCategories() {


    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => {

            items(data.categories);
        })
}

loadCategories();

// {category_id: '1001', 
//     category: 'Music'}


function items(categories) {
    {


        const categoryContainer = document.getElementById("category-container");

        for (let cat of categories) {

            const categoryDiv = document.createElement("div");
            categoryDiv.innerHTML = `
            <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
            `
            categoryContainer.appendChild(categoryDiv);

        }
    }
}



function loadVideos() {

    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((res) => res.json())
        .then((data) => {
            displayVideos(data.videos);
        })
}

const displayVideos = (videos) => {

    const videoContainer = document.getElementById("video-container");

    videos.forEach(video => {
        console.log(video);

        let videoCards = document.createElement("div");

        videoCards.innerHTML = `
        <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        `
        videoContainer.appendChild(videoCards);
    });



}
loadVideos();



// {
//     "category_id": "1001",
//     "video_id": "aaab",
//     "thumbnail": "https://i.ibb.co/QPNzYVy/moonlight.jpg",
//     "title": "Midnight Serenade",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
//             "profile_name": "Noah Walker",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "543K",
//         "posted_date": ""
//     },
//     "description": "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
// }