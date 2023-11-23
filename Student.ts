class Stud
{
    Id:number;
    Name:string;
  
    S1:number;
    S2:number;
    S3:number;

    constructor(Id:number,Name:string,S1:number,S2:number,S3:number)
    {
        this.Id=Id;
        this.Name=Name;
        this.S1=S1;
        this.S2=S2;
        this.S3=S3;
    }

    per()
    {
        const totalmark=this.S1=this.S1+this.S2+this.S3;
        const persentage=totalmark/3;

    }

    print()
    {
        const cal=this.per();
        const totalmarks=this.S1 + this.S2 +this.S3;
        const per=totalmarks/3;

        console.log(`totalmarks: ${totalmarks}`);
        console.log(`persentage: ${per}`);
    }
}

const s1=new Stud(1,"tanu",45,45,77);
s1.print();