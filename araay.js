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
var array_type;
//tuple variable
var employee = [1, "string data", false]; // type defined as square brackets represents tuple
