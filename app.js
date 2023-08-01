function divideNumbers(a, b) {
try {  
   if(typeof a!=="number" || typeof b!=="number"){
throw new Error("Both arguments must be numbers");
}
if(b===0){
throw new Error("Cannot divide by zero");
}
return a/b;
} 
 catch (error) {
  console.error(error.message);
}}
  console.log(divideNumbers(10, 2)); // should print 5
  console.log(divideNumbers(15, 0)); // should throw an error
  console.log(divideNumbers("hello", 7)); // should throw an error
  console.log(divideNumbers(12)); // should throw an error

