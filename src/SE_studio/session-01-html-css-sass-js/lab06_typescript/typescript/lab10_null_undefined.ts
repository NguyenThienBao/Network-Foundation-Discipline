// Null and Undefined

console.log(null == undefined);
console.log(null === undefined);

let a = null;
let b = undefined;

console.log(typeof(a)); 
// Weird right null return Object,
// but that is how it is in JavaScript from the start,
// UnLike C and Java, using ASCII Decimal Code
// Javascript using special internal bit patterns, and Object and Null happens to be the same.
// Many propose to change it but it is too late now, so we have to live with it.
console.log(typeof(b));

// null is more about nothing, no value.
// undefined is more about uninitialized, not assigned a value, dont know what the value is yet.

// With strictNullChecks on, when a value is null or undefined,
// you will need to test for those values before using methods or properties on that value.
// Just like checking for undefined before using an optional property, we can use narrowing to check for values that might be null:

function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}

// Non-null Assertion Operator (Postfix "!")

function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}