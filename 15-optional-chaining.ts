// TypeScript 3.7
let mysteriousObject: any = {};

let x = mysteriousObject?.foo?.too();

console.log(x)

mysteriousObject = null;
let y = mysteriousObject?.foo ?? "Something else";
console.log(y)