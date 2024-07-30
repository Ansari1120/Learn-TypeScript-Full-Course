// let bike : {type : string, model : string , year : number};
// bike = {
// type : "Honda",
// model : "YBR",
// year : 2002,
// };
var poyonoil1 = Math.random() > 0.5
    ? { name: "The Double Image", pages: 7, type: "pages" }
    : { name: "Her Kind", rhymes: true, type: "rhymes" };
if (poyonoil1.type === "pages") {
    console.log("It's got pages: ".concat(poyonoil1.pages)); // Ok
}
else {
    console.log("It rhymes: ".concat(poyonoil1.rhymes));
}
poyonoil1.type; // Type: 'pages' | 'rhymes'
//poyonoil1.pages;
// ~~~~~
// Error: Property 'pages' does not exist on type 'Poem'.
// Property 'pages' does not exist on type 'PoemWithRhymes'.
