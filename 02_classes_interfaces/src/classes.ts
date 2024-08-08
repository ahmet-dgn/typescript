class Department {
  protected employees: string[] = [];
  constructor(private id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
const it = new Department("id1", "IT");
it.addEmployee("Max");
it.addEmployee("Manu");
it.describe();
console.log(it);

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    // The `super` call invokes the constructor of the base class `Department`.
    // `super(id, "IT")` passes the `id` and "IT" values to the `Department` class's constructor.
    super(id, "Accounting");
  }
  addReport(text: string) {
    this.reports.push(text);
  }
  addEmployee(name: string) {
    if (name == "Name") {
      return;
    }
    this.employees.push(name);
  }
  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("d2", []);
accounting.addReport("Something went wrong...");
accounting.printReports();
accounting.addEmployee("Name");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();
