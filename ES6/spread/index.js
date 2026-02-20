const dept = ["CSE", "EEE", "BBA"];
console.log(dept);
console.log(...dept);

const newDept = ["ADS", ...dept];
console.log(newDept);
console.log(...newDept);


const numbers = [3, 54, 54, 11, 2, 57, 10]

console.log(...numbers);
console.log("Max Number = ", Math.max(...numbers));