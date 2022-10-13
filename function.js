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
function announceSong(song, singer) {
    console.log("Song: ".concat(song));
    if (singer) {
        console.log("Singer: ".concat(singer));
    }
}
announceSong("Greensleeves"); // Ok
announceSong("Greensleeves", undefined); // Ok
announceSong("Chandelier", "Sia"); // Ok
//Type: (songs: string[]) => number
function singSongs(songs) {
    for (var _i = 0, songs_1 = songs; _i < songs_1.length; _i++) {
        var song = songs_1[_i];
        console.log("".concat(song));
    }
    return songs.length;
}
function sum_out(a, b) {
    return a + b;
}
console.log(sum_out("hello", "there"));
console.log(sum_out(1, 2));
