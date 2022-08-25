// normal javascript function
function myFunc() {
    console.log("Does something")
}

myFunc()

// Arrow Function
const myArrowFunc = (name) => {
    console.log(name)
}

myArrowFunc("Jacob")

// No more issues with the this keyword. This inside arrow function always keeps context
// if only one argument you can ommit partenthesis
// if recieves no arguments you need empty parentheis
// if more than one argument you need to wrap in parenthesis

// if you just return you can ommit curly brances and return keyword

const multiply = number => number * 2

console.log(multiply(2))