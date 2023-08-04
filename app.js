function divideNumbers(a, b) {
  try{

  if (typeof a !== "number" || typeof b !== "number")
  throw "value not a number"
  if(b === 0) throw 'Cannot divide by zero'
  if (!b) throw 'add the another number'
    console.log(a/b);
  }
  catch (error) {
    console.error(error);
  }

}

// Test cases
try {
  
  console.log(divideNumbers(10, 2)); // should print 5
  console.log(divideNumbers(15, 0)); // should throw an error
  console.log(divideNumbers("hello", 7)); // should throw an error
  console.log(divideNumbers(12)); // should throw an error
} catch (error) {
  console.error(error.message);
}
