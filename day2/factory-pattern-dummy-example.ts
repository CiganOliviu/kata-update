class Triangle {
    public constructor() {
        console.log('Triangle...');
    }
}

class Rectangle {
    public constructor() {
        console.log('Rectangle...');
    }
}

class Circle {
    public constructor() {
        console.log('Circle...');
    }
}

type HybridGeometryFormType = Triangle | Rectangle | Circle;

class IFactoryObject {

    public createNewForm: (formType: HybridGeometryFormType) => HybridGeometryFormType;

    public constructor() {
        this.createNewForm = (formType: HybridGeometryFormType): HybridGeometryFormType => {
            if (formType === 'triangle') {
                return new Triangle();
            }
            if (formType === 'rectangle') {
                return new Rectangle();
            }

            return new Circle();
        }
    }
}

const main = () => {
    const factoryObject = new IFactoryObject();
    const triangle = factoryObject.createNewForm('triangle');
    const rectangle = factoryObject.createNewForm('rectangle');
    const circle = factoryObject.createNewForm('circle');
}

main();