var Emp = /** @class */ (function () {
    function Emp(Id, Name, Sal) {
        this.Id = Id;
        this.Name = Name;
        this.Sal = Sal;
    }
    Emp.prototype.cal = function () {
        var HRA = this.Sal * 0.40;
        var DA = this.Sal * 0.20;
        var TA = this.Sal * 0.10;
        var gross_sal = this.Sal + HRA + DA + TA;
        return gross_sal;
    };
    Emp.prototype.printsal = function () {
        var gross_sal = this.cal();
        var HRA = this.Sal * 0.40;
        var DA = this.Sal * 0.20;
        var TA = this.Sal * 0.10;
        console.log("Employee ID: ".concat(this.Id));
        console.log("Employee Name: ".concat(this.Name));
        console.log("basic salary: ".concat(this.Sal));
        console.log("HRA : ".concat(HRA));
        console.log("DA: ".concat(DA));
        console.log("TA: ".concat(TA));
        console.log("Gross_sal: ".concat(gross_sal));
    };
    return Emp;
}());
var e = new Emp(1, "tanu", 4545);
e.printsal();
