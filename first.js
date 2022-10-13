"use strict";
exports.__esModule = true;
exports.addTwoNumbers = void 0;
/*
function addTwoNumbers(value1,value2){  // define it showing as compliant
    return value1 + value2   //returns paramerters
}
console.log(addTwoNumbers(2,2)); // passing arguments and callout function

/*
function addTwoNumbers(value1 : number ,value2: number){  // now we defined a number no problem here
    return value1 + value2   //returns paramerters
}
console.log(addTwoNumbers(2,"abc")); // passing arguments and callout function , we gave string instead of number
//shows error at code written time.
*/
function addTwoNumbers(value1, value2) {
    return value1 + value2; //returns paramerters
}
exports.addTwoNumbers = addTwoNumbers;
console.log(addTwoNumbers(2, 2)); // passing arguments and callout function , we gave string instead of number
//shows error at code written time.
