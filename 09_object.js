let student={
    id:1,
    firstName:"Suraj",
    lastName:"Bhosale",
    isWorking:true,
    collegeName:"Sangola College, Sangola",
    address:{
        street:"wakad",
        city:"pune",
        pin:431205  
    },
    friend :["bill","Stew","Elon"],
    show : function(){
        console.log("I am in show() function");
    },
     addressDetails: function()
     {
        return `Address is: Street ${this.address.street}, City ${this.address.city}, PIN ${this.address.PIN}`
     }   
};
student.marks = {
    math: 80,
    physics: 60,
    drawing: 70
}
console.log(student.addressDetails());
console.table(student);
student.address.city=431205
console.log(student.address.city);
console.log(student.friend[student.friend.length-1]);
student.show();