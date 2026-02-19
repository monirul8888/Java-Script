

document.getElementById("login-btn").addEventListener("click", function(event){
    event.preventDefault();
    console.log("Monirul");

    const accountNumber = document.getElementById("account-number").value;
    const passwordNumber = document.getElementById("password").value;

    if (accountNumber.length===11){
        console.log("Account Number Matched")
        console.log(typeof passwordNumber);
        if(parseInt(passwordNumber)===1234){
            console.log("Correct Password");
            window.location.href="./main.html"
        }
        else{
            console.log("Enter Valid Password");
        }
    }
    else{
        console.log("Enter Valid Account Number")
    }
})