//Normally Typescript does not know which type element we are selecting. That's why we need to tell Typescript which element we're selecting.

const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;
userInputElement.value = "Hi there!";
//The exclamation mark indicates that the element selection will never be null.
//Alternative Way: const userInputElement = <HTMLInputElement>document.getElementById("user-input")!; (Doesn't work in React)
