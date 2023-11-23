var Stud = /** @class */ (function () {
    function Stud(Id, Name, S1, S2, S3) {
        this.Id = Id;
        this.Name = Name;
        this.S1 = S1;
        this.S2 = S2;
        this.S3 = S3;
    }
    Stud.prototype.per = function () {
        var totalmark = this.S1 = this.S1 + this.S2 + this.S3;
        var persentage = totalmark / 3;
    };
    Stud.prototype.print = function () {
        var cal = this.per();
        var totalmarks = this.S1 + this.S2 + this.S3;
        var per = totalmarks / 3;
        console.log("totalmarks: ".concat(totalmarks));
        console.log("persentage: ".concat(per));
    };
    return Stud;
}());
var s1 = new Stud(1, "tanu", 45, 45, 77);
s1.print();
