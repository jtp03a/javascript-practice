// spread - split up array elements or object properties

//take the old array and copy into the new array plus the additional elements
// const newArray = [...oldArray, 1, 2]
// take the old object and copy into a new object plus the additional element, if the oldObject also has a key value pair called newProp it would be overwritten
// const newObject = {...oldObject, newProp:5 }

//rest - used to merge a list of function arguments into an array
// function sortArgs(...args) {
//     return args.sort()
// }

// Spread

const numbers = [1, 2, 3, 4, 5]

const newNumbers = [...numbers, 6, 7, 8]

console.log(newNumbers)

const person = {
    name: 'Jake'
}

const newPerson = {...person, age: 36}

console.log(newPerson)

// Rest - 
const filter = (...args) => {
    return args.filter(el => el === 1)
}

console.log(filter(1, 2, 3))

