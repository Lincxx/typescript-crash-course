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
// let person: [string, number, boolean] = ['mario', 30, true]
//
//
// // tuples examples - might want to use
// let hsla: [number, string, string, number]
// hsla = [200, '100%', '50%', 1]
//
//
// let xy: [number, number]
// xy = [937.7, 34.3]
//
// function useCoords(): [number, number] {
//     const lat = 100
//     const long = 230
//     return [lat, long]
// }
//
// const [lat, long] = useCoords()
// console.log(lat, long)
//
//
// // named tuples
// let user: [name: string, age: number]
// user =  ['Jeremy', 47]
// console.log(user[1])


//---------#9 Interfaces

// interfaces - define a certain structure - custom types
//blog author
// interface Author {
//     name: string,
//     avatar: string
// }
//
// const authorOne: Author = {name: 'mario', avatar: 'img/mario.png'}
// //const authorTwo: Author = {name: 'mario', avatar: 'img/mario.png', isCool: true}
//
// interface Post {
//     title: string,
//     body: string,
//     tags: string[],
//     create_at: Date,
//     author: Author
// }
//
// const newPost: Post = {
//     title: "My First Post",
//     body: "this is interesting",
//     tags: ['gaming', 'tech'],
//     create_at: new Date(),
//     author: authorOne
// }
//
// // as function arg types
// function createPost(post: Post):void {
//     console.log(`Create post ${post.title} by ${post.author.name}`)
// }
//
// createPost(newPost)
//
// // with arrays
//
// let posts: Post[] = []
//
// //posts.push({title: 'hello', body: 'hello'}) //this doesn't work
// posts.push(newPost)


//---------#10 Type aliases

// type aliases

// example 1 - tuple
// type Rgb = [number, number, number]
//
// function getRndColor(): Rgb{
//     const r = Math.floor(Math.random() * 255 )
//     const g = Math.floor(Math.random() * 255 )
//     const b = Math.floor(Math.random() * 255 )
//
//     return [r,g,b]
// }
//
// console.log(getRndColor())
//
// // example 2 - object literal
// type User = {
//     name: string
//     score: number
// }
//
// const userOne: User = {name: 'mario', score: 75}
// const userTwo: User = {name: 'yoshi', score: 100}
//
// function formatUser(user: User): void {
//     console.log(`${user.name} has a sciore of ${user.score}`)
// }
//
// formatUser(userOne)
// formatUser(userTwo)
// //formatUser({name: 'yoshi', score: 100, age: 34})//error


//---------#11 Union Types

// unions types
let someId: number | string
someId = 1
someId = "srte"

let email: string | null = null

email = "m@email.com"

type Id = number | string
let another: Id
another = '3242342'
another = 2

// union pitfall
function swapIdType(id: Id): Id {
    //can only use props and  methods common to
    // both number and string types
    // parseInt(id) --> not allowed

    //parseInt(id)//error

    return id
}

swapIdType(5)
