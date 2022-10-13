/**type vari = number | string | boolean;

let newVar : vari; // aliasing
let anotherVar : vari;

newVar = "Pak";
newVar = 123;
newVar = true
*/
// dont need to write type again and again but used with the aliases form with other variables 

/*
// example 02 

type flower =  "rose" | "tulip" // flower is custom type used to defined aliase

let var10: flower;
var10 = "rose";

let var11 : flower
var11  = "lilly"
*/

// combining type aliases

type id = number | string 
type id2 = id | boolean | null  // one aliase terms used in another values by assign it to 2nd aliase.

