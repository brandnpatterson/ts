"use strict";
exports.__esModule = true;
var lucky = 23;
var favoriteNumber = function (value) {
    console.log("My favorite number is " + value);
};
favoriteNumber(lucky);
var pow = function (x, y) {
    return Math.pow(x, y).toString();
};
var numbers = pow(1, 2);
console.log(numbers);
var brandon = {
    first: 'Brandon',
    last: 'Patterson'
};
var arr = [];
arr.push(brandon);
var tuple = [2, 'hello', true];
// Generics
var Observable = /** @class */ (function () {
    function Observable(value) {
        this.value = value;
    }
    return Observable;
}());
var x;
