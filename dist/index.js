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
function getRndColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
console.log(getRndColor());
const userOne = { name: 'mario', score: 75 };
const userTwo = { name: 'yoshi', score: 100 };
function formatUser(user) {
    console.log(`${user.name} has a sciore of ${user.score}`);
}
formatUser(userOne);
formatUser(userTwo);
//formatUser({name: 'yoshi', score: 100, age: 34})//error
