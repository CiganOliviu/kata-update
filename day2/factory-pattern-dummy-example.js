var Triangle = /** @class */ (function () {
    function Triangle() {
        console.log('Triangle...');
    }
    return Triangle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle() {
        console.log('Rectangle...');
    }
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle() {
        console.log('Circle...');
    }
    return Circle;
}());
var IFactoryObject = /** @class */ (function () {
    function IFactoryObject() {
        this.createNewForm = function (formType) {
            if (formType === 'triangle') {
                return new Triangle();
            }
            if (formType === 'rectangle') {
                return new Rectangle();
            }
            return new Circle();
        };
    }
    return IFactoryObject;
}());
var main = function () {
    var factoryObject = new IFactoryObject();
    var triangle = factoryObject.createNewForm('triangle');
    var rectangle = factoryObject.createNewForm('rectangle');
    var circle = factoryObject.createNewForm('circle');
};
main();
