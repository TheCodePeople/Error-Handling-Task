function divideNumbers(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  if (num2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return num1 / num2;
}

try {
  console.log(divideNumbers(10, 2)); // should print 5
} catch (error) {
  console.error(error.message);
}

try {
  console.log(divideNumbers(15, 0)); // should throw an error
} catch (error) {
  console.error(error.message);
}

try {
  console.log(divideNumbers("hello", 7)); // should throw an error
} catch (error) {
  console.error(error.message);
}
try {
  console.log(divideNumbers(12)); // should throw an error
} catch (error) {
  console.error(error.message);
}
