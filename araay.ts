// let new_array = [1,2,4,true]
// new_array.push(56)
// console.log(new_array);


// ts array 
// let new_array2 : (string|number) []; //two datatypes can be added into array string and number

// new_array2 = [124,"karachi",332,33,"pakistan",true]; 

// // ts array more

// // let new_var: string | number[] | boolean [];

// // new_var = "pakistan", [1,2,4,5,5] , [true,false];  // direct accessable using just this line not above alongwith

// for(let i in new_var){
//     console.log(new_var[i]);
// }


// 2 multi dimenstional array

// let var_array : (string|number)[][]

// var_array = [
//     ["monday","tuesday","wednesday","thursday"],[1,2,3,4]
// ]
// for(let calendar in var_array){
//     console.log(var_array[calendar]);
// }

// //incorrect type

// function fun_name(var1:string[]){
//     console.log(var1[323232].length); // it should throw error since the string type is defined and number is given
// }


//spreads
// let vari1 = ["t1","t2"]
// let vari2  = [1,2,3]

// let join = [...vari1,...vari2];

// for(let i in join){
//     console.log(join[i]);
// }

//spread rest parameter example 02
// function spread(vari3:string,...vari4 : string[]){
//     for(let i1 of vari4){
//         console.log(vari3,i1)
//     }
// }
// let new_vari = ["tone","ttwo"]
// spread("lahore",...new_vari);

//array definition
// let array_type:(string|number)[]
//tuple variable
// let employee : [number , string , boolean] = [1,"string data",false]; // type defined as square brackets represents tuple



// tuple passed as rest parameter.

function func_spread(var_ano:string,var_ano2:number){
    console.log(`variable1 ${var_ano}`);
    console.log(`variable1 ${var_ano2}`);
}
let data1 : [number,string]=[1947,"pakistan"];
func_spread(...data1);  // different type number is not assignable to string

// tuple inferences


//1,2,5,6,7,11,12,13 

// const assertion

let show = ["new-name",123,true]
let show2 = ["pakistan",123,true] as const // const assertion. no more types or values are not allowed.


//union type array
let new_array : string | number[]


new_array = "ahmed",[1,2,3,4,5,6];
// for(let i of new_array){
// console.log(new_array[i]);    
// }

// //2D array

let TwoDarray : number[][]

TwoDarray = [[2,4,6],[1,3,5,7],[4,3,5,6,8]];

console.log(TwoDarray);

//array memebers
const defenders = ["Clarenza", "Dina"];


// Type: string
const defender = defenders[0];
console.log(defender);

//spread example

let arrayOne = ["how","are","you!"];

let arrayTwo = [1,2,4,5];

let conJoind = [...arrayOne,...arrayTwo];

console.log(conJoind);

//tuple assignablity and accessing its members
 const tupleThree : [boolean,number,string] = [false,1922,"ok"];

 const toAccessAnElement :[boolean , number]= [tupleThree[1]];  

 const toUseAllvaluesOftupleThree:[boolean , number] =   tupleThree;
 //all values should be assined not desired of two or three ,
 //similarly all acceession is necessary not just an element we want
// arguments 2 but parameter is 3

//tuple as rest parameter
 function Student(name:string,value:[number,boolean]){
    console.log(`Your name is ${name} has an id : ${value[0]}
    and your identity is ${value[1]}`);
 }
let newStudent :[string, [number, boolean]][] =[
  ["abc",[1,true]],["sameas",[2,false]],["toyou",[3,true]]];

newStudent.forEach(newStudent => Student  (...newStudent));




