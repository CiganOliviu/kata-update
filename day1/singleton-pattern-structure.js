var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            this.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.businessLogic = function () {
    };
    return Singleton;
}());
var main = function () {
    var objectOne = Singleton.getInstance();
    var objectTwo = Singleton.getInstance();
    var instanceValidator = function () {
        return objectOne === objectTwo;
    };
    console.log(instanceValidator());
};
main();
