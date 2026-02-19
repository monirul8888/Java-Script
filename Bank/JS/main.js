document.getElementById("add-btn").addEventListener("click", function(event){

    event.preventDefault();

    const amount = parseInt(document.getElementById("add-amount").value);
  
    const currentBalanceElement =document.getElementById("balance");
    const currentBalance = parseInt(document.getElementById("balance").innerText);

    const updatedAmount = currentBalance + amount;
 
    currentBalanceElement.innerText = updatedAmount;

    
})



document.getElementById("withdraw-btn").addEventListener("click", function(event){
    event.preventDefault();

    const amount = parseInt(document.getElementById("withdraw-amount").value);



    const currentAmountElement = document.getElementById("balance");
    const currentAmount = currentAmountElement.innerText;
    

    const updatedAmount = currentAmount - amount;

    currentAmountElement.innerText = updatedAmount;


})