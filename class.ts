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

// class Person { //making a class
//     roll:number; //setting properties , exclamation can be used | , optional ? making if not often needed , 
//     name:string; //want to declare a peropert which wont to be changed later on use readonly keyword then
//     constructor(std_roll:number,std_name:string){ //make a constructor with parameters
//      this.name = "adbul sami",  //using class properties under constructor
//      this.roll = 23;
//      console.log(`${this.roll}`);
//     }
//  }

 //
 //interface implements and class both simultaneously used : 
// interface learner{
//     course_name:string
//  }
//  interface book {
//     book_name:string
//  }
//  class Another implements learner , book{
//     id = 11
//     course_name = "OOP"
//     book_name = "java"
//     constructor(course : string){ //can be initialized values outside or inside constructor 
//        this.book_name             //to remember object 
//        this.course_name = course
//     }
    
//  }
//  let var_name = new Another("my course");
//  console.log(var_name);
 
 
             
 
//class method 
//class method
 
class Greet { 
    do_something(num : number , num1:number){ //method
        let sum = num+num1;
        console.log(`a number ${sum} got remainder !`);
        return sum;
    }
}
let obj = new Greet();
obj.do_something(7,15);
 
 
 
 
//class property
 
class Tour {
    destination : string
    constructor(destination:string){
        this.destination = destination;
    }
 
}
let obj1 = new Tour("maldives");
obj1.destination
 
//function property
 
class Func_property{
    taskes_parameters = (input:boolean) => input? "yes" : "no";
}
const choose_either = new Func_property();
choose_either.taskes_parameters(true) //say either true or false

//strict checking
 
class Check{
    immediate = 0;
    earlier : string;
    post : number|undefined;
    pre : number;  // shows an error since the value coulb be undefined/null
    constructor(){
        this.earlier = "nothing"; //assgined there if not above when writting property
    }
}


Example 02 : 
//exclamation option checking
 
 
class ActivitiesQueue {
pending!: string[]; // Ok  // since the property dont need to be explicity undefined we make it optional through exclamation !
initialize(pending: string[]) {
this.pending = pending;
}
next() {
return this.pending.pop();
}
}
const activities = new ActivitiesQueue();
 
activities.initialize(['eat', 'sleep', 'learn'])
activities.next();




// optional property
 
 
class ActivitiesQueue {
pending?: string[]; // Ok  either we can use this property when needed ro let it be remain unused.
adding!: string[];
initialize(pending: string[]) {
this.pending = pending;
}
next() {
return this.adding.pop();
}
}
const activities = new ActivitiesQueue();
 
activities.initialize(['eat', 'sleep', 'learn'])
activities.next();

// readonly property
 
 
class A_quote{
    readonly quote :string;
 
    constructor(quote:string){
        this.quote = quote;
    }
}
var see = new A_quote("friend in need is a firend indeed");
 
see.quote="wont make changes" //since the property is readonly.
 
 
 
