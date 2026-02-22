

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
            <button class="btn btn-sm">${cat.category}</button>
            `
            categoryContainer.appendChild(categoryDiv);

        }
    }
}