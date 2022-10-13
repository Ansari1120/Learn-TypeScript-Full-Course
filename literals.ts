/*let lifespan: number | "ongoing" | "uncertain";
lifespan = 89; // Ok
lifespan = "ongoing"; // Ok
lifespan = true; // since it is not defined at union side.
// Error: Type 'true' is not assignable to
// type 'number | "ongoing" | "uncertain"'
*/

const vari = "ahmed";


const varia = "Ali";
 
vari = varia;


const firstName : string = null;


let genetics = Math.random() > 0.5
?"message"
:undefined // the value cant be null or undefined , config file type check is enabled.

if(genetics){
    genetics.toUpperCase();
}

genetics.toUpperCase();


let Name : "ahmed" | number 

Name = "Ali"; // cant change defined vlaue , just can compare of conditional statements
name : true
Name = 123;  // can intilize cuz value not initilized earlier


let xyz = ""

xyz = Name;