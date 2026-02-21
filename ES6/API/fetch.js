const handleLoadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json));
};

document.getElementById("load-btn")
        .addEventListener("click", handleLoadData);