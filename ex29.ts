
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

//defining the array of fruits
const favorite_fruits:string[]=["strawberry","mango","orange"];

let a =favorite_fruits.includes("strawberry");
console.log(a) //true

let b=favorite_fruits.includes("grape");
console.log(b) //false

let c=favorite_fruits.includes("orange");
console.log(c)

let d=favorite_fruits.includes("pineapple");
console.log(d)

let e=favorite_fruits.includes("mango");
console.log(e)


if(favorite_fruits.includes("strawberry")){
    console.log("I like strawberries!")

}
if(favorite_fruits.includes("orange")){
    console.log("I really like oranges!")

}
if (favorite_fruits.includes("mango")){
    console.log("I really enjoy mangoes!");
}