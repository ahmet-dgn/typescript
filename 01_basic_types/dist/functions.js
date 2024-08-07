"use strict";
function addNumbers(n1, n2) {
    return n1 + n2;
}
function printResultNumber(num) {
    console.log("Result: " + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResultNumber(addNumbers(5, 12));
let combineValue;
combineValue = addNumbers;
console.log(combineValue(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
//# sourceMappingURL=functions.js.map