"use strict";
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
const mergedObj = merge({ name: "Can", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);
function merge2(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj2 = merge2({ name: "Ahsen", hobbies: ["Music"] }, { age: 3 });
console.log(mergedObj2);
//# sourceMappingURL=app.js.map