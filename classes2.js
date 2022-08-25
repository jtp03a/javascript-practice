// properties are like "variables" attached to classes/objects
// methods are like "functions" attached to classes/objects

// ES7 syntax, next gen javascript
class Human {
    gender = 'male'
    
    printGender = () => { 
        console.log(this.gender)
    }
}


class Person extends Human {
    name = 'Jake'

    printMyName = () => {
         console.log(`My name is ${this.name}`)
    }
}

const myPerson = new Person()


myPerson.printMyName()
myPerson.printGender()