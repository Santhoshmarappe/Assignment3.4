
//Create an abstract class Department with one abstract method:

abstract class Department {

    constructor(public name: string) {
    }

    DptName(): void {
        console.log("Department name: " + this.name);
    }
     abstract Meeting(): void; // must be implemented in derived classes
}

//department 1- productDepartment extends Depatment
class productDepartment extends Department {

    constructor() {
        super("Product Development department and Technical delivery"); // constructors in derived classes must call super()
    }

    Meeting(): void {
        console.log("The Product Development meets each Monday at 10am for product implimentation.");
    }

}
//department 2- HRDepartment extends Depatment
class HRDepartment extends Department {

    constructor() {
        super("Human Resource Management"); // constructors in derived classes must call super()
    }

    Meeting(): void {
        console.log("The Hr Department meets each Candidates for shortlisting");
    }
}

//productDepartment extend Depatment class
let department: Department;
department = new productDepartment();
department.DptName();
department.Meeting();

//HRdepartment extend Depatment class
let dept2:Department
dept2 = new HRDepartment();
dept2.DptName();
dept2.Meeting();

//Output Checking info
document.write("Please check the console for abstract class Department with abstract method:");
