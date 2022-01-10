let username: string = 'Full Stack Software Engineer';
let password: string = 'password123';
let instructorId: number = 69;

let newPassword: string;
let phoneNumber: number;
let email: string;
let socialSecurity: number;
let isMarried: boolean;

let greeting = 'Hello';


// Number Type

let age: number = 23;
let currentYear: number = 2022;

let decimal: number = .6;
console.log(decimal)

let hex: number = 0xf00d;
console.log(hex)

let binary: number = 0b1010;
console.log(binary)

// String Type

let companyName: string;
companyName = 'Eleven Fifty'

let appName: string = 'Twitter';
console.log(appName)

appName = "Instagram";
console.log(appName)

// Boolean Type

let haveGF: boolean = true;
let isLoggedIn: boolean = true;

// Array Type

let studenList: string[] = ['Brandon', 'Syerra', 'Andrew']

let allScores: Array<number> = [ 100, 92, 94, 97]

console.log('Student Lists:', studenList[0]);

console.log('Studen Scores:', allScores[0])


// Any Type

let dataFromThirdParty: any = '123'
console.log(dataFromThirdParty)
console.log(typeof dataFromThirdParty)

dataFromThirdParty = 123
console.log(dataFromThirdParty)
console.log(typeof dataFromThirdParty)

// Void Type

function sayHelloToAll() : void {
    console.log('Hello to all!')
}

// Null and Undefined Type

let undefinedVar: undefined = undefined;
let nullVar: null = null;

// Tuple Types

// Declare a tuple type
let usernameAndId: [number, string];
// Initialize it
usernameAndId = [1, 'FutureSFE']

// Enum Type

enum WeaponType { Sword, Saber, Spear }
let weapon: WeaponType = WeaponType.Sword
console.log(weapon)

enum CardType { Ace = 1, Two, Three, Four }
let cardType: string = CardType[2]
console.log(cardType)

// Union Types
// Union types allow us to have more flexibility with our variables, but we still keep the intent of declaring a specific type for our variables.

let x: number | string;
let y: number | null;

x = '123'
x = 123

// x = true  <---- gets Error 