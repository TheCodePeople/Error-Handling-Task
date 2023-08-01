function divideNumbers(a, b) {
  try {
    if (typeof a !== "number" || typeof b !== "number")
      throw "value is not a number  ";
    if (b === 0) throw "Cannot divide by zero";
    if (!b) throw "add the second number";
    console.log(a / b);
  } catch (error) {
    console.error(error);
  }
}

// Test cases

divideNumbers(10, 2); // should print 5
divideNumbers(15, 0); // should throw an error
divideNumbers("hello", 7); // should throw an error
divideNumbers(12); // should throw an error
