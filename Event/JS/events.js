function makegreen(){
    document.body.style.backgroundColor = "green";
}

const blueButton = document.getElementById("blueButton");
// console.log(blueButton);

blueButton.onclick = function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}


document.getElementById("redButton").addEventListener("click", function makeRed(){
    document.body.style.backgroundColor = "red";
})


document.getElementById("gubButton").addEventListener("click", function(){

    console.log("Button Clicked");

    const gubb = document.getElementById("gub");
    console.log(gubb);

    gubb.innerText = "Grren University ";
})