num_array = [12, 34, 55];
console.log("Array = " , num_array);

console.log("Array Length = ", num_array.length);
console.log("Index 1 = ", num_array[1]);


console.log("New Array");
new_array = [10, 20, 30];
console.log("New Array : ", new_array);

new_array.push(100, 1000);
console.log("After Push: ", new_array);

pop_el = new_array.pop();
console.log("Pop Element : ", pop_el);
console.log("After Pop ", new_array);

new_array.shift();
console.log("After Shift", new_array);

new_array.unshift(1000);
console.log("After Un-Shift", new_array);


console.log(new_array.includes(1000));