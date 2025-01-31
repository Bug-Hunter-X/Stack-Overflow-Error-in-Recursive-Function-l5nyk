function myFunction(a, b) {
  if (a === 0) {
    return b; 
  } else if (a < 0) {
    return b; //added condition to handle negative numbers
  } else if (a > 1000) { // Add a check for a large number of recursions to prevent stack overflow
    console.log("Potential stack overflow prevented");
    return b; // Return a safe default value. You could choose to throw an error or handle it differently based on your application's needs
  }
  return myFunction(a - 1, a + b); 
} 