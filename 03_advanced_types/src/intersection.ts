type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};
//intersection works with "&" (type typeAB = typeA & typeB)
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Ahmet",
  privileges: ["create-server"],
  startDate: new Date(),
};

console.log(e1);
