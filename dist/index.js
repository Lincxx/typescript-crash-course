"use strict";
// let age: number = 30;
// let firstName: string = 'Mario';
// let isFictional: boolean
//
// let planet = 'Earth'
// let moons = 1
// let isLarge = false
//
// planet = 'Saturn'
// moons = 145
// isLarge = true
//
// //null & undefined
// let something: null
// let anotherThing: undefined
//
// something = null
// anotherThing = undefined
//#4
//tsc --init - we changed the rootDir and output dir
// tsc --watch
//Now for Node - watching a file
//node --watch dist/index.js
//#5
//--- Arrays
let names = ["lee", "bobby", "fred"];
let ages = [1, 2, 3, 4];
//push new values
names.push("jeremy");
ages.push(23);
//---- type inference with arrays
let fruits = ['apple', 'pears', 'grapes', 'mangoes'];
//fruits.push(true) // error
fruits.push('peaches');
const f = fruits[3];
//this is called a union type
let things = [1, true, 'hello'];
const t = things[0];
//--- object literals
let user = {
    firstName: "Mario",
    age: 43,
    id: 12312
};
//user.firstName = 324//error
//add property
//user.email = "w@mail.com" //error
//---- type inference w/ objects literals
let person = {
    name: 'luigi',
    age: 35
};
//person.name = true //error
//person.age = 45
const p = person.age;
