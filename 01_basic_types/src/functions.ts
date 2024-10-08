function addNumbers(n1: number, n2: number) {
  return n1 + n2;
}

function printResultNumber(num: number): void {
  console.log("Result: " + num);
}
//"void " mean  the function has not return statement.

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResultNumber(addNumbers(5, 12));

let combineValue: (a: number, b: number) => number;

combineValue = addNumbers;

console.log(combineValue(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
