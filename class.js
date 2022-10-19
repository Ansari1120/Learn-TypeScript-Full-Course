// class student { //making a class
//    student_roll:number; //setting properties
//    student_name:string;
//    constructor(std_roll:number,std_name:string){ //make a constructor with parameters
//     this.student_name = std_name,  //using class properties under constructor
//     this.student_roll = std_roll;
//    }
//    display(){ //assigning values to the properties defined.
//     console.log(`name = ${this.student_name} , having roll number = ${this.student_roll}`)
//    }
// } 
// let display_name = new student(123,"Ahmed"); //instantiate object created
// display_name.student_name = "shahid"  //changed earlier values
// display_name.student_roll = 567  
// display_name.display(); 
// console.log(display_name); //using old values , can be double assigned.
//strtict checking is enabled
var Person = /** @class */ (function () {
    function Person(std_roll, std_name) {
        this.name = "adbul sami", //using class properties under constructor
            this.roll = 23;
        console.log("".concat(this.roll));
    }
    return Person;
}());
