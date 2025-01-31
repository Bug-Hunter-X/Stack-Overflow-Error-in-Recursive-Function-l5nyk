function myFunction(a, b) {
  if (a === 0) {
    return b; 
  }
  return myFunction(a - 1, a + b); 
}