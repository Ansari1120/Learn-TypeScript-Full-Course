// function sing(song : string){
//  console.log(`singing: ${song}!`);
// }

// // parameters

// function singTwo(first: string, second: string) {
//     console.log(`${first} / ${second}`);
//     }
//     // Logs: "Ball and Chain / undefined"
//     singTwo("Ball and Chain");
//     // ~~~~~~~~~~~~~~~~
//     // Error: Expected 2 arguments, but got 1.
//     // Logs: "I Will Survive / Higher Love"
//     singTwo("I Will Survive", "Higher Love"); // Ok
//     // Logs: "Go Your Own Way / The Chain"
//     singTwo("Go Your Own Way", "The Chain", "Dreams");
//     // ~~~~~~~~
//     // Error: Expected 2 arguments, but got 3

// //function defualt values
// function ratesong(song:string,rating=0){
//     console.log(`${song} gets rating ${rating}`)
// }
// console.log(ratesong("song name"))
// console.log(ratesong("song name"),2)

//rest parameter 
// function singAllTheSongs(singer: string, ...songs: string[]) {
//     for (const song of songs) { // for of loop
//     console.log(`${song}, by ${singer}`);
//     }
//     }
//     singAllTheSongs("Alicia Keys","abc"); // Ok
//     singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face"); // Ok
//    //singAllTheSongs("Ella Fitzgerald", 2000);
//     // ~~~~
//     // Error: Argument of type 'number' is not
//     // assignable to parameter of type 'string'.

//optional parameter
function announceSong(song: string, singer?: string) {
    console.log(`Song: ${song}`);
    if (singer) {
    console.log(`Singer: ${singer}`);
    }
    }
    announceSong("Greensleeves"); // Ok
    announceSong("Greensleeves", undefined); // Ok
    announceSong("Chandelier", "Sia"); // Ok


//Type: (songs: string[]) => number
function singSongs(songs: string[]) {
for (const song of songs) {
console.log(`${song}`);
}
return songs.length;
}

// //explicit return types

// var song = "song this";
// function func_name (song: string):Date | undefined{
//     console.log(new Date());
//     switch(song){
//         case "song name 1":
//             return new Date('');
//         case "song this":
//             return new Date('April 20,2002');
//         default:
//             return undefined;
//     }
// } // date or undefined


// //function type paranthesis
// let ano:() => string | undefined;
// let ano2:(()=>string) | undefined;

// parameter type inferences

// const songs = ["text1","text2","text3"]
// songs.forEach((songs,index)=>{
//     console.log(`${songs} is at index ${index}`);
// });

// //optional parameter

// function playgame(game1:string,game2?:string){
//     console.log(`game1 : ${game1}`);
//     if(game2){
//         console.log(`game2: ${game2}`)
//     }
// }
// playgame("House of the dead");
// playgame("PUBG","GTA vice city"); // either or two properties optionally used as an argument


//return types

// function sungasong(songs:string[]){
// for(const song of songs){
//     console.log(`${song}`);
// }
// return songs.length;
// }

// var fn = function(): number{
// return 1;
// };
// console.log(fn());

// //explicit return types
// var song = "Strange fruits";
// function getSongRecording(song:string): Date | undefined {
// switch(song){
//     case "strange fruits":
//         console.log(new Date('April 20,1940'));
//         return new Date('April 20,1940');
//     // case "Green Leeves":
//     //     return "unknown";  // the type isnt describe while making function so type is not assignable here.
//     default:
//         return undefined;
// }

// }
// //function types



// //callback functions
// function func1(callback:Function){
//     console.log("Please wait !");
//     callback();   // a function func1 runs until the below function is recieved.
// }
// let arr=[1,2,3,4,5,6,7,8,9,10];
// function func2(){
//     console.log("i have done !");  // until this function is compeleted the above func1 then run
//     arr.forEach(element => {
//         console.log(arr[element]);
//     });
// }
// func1(func2); // a func1 parameter a func2 passed 


// // function type paranthesis
// //type is a function that returns union string or undefined
// let returnStringOrUndefined: () => string | undefined;

// // parameter type inferences

// let vari2 = ['text1','text2','text3'];
// vari2.forEach((vari2,index)=>{
// console.log(vari2,index);  // printing alongwith index  inferring types of parameter 
// })

// //function type aliases

// type value1 = (abc : string ) => number //parameter abc and returns number

// function func_name(value2:value1){ //inheriting property of type value1 which is string
//     console.log(value2("Pakistan"));  
// }
// func_name((abc)=>3441); //passing function into function as argument.


// //void return
// function another_function(message : string) : void {
//     console.log(message)
// }
// let var_new: string | number // string and number
// var_new = func_name()        // type void is not assinable to other types but same types.


// // never returns
// function never_name(message:string): never{
// throw new Error("function stucked.")
// }

// function overload

function sum_out(a:string,b:string):string;
function sum_out(a:number,b:number):number;
function sum_out(a:any , b:any):any{ // can be used to alias string or can be add numbers as well
    return a+b;
}
console.log(sum_out("hello","there"));
console.log(sum_out(1,2));





