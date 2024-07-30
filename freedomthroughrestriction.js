/*// Previously: sayMyName(firstName, lastNameName) { ...
function sayMyName(fullName) { // only arugments
    console.log(`You acting kind of shady, ain't callin' me ${fullName}`);
    }
    sayMyName("Beyoncé", "Knowles"); // more than one parameter.
    // ~~~~~~~~~
    // Expected 1 argument, but got 2.
    */
// Previously: sayMyName(firstName, lastNameName) { ...
function sayMyName(fullName) {
    console.log("You acting kind of shady, ain't callin' me ".concat(fullName));
}
sayMyName("Beyoncé"); // more than one parameter.
/
// Expected 1 argument, but got 2.
