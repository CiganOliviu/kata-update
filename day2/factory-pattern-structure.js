var IFactoryObject = /** @class */ (function () {
    function IFactoryObject() {
        this.createNewObject = function (objectType) {
            var object;
            if (objectType === 'TypeOne') {
                object = new ObjectTypeOne();
            }
            if (objectType === 'TypeTwo') {
                object = new ObjectTypeTwo();
            }
            if (objectType === 'TypeThree') {
                object = new ObjectTypeThree();
            }
            return object;
        };
    }
    return IFactoryObject;
}());
var ObjectTypeOne = /** @class */ (function () {
    function ObjectTypeOne() {
        console.log("You created an object of type one");
    }
    return ObjectTypeOne;
}());
var ObjectTypeTwo = /** @class */ (function () {
    function ObjectTypeTwo() {
        console.log("You created an object of type two");
    }
    return ObjectTypeTwo;
}());
var ObjectTypeThree = /** @class */ (function () {
    function ObjectTypeThree() {
        console.log("You created an object of type three");
    }
    return ObjectTypeThree;
}());
var main = function () {
    var factoryObject = new IFactoryObject();
    var objectTypeOne = factoryObject.createNewObject('TypeOne');
    var objectTypeTwo = factoryObject.createNewObject('TypeTwo');
    var ObjectTypeThree = factoryObject.createNewObject('TypeThree');
};
main();
