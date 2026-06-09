function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
// printId({ myID: 22342 });

// TypeScript will only allow an operation if it is valid for every member of the union.
// For example, if you have the union string | number,
// you can’t use methods that are only available on string:

// Error
// function printId(id: number | string) {
//   console.log(id.toUpperCase());
// }

// Then you can Narrow. 
// Narrowing occurs when TypeScript can deduce a more specific type for a value based on the structure of the code.

function printIdB(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

// OK
printIdB(101);
// OK
printIdB("202");


// Sometimes you’ll have a union where all the members have something in common.
// For example, both arrays and strings have a slice method.
// If every member in a union has a property in common, you can use that property without narrowing:

// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}