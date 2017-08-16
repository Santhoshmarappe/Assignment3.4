//Create an abstract class Department with one abstract method:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.DptName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
//department 1- productDepartment extends Depatment
var productDepartment = (function (_super) {
    __extends(productDepartment, _super);
    function productDepartment() {
        return _super.call(this, "Product Development department and Technical delivery") || this;
    }
    productDepartment.prototype.Meeting = function () {
        console.log("The Product Development meets each Monday at 10am for product implimentation.");
    };
    return productDepartment;
}(Department));
//department 2- HRDepartment extends Depatment
var HRDepartment = (function (_super) {
    __extends(HRDepartment, _super);
    function HRDepartment() {
        return _super.call(this, "Human Resource Management") || this;
    }
    HRDepartment.prototype.Meeting = function () {
        console.log("The Hr Department meets each Candidates for shortlisting");
    };
    return HRDepartment;
}(Department));
//productDepartment extend Depatment class
var department;
department = new productDepartment();
department.DptName();
department.Meeting();
//HRdepartment extend Depatment class
var dept2;
dept2 = new HRDepartment();
dept2.DptName();
dept2.Meeting();
//Output Checking info
document.write("Please check the console for abstract class Department with abstract method:");
