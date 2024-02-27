function divideNumbers(a, b) {
if (typeof a !== "number" || typeof b!=="number"){
  throw new Error('a and b must be numbers');
}else if(b===0){
  throw new Error('Cannot divide number by zero');
}
return a/b
}

  try {
  console.log(divideNumbers(10, 2)); // should print 5
} catch (error) {
  console.error('error' ,error.message);
}
try {
  console.log(divideNumbers(15, 0)); // should throw an error
} catch (error) {
  console.error('error' ,error.message);
}
try {

  console.log(divideNumbers("hello", 7)); // should throw an error
} catch (error) {
  console.error('error' ,error.message);
}
try {
  console.log(divideNumbers(12)); // should throw an error
} catch (error) {
  console.error('error' ,error.message);
}
