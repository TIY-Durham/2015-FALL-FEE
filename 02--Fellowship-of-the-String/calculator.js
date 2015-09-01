// var sum = 0 + 1;
console.log('Uh, hello? Computer?');

console.log(sum);

// A FUNCTION DEFINITION!
// If I wanted mutliple variables: var A, B
function addition (A, B){
  // console.log('my parameter was ' + parameter);

  return A + B;
}

console.log(addition);

console.log(console.log);

console.log('sum is ' + sum); // What gonna happen?

var sum = addition(0, 0); // FUNCTION INVOCATION!

console.log('sum is ' + sum); // What did addition() output?

console.assert(true);
console.assert(addition(0,0) === 0);
console.assert(addition(0,1) === 1);
console.assert(addition(0,2) === 2);
console.assert(addition(0,3) === 3);
console.assert(addition(0,4) === 5);
