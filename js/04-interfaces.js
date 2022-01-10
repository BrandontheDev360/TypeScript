var lassie = {
    name: 'Lassie',
    numberOfLegs: 4
};
console.log(lassie);
var Apples = /** @class */ (function () {
    function Apples() {
    }
    Apples.prototype.setTimeOfPurchase = function (d) {
        console.log('Apples purchased on ', d);
    };
    return Apples;
}());
var myApples = new Apples();
myApples.setTimeOfPurchase(new Date(Date.now()));
console.log(myApples);
//# sourceMappingURL=04-interfaces.js.map