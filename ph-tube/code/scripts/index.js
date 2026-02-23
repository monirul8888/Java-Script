

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
            <button id="btn-${cat.category_id}" onclick="loadCategoriesVideos(${cat.category_id});" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
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

    videoContainer.innerHTML = "";

    if (videos.length==0){
        videoContainer.innerHTML = `
          <div class=" py-20 col-span-full justify-center items-center flex flex-col text-center">
        <img class="w-[120px]" src="assets/Icon.png" alt="">
        <h2 class="text-2x1 font-bold">Opps. Sorry There is not Content Here</h2>
      </div>`

      return;
    }

    videos.forEach(video => {
        

        let videoCards = document.createElement("div");

        videoCards.innerHTML = `

         <div class="card bg-base-100 ">
          <figure class="relative">
            <img class="w-full h-[200px] object-cover" src="${video.thumbnail}" alt="Shoes" />

            <span class="absolute bottom-2 right-2 text-sm rounded text-white bg-black px-2">3Hrs 36mins ago</span>
          </figure>

          <div class=" flex gap-3 px-0 py-5">
<div class="profile">

              <div class="avatar">
  <div class="w-12 rounded-full">
    <img src="${video.authors[0].profile_picture}" />
  </div>


            </div>
            


            <div class="intro"></div>
            <h2 class="text-sm font-semibold">${video.title}</h2>
            <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_name}<img class="w-5 h-5" src="assets/check.png" alt=""></p>
            <p class="text-sm text-gray-400 "">${video.others.views} Views</p>
            
          </div>
        </div>
        </div>

        `
        videoContainer.appendChild(videoCards);
    });



}




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


const loadCategoriesVideos = (id) =>{



    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    console.log(url);

    fetch(url)
    .then(res => res.json())
    .then (data => {
        const clickedId = document.getElementById(`btn-${id}`)
        console.log(clickedId);
        clickedId.classList.add("active");
        displayVideos(data.category);
    })

}