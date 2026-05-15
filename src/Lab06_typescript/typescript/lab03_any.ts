let obj: any = { x: 0 };
console.log(obj, " - ", typeof(obj));
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.

// This can result in fatal error that crash everything. (Un-comment and try)
// obj.foo();
// console.log(obj, " - ", typeof(obj));
// obj();
// console.log(obj, " - ", typeof(obj));

obj.bar = 100;
console.log(obj, " - ", typeof(obj));
obj = "hello";
console.log(obj, " - ", typeof(obj));
const n: number = obj;
console.log(obj, " - ", typeof(obj));