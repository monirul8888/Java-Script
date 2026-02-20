function multiply(num1 = 0, num2 = 0) {
    const total = num1 * num2;
    console.log(`Number 1 = ${num1}`);
    console.log(`Number 2 = ${num2}`);
    console.log(`Total (Multiplication) = ${total}`);
}

// Examples:
multiply(10, 5); // 10 * 5 = 50
multiply(10);    // 10 * 0 = 0 (num2 defaults to 0)
multiply();      // 0 * 0 = 0