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
//---------#5
//--- Arrays
// let names: string[] = ["lee", "bobby", "fred"]
// let ages: number[] = [1,2,3,4]
//
// //push new values
// names.push("jeremy")
// ages.push(23)
//
// //---- type inference with arrays
// let fruits = ['apple', 'pears', 'grapes', 'mangoes']
//
// //fruits.push(true) // error
// fruits.push('peaches')
//
// const f = fruits[3]
//
// //this is called a union type
// let things = [1,true, 'hello']
// const t = things[0]
//
// //--- object literals
// let user: {firstName: string, age: number, id: number} = {
//     firstName: "Mario",
//     age: 43,
//     id: 12312
// }
//
// //user.firstName = 324//error
//
// //add property
// //user.email = "w@mail.com" //error
//
// //---- type inference w/ objects literals
// let person = {
//     name: 'luigi',
//     age: 35
// }
//
// //person.name = true //error
// //person.age = 45
//
// const p = person.age
//---------#6 Functions
// functions
// function add(a: number,b: number): number{
//     return a + b
// }
//
// //add('a', true)// error
// add(1,2)
//
// const sub = (a: number,b: number): number => {
//     return a - b
// }
//
// sub(2,3)
//
// //void - means nothing is going to be return
// function addAll(items: number[]):void {
//     const total = items.reduce((a,c)=> a+c, 0)
//     console.log(total)
// }
//
// addAll([1,2,3])
//
// //return type inference
// function formatGreeting(name: string, greeting: string) {
//     return `${greeting}, ${name}`
// }
// const result = formatGreeting('jeremy', 'Hello')
// console.log(result)
//---------#7 Any type
//--- any type - any value, any type and so on.
//it's like a cheat card, pretty just using plain ole JS
// let age: any
// let title
//
// age = 30
// age = false
//
// title = 24
// title = {
//     hello: "world"
// }
//
//
// //--- any type in arrays
// let things: any[] = []
//
// things.push({id:123})
//
// //--- function & any
// function add(val:any): any {
//     return val + val
// }
//
// const res = add("h3llo")
//
// console.log(res)
//--- useful when migrating from js to ts
//--- because using any won't cause error initially
//---------#8 Tuples
// not used that often
// tuples
let person = ['mario', 30, true];
// tuples examples - might want to use
let hsla;
hsla = [200, '100%', '50%', 1];
let xy;
xy = [937.7, 34.3];
function useCoords() {
    const lat = 100;
    const long = 230;
    return [lat, long];
}
const [lat, long] = useCoords();
console.log(lat, long);
// named tuples
let user;
user = ['Jeremy', 47];
console.log(user[1]);
