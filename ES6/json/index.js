person = {
    name : "Monirul Islam",
    id : 221,
    dept : "CSE"
}

console.log("Person Object = ", person);

newPerson = JSON.stringify(person);

console.log("JSON File = ", newPerson);

console.log("JSON type ", typeof newPerson);


newPerson1 = JSON.parse(newPerson);
console.log("JSON to Object : ", newPerson1);
console.log("Type : ", typeof newPerson1);