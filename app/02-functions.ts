// NORMAL JAVASCRIPT

// function demoFunction(someNum) {
//     return someNum;
// }

// demoFunction(1);
// demoFunction("stuff")
// demoFunction(1, "Stuff")

// TYPESCRIPT VERSION OF THE CODE ABOVE
function addNumbers(numOne: number, numTwo: number) : number {
    return numOne + numTwo;
}

// Works
addNumbers(1,2)
console.log(addNumbers(1,2))

// Errors - Doesn't Work
// addNumbers(1, 2, 3)
// addNumbers(1, 2, 3, "Foo")

// Practice TypeScript Concat Names
function addNames(firstName: string, lastName: string) : string {
    const fullName = firstName + " " + lastName
    return fullName
}

addNames('Brandon', 'Nguyen')
console.log(addNames('Brandon', 'Nguyen'))

function addNamess(firstName: string, lastName: string) : string {
    let fullName 
    fullName += firstName
    fullName += ' '
    fullName += lastName
    return fullName
}

addNamess('Brandon', 'Nguyen')
console.log(addNamess('Brandon', 'Nguyen'))

// Module TypeScript 
function sayHello(name: string) : string {
    return name;
}

sayHello('Kenn')
console.log(sayHello('Kenn'))

// TypeScript Function for Testing Login 
function testLogin(username: string, password: string) {
    if (username == 'elevenfiftyuser' && password == 'Letmein1234!') {
        return true
    } else {
        return false
    }
}

// Returns True
testLogin('elevenfiftyuser', 'Letmein1234!')
console.log(testLogin('elevenfiftyuser', 'Letmein1234!'))

// Returns False
testLogin('elevenfiftyuser', 'Letmein')
console.log(testLogin('elevenfiftyuser', 'Letmein'))

// OPTIONALS 
function addNumbersWithOptional(numOne: number, numTwo: number, someString?: string) {
    console.log(someString)
    return numOne + numTwo 
}

addNumbersWithOptional(1, 2)
console.log(addNumbersWithOptional(1, 2))

addNumbersWithOptional(1, 2, 'This is optional')
console.log(addNumbersWithOptional(1, 2, 'This is optional'))

// Practice OPTIONALS
function fullName(firstName: string, lastName: string, middleName?: string) {
    if (middleName) {
        return firstName + " " + middleName + " " + lastName
    } else {
        return firstName + " " + lastName
    }
}

fullName('Brandon', 'Nguyen')
console.log(fullName('Brandon', 'Nguyen'))

fullName('Brandon', 'Nguyen', 'Vinh')
console.log(fullName('Brandon', 'Nguyen', 'Vinh'))