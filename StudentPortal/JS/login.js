document.getElementById("login-btn").addEventListener("click", function(event){
    
    event.preventDefault();
    const studentIdElement = document.getElementById("student-id").value;
    const studentId = parseInt(studentIdElement);
    
    const password = parseInt(document.getElementById("password").value);
    
    if (studentId===221002154){
        console.log("Logged In");

        if (password===1234){
            window.location.href = "./portal.html"
        }
    }
    else{
        alert("Invalid Student ID");
    }
})