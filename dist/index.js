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
const authorOne = { name: 'mario', avatar: 'img/mario.png' };
const newPost = {
    title: "My First Post",
    body: "this is interesting",
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorOne
};
// as function arg types
function createPost(post) {
    console.log(`Create post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
// with arrays
let posts = [];
//posts.push({title: 'hello', body: 'hello'}) //this doesn't work
posts.push(newPost);
