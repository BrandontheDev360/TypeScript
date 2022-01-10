var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHello = function () {
        console.log('Hello', this.firstName);
    };
    Person.prototype.sayFullName = function () {
        console.log('Hello,', this.firstName + ' ' + this.lastName);
    };
    return Person;
}());
var person1 = new Person();
console.log(person1);
person1.firstName = 'Brandon';
console.log(person1);
person1.sayHello();
person1.lastName = 'Nguyen';
console.log(person1);
person1.sayFullName();
var someVariableName = new Person();
someVariableName.firstName = 'Syerra';
console.log(someVariableName);
someVariableName.sayHello();
someVariableName.lastName = 'Lyons';
console.log(someVariableName);
someVariableName.sayFullName();
// Practice
var sheriff = new Person();
sheriff.firstName = 'Sheriff';
sheriff.lastName = 'Holler';
sheriff.sayFullName();
// Constructors 
/*
    A constructor allows us to more easily and efficiently create an instance of a class by enabling us to instantiate the class(create a new instance of the class) and set the properties at the same time.
*/
var Game = /** @class */ (function () {
    function Game(name, maker) {
        this.gameName = name;
        this.gameMaker = maker;
    }
    return Game;
}());
// PASSES ERROR if we do not pass values in for the constructor's arguments, we get an error. The following code throws a compile-time error:
// let battleship: Game = new Game()
// Example of it working
// We have to set each of the properties, one at a time. With a constructor this could be done in one line of code.e have to set each of the properties, one at a time. With a constructor this could be done in one line of code.
var battleship = new Game('battleship', 'Hasbros');
console.log(battleship);
// Inheritance
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
// EXAMPLE ONE
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Automobile;
}(Vehicle));
var myCar = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Honda";
console.log(myCar);
// EXAMPLE TWO
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Motorcycle;
}(Vehicle));
var myMotorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;
console.log(myMotorcycle);
// EXAMPLE THREE w/ Constructor
var Store = /** @class */ (function () {
    function Store(name, city) {
        this.name = name;
        this.city = city;
    }
    return Store;
}());
var ikea = new Store('Ikea', 'Fishers');
console.log(ikea);
var Walmart = /** @class */ (function (_super) {
    __extends(Walmart, _super);
    function Walmart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Walmart;
}(Store));
var walmart = new Walmart('Walmart', 'Kokomo');
console.log(walmart);
walmart.isBusy = true;
console.log(walmart);
// Accessors
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.getSalary = function () {
        return this._salary.toString();
    };
    Employee.prototype.setSalary = function (newSalary) {
        this._salary = newSalary;
    };
    return Employee;
}(Person));
var newEmployee = new Employee();
newEmployee.setSalary(100000);
// newEmployee._salary = 0; // This breaks
var salaryResult = newEmployee.getSalary();
console.log('Salary:', salaryResult);
//# sourceMappingURL=03-classes.js.map