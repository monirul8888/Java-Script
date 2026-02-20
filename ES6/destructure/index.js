const student ={
    name : "Monirul",
    id : 221002154,
    dept : "CSE"
}

const studentName = student.name;
console.log(studentName);

const { dept,id , name} = student;
console.log(id);
console.log(name);


const gub = ["GUB", "CSE", "221002154"];

const[university, deptt, idd] = gub;
console.log(university);
console.log(idd);
console.log(deptt);