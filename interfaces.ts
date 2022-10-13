// //type alias object
// type poet = {
//     born : number;
//     name: string;
// };
 
// // interface
// interface poet {
//     born:number;
//     name:string;
// };
 
//optional properties
// interface Person {
//     f_name:string;
//     middle_name?:string; //optional name
//     last_name:string;
// }
// function display_name(var1:Person){
//     console.log(`${var1.f_name} ${var1.middle_name} ${var1.last_name}`);
// }
 
// display_name({f_name:"Ahmed",last_name:"Ansari"});
 
//readonly
// interface Person {
//     readonly f_name:string;  //
//     middle_name?:string; //optional name
//     last_name:string;
// }
 
//readonly example 02
 
// interface Page {
//     title : string,  // values can vary in that variable
//     readonly text : string // once value assigned cant be changed
// }
 
// let vari : Page = {
//     title : "the honor book",
//     text: "to be done and dusted"
// }
 
// console.log(vari);
 
// //making a function and accessing both title and text variable
// //tryna modify them lets see what we got !
// checkout(vari);
// function  checkout (page:Page){
//     console.log(page.text); //readonly result of variable displayed
//     page.title = "this is the title"
//     //page.text = "this cant be assigned"; // cant be used
//     console.log(page);
 
// }
 
//functions and methods
 
// interface tv{
//     number_channel:number,
//     volume_method():number
// }
// let vari_name:tv = {
//     number_channel : 200,
//     volume_method() {
//         return 123;
//     },
// }
// console.log(vari_name.number_channel);
// console.log(vari_name.volume_method());
 
//functions and methods example 02 :
 
// interface calc {
//     add(a:number,b:number):number;
//     sub(a:number,b:number):number;
//     division:(a:number,b:number)=>number;
// }
 
// let calculator : calc = {
//     add(a,b){
//         return a+b;
//     },
//     sub(a,b) {
//         return a-b;
//     },
//     division: (a,b) => a/b
// }
// console.log(calculator.add(4,5),calculator.sub(78,44),calculator.division(33,3));
 
//call signature
// interface FunctionWithCount {
//     count: number;
//     (): void;
//     }
//     let hasCallCount: FunctionWithCount; // saving interface defined properties into a variable
//     function keepsTrackOfCalls() {  
//     keepsTrackOfCalls.count += 1;  // calling interface function type
//     console.log(`I've been called ${keepsTrackOfCalls.count} times!`);
//     }
//     keepsTrackOfCalls.count = 0;  // changing count value to 0
//     hasCallCount = keepsTrackOfCalls; // Ok
//     keepsTrackOfCalls();
//     function doesNotHaveCount() {  
//     console.log("No idea!");
//     }
 
// doesNotHaveCount();
 
 
// functions and methods
// interface calc {
//     valFirst:number;
//     valTwo:number;
//     add():number;
//     sub():number;
//     division:(a:number,b:number)=>number;
// }
 
// let calculator : calc = {
//     valFirst:0,  //value initialized
//     valTwo:0,     //value initialized
//     add(){
//         return this.valFirst+this.valTwo;
//     },
//     sub() {
//         return this.valFirst-this.valTwo;
//     },
//     division: (a,b) => a/b //function PropertyDecorator
// }
// console.log(calculator.add(4,5),calculator.sub(78,44),calculator.division(33,3));
// //cant give value since
//so instead of above do below:
// calculator.valFirst=45;
// calculator.valTwo=78; //default values for calculations used in methods
//we can further optionally change this value with our choice of values in argment when calling function
// console.log(calculator.add(),calculator.division(44,4),calculator.sub());
 
 
 
//index interface
 
 
// interface WordCounts {
//     [i: string]: number;
//     }
//     const counts: WordCounts = {};
//     counts.apple = 0; // Ok  // a key is assigned which can be accessed later on
//     counts.banana = 1; // Ok  // a key is assigned which can be accessed later on
//     counts.cherry = false; //boolean is not assignable to type string
//     // Error: Type 'boolean' is not assignable to type 'number'.
 
 
//index interface example 02
 
 
// interface Bio {
//     [a:string]:string|number|Date|boolean|undefined; //supersets possible types
//     name : string;
//     age: number;
//     dob: Date;
//     Gender:'Male' | 'Female';
// }
// const person : Bio = {
//      name : "Ahmed",
//      age: 22,
//      dob : new Date(),
//      Gender : 'Male'
// };
 
// console.log(person);
 
 
 
//numeric index interface
 
interface calc {
    [i:string]:number|Function;
    valFirst:number;
    valTwo:number;
    add():number;
    sub():number;
    division:(a:number,b:number)=>number;
}
 
let calculator2 : calc = {
    valFirst:0,  //value initialized
    valTwo:0,     //value initialized
    add(){
        if(typeof this.valFirst === 'number' && typeof this.valTwo === 'number'){
        return this.valFirst+this.valTwo;
        }
        else {
            return 0;
        }
    },
    sub() {
                if(typeof this.valFirst === 'number' && typeof this.valTwo === 'number'){
        return this.valFirst-this.valTwo;
        }
        else{
            return 0;
        }
    },
    division: (a,b) => a/b //function PropertyDecorator
}
 
calculator2.valFirst=45;
calculator2.valTwo=78;
 
//creating a method outide of interface we can optionally do this
calculator2.multiply = (a:number,b:number) => a*b;
//we can add dynamic a method and do more calculation applied on predefined earlier method
calculator2.division = (a,b)=>a+b+200;
console.log(calculator2.division);
console.log(calculator2.multiply(6,7));
console.log(calculator2.add(),calculator2.division(44,4),calculator2.sub());
 

