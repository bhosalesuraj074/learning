class student
{
    name 
    roll
    
}

function show(rollno,name)
    {
        this.rollno=rollno;
        this.name=name;
        return this.name + " "+this.rollno;
    }

console.log(show.call(student,10,"Suraj"));
