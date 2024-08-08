"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
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
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    addEmployee(name) {
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
//# sourceMappingURL=classes.js.map