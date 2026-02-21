

const loadData = () =>{
    
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => res.json())
    .then(data => console.log(data));


}


const loadUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            displayUser(data);
        })
        .catch(error => console.log(error));
}

const displayUser = (users) => {
    const tableBody = document.getElementById("table-body");

    tableBody.innerHTML = ""; // Clear previous data

    for (const user of users) {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
        `;

        tableBody.appendChild(tr);
    }
}