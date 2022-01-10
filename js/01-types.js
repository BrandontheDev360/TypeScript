var username = 'Full Stack Software Engineer';
var password = 'password123';
var instructorId = 69;
var newPassword;
var phoneNumber;
var email;
var socialSecurity;
var isMarried;
var greeting = 'Hello';
// Number Type
var age = 23;
var currentYear = 2022;
var decimal = .6;
console.log(decimal);
var hex = 0xf00d;
console.log(hex);
var binary = 10;
console.log(binary);
// String Type
var companyName;
companyName = 'Eleven Fifty';
var appName = 'Twitter';
console.log(appName);
appName = "Instagram";
console.log(appName);
// Boolean Type
var haveGF = true;
var isLoggedIn = true;
// Array Type
var studenList = ['Brandon', 'Syerra', 'Andrew'];
var allScores = [100, 92, 94, 97];
console.log('Student Lists:', studenList[0]);
console.log('Studen Scores:', allScores[0]);
// Any Type
var dataFromThirdParty = '123';
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
dataFromThirdParty = 123;
console.log(dataFromThirdParty);
console.log(typeof dataFromThirdParty);
// Void Type
function sayHelloToAll() {
    console.log('Hello to all!');
}
// Null and Undefined Type
var undefinedVar = undefined;
var nullVar = null;
// Tuple Types
// Declare a tuple type
var usernameAndId;
// Initialize it
usernameAndId = [1, 'FutureSFE'];
// Enum Type
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
var weapon = WeaponType.Sword;
console.log(weapon);
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(cardType);
// Union Types
// Union types allow us to have more flexibility with our variables, but we still keep the intent of declaring a specific type for our variables.
var x;
var y;
x = '123';
x = 123;
// x = true  <---- gets Error 
//# sourceMappingURL=01-types.js.map