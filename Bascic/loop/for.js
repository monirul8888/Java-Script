var numbers = [10, 20, 30, 40];

for (var num in numbers){
    console.log(numbers[num]);
}
console.log(" 'in' Returns Index and 'of' returns num")
for (var num of numbers){
    console.log(num);
}
