// primitive type
const number = 1
const num2 = number

//copies number into num2
//numbers, strings, booleans are primitive types, whenever you reassign or store in another variable it will copy
// objects and arrays are reference types

const person = {
    name: 'Jake'
}

const secondPerson = person

console.log(secondPerson)

person.name = 'Max'

console.log(secondPerson)

//in this example person object is stored in memory and the const person is a pointer to that place in memory, secondperson just gets the pointer copied. In both console logs secondPerson is being logged after person was assigned to secondPerson only one time. However, changing the value of name in the person object is reflected in secondPerson aswell

//if we really want to copy we should use the spread operator

const thirdPerson = {
    ...person
}

console.log(thirdPerson)

person.name = 'John'

console.log(thirdPerson)
console.log(secondPerson)
console.log(person)

//Even though we changed the name to john in the person object the thridPerson object is an actual new copy of the object not a pointer and so it does not refelect the change. It still has the state of the object at the time of copy
//All this applies to arrays to