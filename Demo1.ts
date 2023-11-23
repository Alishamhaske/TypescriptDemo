/*
let message="hello";
console.log(message);
var emp={id:1,name:"tanu"};
console.log(emp.name);
*/


/*
class Date1
{
day:Number;
month:String;
year:Number;

constructor(day,month,year)
{
    this.day=day;
    this.month=month;
    this.year=year;

}
print()
{
    console.log(this.day+"/"+this.month+"/"+this.year);
}
}
const d=new Date1(24,"nov",2023);
d.print();

*/






/*

interface IData
{
    a:Number;
    b:Number;
}

class  Test
{
    print(value:IData)
    {
        console.log(value.a+" "+value.b);
    }
}

   

const IData={a:10,b:20};

const t1=new Test();
t1.print(IData);

*/



/*
interface IStudent
{
    rollno:Number;
    name:string;
    
}
class Student
{
    rollno:Number;
    name:string;
    constructor(rollno,name)
    {
        this.rollno=rollno;
        this.name=name;
    }
}
const s:IStudent=new Student(1,"tanu");
console.log(s);

*/