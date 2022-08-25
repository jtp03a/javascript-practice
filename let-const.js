// Before there was var
// In ES6 we get let and const
// let is like var - use it for variables that are really are variables
// use const for something you assign once and never change

var myName = 'Jake'
console.log(myName)
myName = 'Jacob'
console.log(myName)

// Same result with let
let myName_w_Let = 'Jake'
console.log(myName_w_Let)
myName_w_Let = 'Jacob'
console.log(myName_w_Let)

// Error if try and reassign
const myName_w_Const = 'Jake'
console.log(myName_w_Const)
myName_w_Const = 'Jacob'
