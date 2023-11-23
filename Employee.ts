class Emp
{
    Id:number;
    Name:string;
  
    Sal:number;

    constructor(Id:number,Name:string,Sal:number)
    {
        this.Id=Id;
        this.Name=Name;
        this.Sal=Sal;
    }

    cal():Number
    {
        const HRA= this.Sal*0.40;
        const DA=this.Sal*0.20;
        const TA=this.Sal*0.10;
        const gross_sal=this.Sal+HRA+DA+TA;
        return gross_sal;

    }

    printsal():void{
        const gross_sal=this.cal();
        
        const HRA=this.Sal*0.40;
        const DA=this.Sal*0.20;
        const TA=this.Sal*0.10;
        

        console.log(`Employee ID: ${this.Id}`);
        console.log(`Employee Name: ${this.Name}`);

        console.log(`basic salary: ${this.Sal}`);
      
        console.log(`HRA : ${HRA}`);
        console.log(`DA: ${DA}`);
        console.log(`TA: ${TA}`);
        console.log(`Gross_sal: ${gross_sal}`);

   
    }
}
const e=new Emp(1,"tanu",4545);
e.printsal();