import { IBird, IKillerBirds } from "./interfaces"

let x = 'hello :)'
let a: number = 908974867
let b: string | number | boolean = 'another string'

console.log(typeof(x))

a = 12345
console.log(typeof(a))

b = false
console.log(typeof(b))


function testTypescript(num1: number, num2: number): number{
    return num1 * num2
}

console.log(testTypescript(3, 4))

//arrays in typescript

function arrayFunction(arr1: string[]){
    return arr1
}

console.log(arrayFunction(['hi', 'I like bananas', 'its thursday']))

/**
 * Objects
 * There are 2 ways to declare shape of object
 * 1. Type - limitations/ restricted
 * 2. Interface - more flexible
 */

type TBird = {
    wings: number
    beak: boolean
    feathers: number | string 
    color?: string //? makes it optional
}

const bird1: TBird = {
    wings: 2,
    beak: true,
    feathers: 2000,
}

const bird2: TBird = {
    wings: 5,
    beak: false,
    feathers: 2,
    color: 'blue'
}

const bird3: TBird = {
    wings: 30,
    beak: true,
    feathers: 'none',
    color: 'dark blue'
}

/**
 * interfaces in typescript
 */

const owl: IBird = {
    wings: 2,
    nocturnal: true,
    family: ['Joe', 'Jane', 'Jack'],
    flies: true
}

const eagle: IKillerBirds = {
    wings: 2,
    nocturnal: false,
    flies: true,
    family: ['Joe', 'Jane', 'Jack'],
    edible: false,
    hasKilled: [
        {type: 'racoon', weight: 12, color: 'dark brown'},
        {type: 'rat', weight: 1, color: 'gray'},
    ],
    phoneNumber: 6783459856
}