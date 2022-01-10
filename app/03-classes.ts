class Person {
    firstName: string
    lastName: string

    sayHello() {
        console.log('Hello', this.firstName)
    }

    sayFullName() {
        console.log('Hello,', this.firstName + ' ' + this.lastName)
    }
}

let person1: Person = new Person()
console.log(person1)

person1.firstName = 'Brandon'
console.log(person1)
person1.sayHello()

person1.lastName = 'Nguyen'
console.log(person1)
person1.sayFullName()

let someVariableName: Person = new Person()

someVariableName.firstName = 'Syerra'
console.log(someVariableName)
someVariableName.sayHello()

someVariableName.lastName = 'Lyons'
console.log(someVariableName)
someVariableName.sayFullName()

// Practice
let sheriff: Person = new Person()
sheriff.firstName = 'Sheriff'
sheriff.lastName = 'Holler'
sheriff.sayFullName()

// Constructors 

/* 
    A constructor allows us to more easily and efficiently create an instance of a class by enabling us to instantiate the class(create a new instance of the class) and set the properties at the same time.
*/

class Game {
    constructor(name: string, maker:string) {
        this.gameName = name
        this.gameMaker = maker
    }
    gameName: string
    gameMaker: string
}

// PASSES ERROR if we do not pass values in for the constructor's arguments, we get an error. The following code throws a compile-time error:
// let battleship: Game = new Game()

// Example of it working
// We have to set each of the properties, one at a time. With a constructor this could be done in one line of code.e have to set each of the properties, one at a time. With a constructor this could be done in one line of code.
let battleship: Game = new Game('battleship', 'Hasbros')
console.log(battleship)


// Inheritance

class Vehicle {
    type: string
    make: string
    model: string
    manufactureYear: string
    runs: boolean
    topSpeed: number
}

// EXAMPLE ONE

class Automobile extends Vehicle {
    isSelfDriving: boolean
}

let myCar: Automobile = new Automobile()
myCar.isSelfDriving = false
myCar.topSpeed = 200
myCar.make = "Honda"

console.log(myCar)

// EXAMPLE TWO

class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean
}

let myMotorcycle: Motorcycle = new Motorcycle()
myMotorcycle.easyToDoWheelie = true
myMotorcycle.topSpeed = 180

console.log(myMotorcycle)

// EXAMPLE THREE w/ Constructor

class Store {
    constructor(name: string, city:string) {
        this.name = name
        this.city = city
    }
    name: string
    city: string
}

let ikea: Store = new Store('Ikea', 'Fishers')
console.log(ikea)

class Walmart extends Store {
    isBusy: boolean
}

let walmart: Walmart = new Walmart('Walmart', 'Kokomo')
console.log(walmart)
walmart.isBusy = true
console.log(walmart)


// Accessors

class Employee extends Person {
    private _salary: number

    getSalary() : string {
        return this._salary.toString();
    }

    setSalary(newSalary: number) {
        this._salary = newSalary
    }
}

let newEmployee: Employee = new Employee()
newEmployee.setSalary(100000)
// newEmployee._salary = 0; // This breaks

let salaryResult: string = newEmployee.getSalary()
console.log('Salary:', salaryResult)