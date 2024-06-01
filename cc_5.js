//U81623325
class Employee {
    constructor(name, salary)
{this.name =name;
this.salary= salary;
console.log(`Employee Name: ${this.name}, Salary: ${this.salary}`)
}
GetAnnualSalary() {
    return this.salary * 12;
}
}
// Commit message: "Implement Employee class with name, salary properties, and annual salary calculation."
class Manager extends Employee {
    constructor(name, salary, department) {
       this.department= department;
       super(name,salary);  
    }
    GetAnnualSalary() {
        bonus= this.salary * 0.15 * 12
        salary= this.salary * 12
        TotalAnnualSalary= bonus + this.salary
       console.log(`Bonus: ${bonus}, Total Annual Salary with Bonus: ${TotalAnnualSalary}`)
       return bonus= this.salary * 0.15
    }
}
// Commit message: "Create Manager subclass with bonus calculation."
Manager1 = new Manager('Bob Ross',6600,'Digital')
Manager2 = new Manager('Debbie Little',7205,'Finance')

Manager1.GetAnnualSalary()
Manager2.GetAnnualSalary()
// Commit message: "Instantiate Manager objects and calculate annual salaries with bonuses."
