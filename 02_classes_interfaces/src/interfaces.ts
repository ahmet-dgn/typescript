//Interface only available in Typescript. Vanilla Javascript does not have an interface.
//n TypeScript, an interface is a way to define the structure of an object. It allows you to specify the types of properties and methods that an object should have. Interfaces are used to enforce type checking at compile time, ensuring that objects adhere to a specific structure.

interface Person {
  name: string;
  age: number;
  greet(phrase: string): void;
}

let user1: Person;

user1 = {
  name: "Can",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};
user1.greet("Hi there - I am");
