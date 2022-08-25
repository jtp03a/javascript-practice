// extract array elements or object properties and store them in variables, difference with spread is that spread takes out all properteries and distributes them in a new item, destructures can pull single elements

// array - order defined
const [a, b] = ['Hello', 'Max']
console.log(a) //prints Hello
console.log(b) //prints Max

//object - key defined
const { myname, age } = { myname: 'Max', age: 36}
console.log(myname) //prints Max
console.log(age) // 36

const numbers = [1, 2, 3]

const [num1, num2] = numbers
console.log(num1, num2)

const person = {
    myname2: 'Jake',
    age: 36
}

const { myname2 } = person

console.log(myname2)