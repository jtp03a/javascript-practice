const numbers = [1, 2, 3]

// Ex. Turn into an array where each number is doubled

//Takes a function as an input which is executed on each element in the array
const doubleNumArray = numbers.map((num) => {
    return num * 2
})

//map returns a real new array, not a copy
console.log(numbers)
console.log(doubleNumArray)