function divideNumbers(a, b) {
  try
  {
    if(typeof a !== "number" || typeof b !== "number")
    {
      throw new Error("either a or b is not Number");
      
    }
    if(b === 0)
    {
      throw new Error("not allowed to divide by 0");
     
    }
    console.log(a/b);
  }catch(error)
  {
    console.error(error.message);
  }
  
}

// Test cases

  console.log(divideNumbers(10, 2)); // should print 5
  console.log(divideNumbers(15, 0)); // should throw an error
  console.log(divideNumbers("hello", 7)); // should throw an error
  console.log(divideNumbers(12)); // should throw an error
