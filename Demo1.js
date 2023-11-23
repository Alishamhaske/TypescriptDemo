/*
let message="hello";
console.log(message);
var emp={id:1,name:"tanu"};
console.log(emp.name);
*/
var Student = /** @class */ (function () {
    function Student(rollno, name) {
        this.rollno = rollno;
        this.name = name;
    }
    return Student;
}());
var s = new Student(1, "tanu");
console.log(s);
