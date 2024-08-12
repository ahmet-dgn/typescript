//Typescript takes T and U as a generic type. The concatenation function then becomes flexible. T and U can be  strings, numbers etc.
function merge<T, U>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

const mergedObj = merge({ name: "Can", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);

//In this example, I set the object type to T and U. This allows me to use only object types with the merge2 function.
//It is mandatory to use the "extends" keyword to assign types to generic functions.
function merge2<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj2 = merge2({ name: "Ahsen", hobbies: ["Music"] }, { age: 3 });
console.log(mergedObj2);
