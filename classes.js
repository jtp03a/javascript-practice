// ES6 syntax

class Human {
    constructor() {
        this.gender = 'male'
    }

    printGender() { 
        console.log(this.gender)
    }
}


class Person extends Human {
    constructor() {
        super()
        this.name = 'Jake'
    }

    printMyName() {
         console.log(`My name is ${this.name}`)
    }
}

const myPerson = new Person()


myPerson.printMyName()
myPerson.printGender()