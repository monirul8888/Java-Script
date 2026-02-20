document.getElementById("update-information").addEventListener("click", function(){
    const ml = parseInt(document.getElementById("ml").innerText);
    const cn = parseInt(document.getElementById("cn").innerText);
    const swe = parseInt(document.getElementById("swe").innerText);
    const cd = parseInt(document.getElementById("cd").innerText);

    
    const mlg = parseFloat(document.getElementById("mlg").innerText);
    const cng = parseFloat(document.getElementById("cng").innerText);
    const sweg = parseFloat(document.getElementById("sweg").innerText);
    const cdg = parseFloat(document.getElementById("cdg").innerText);

    const totalCredit = ml+cn+swe+cd;
    
    const cgpa = ((mlg*ml)+(cdg*cd)+(cng*cn)+(sweg*swe))/totalCredit;

    console.log(cgpa);

    const cge = document.getElementById("cg");
    const cg = document.getElementById("cg").innerText;
    
    cge.innerText = cgpa;

    
})