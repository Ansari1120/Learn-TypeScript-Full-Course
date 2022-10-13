// //type alias object
// type poet = {
//     born : number;
//     name: string;
// };
var calculator2 = {
    valFirst: 0,
    valTwo: 0,
    add: function () {
        if (typeof this.valFirst === 'number' && typeof this.valTwo === 'number') {
            return this.valFirst + this.valTwo;
        }
        else {
            return 0;
        }
    },
    sub: function () {
        if (typeof this.valFirst === 'number' && typeof this.valTwo === 'number') {
            return this.valFirst - this.valTwo;
        }
        else {
            return 0;
        }
    },
    division: function (a, b) { return a / b; } //function PropertyDecorator
};
calculator2.valFirst = 45;
calculator2.valTwo = 78;
//creating a method outide of interface we can optionally do this
calculator2.multiply = function (a, b) { return a * b; };
//we can add dynamic a method and do more calculation applied on predefined earlier method
calculator2.division = function (a, b) { return a + b + 200; };
console.log(calculator2.division);
console.log(calculator2.multiply(6, 7));
console.log(calculator2.add(), calculator2.division(44, 4), calculator2.sub());
