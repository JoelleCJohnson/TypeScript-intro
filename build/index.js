"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 'hello :)';
let a = 908974867;
let b = 'another string';
console.log(typeof (x));
a = 12345;
console.log(typeof (a));
b = false;
console.log(typeof (b));
function testTypescript(num1, num2) {
    return num1 * num2;
}
console.log(testTypescript(3, 4));
//arrays in typescript
function arrayFunction(arr1) {
    return arr1;
}
console.log(arrayFunction(['hi', 'I like bananas', 'its thursday']));
const bird1 = {
    wings: 2,
    beak: true,
    feathers: 2000,
};
const bird2 = {
    wings: 5,
    beak: false,
    feathers: 2,
    color: 'blue'
};
const bird3 = {
    wings: 30,
    beak: true,
    feathers: 'none',
    color: 'dark blue'
};
/**
 * interfaces in typescript
 */
const owl = {
    wings: 2,
    nocturnal: true,
    family: ['Joe', 'Jane', 'Jack'],
    flies: true
};
const eagle = {
    wings: 2,
    nocturnal: false,
    flies: true,
    family: ['Joe', 'Jane', 'Jack'],
    edible: false,
    hasKilled: [
        { type: 'racoon', weight: 12, color: 'dark brown' },
        { type: 'rat', weight: 1, color: 'gray' },
    ],
    phoneNumber: 6783459856
};
