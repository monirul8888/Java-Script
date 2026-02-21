document.getElementById("calculate-btn").addEventListener("click", function(){
    console.log("Got IT");
    let presentBalance = 0;
    let noteCount = 0;
    
    const note1000 = parseInt(document.getElementById("note-1000").value) || 0;
    presentBalance = presentBalance + note1000*1000;
    noteCount =  noteCount + note1000;
    

    const note500 = parseInt(document.getElementById("note-500").value) || 0;
    presentBalance = presentBalance + note500*500;
    noteCount =  noteCount + note500;
   

    const note100 = parseInt(document.getElementById("note-100").value) || 0;
    presentBalance = presentBalance + note100*100;
    noteCount =  noteCount + note100;

    const note200 = parseInt(document.getElementById("note-200").value) || 0;
    presentBalance = presentBalance + note200*200;
    noteCount =  noteCount + note200;

    const note50 = parseInt(document.getElementById("note-50").value) || 0;
    presentBalance = presentBalance + note50*50;
    noteCount =  noteCount + note50;

    const note20 = parseInt(document.getElementById("note-20").value) || 0;
    presentBalance = presentBalance + note20*20;
    noteCount =  noteCount + note20;

    const totalBalance = document.getElementById("total-balance");
    const note = document.getElementById("total-notes");



    totalBalance.innerText = presentBalance;
    note.innerText = noteCount;


    
    
   
})


// Reset Button
document.getElementById("reset-btn").addEventListener("click", function() {
    document.getElementById("total-balance").innerText = 0;
    document.getElementById("total-notes").innerText = 0;

    const noteIds = ["note-1000","note-500","note-200","note-100","note-50","note-20"];
    noteIds.forEach(id => {
        document.getElementById(id).value = "";
    });

    console.log("Reset done");
});