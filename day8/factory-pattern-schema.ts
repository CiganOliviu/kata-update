class ObjectOne {
    constructor() {
        console.log('Create object one');
    }
}

class ObjectTwo {
    constructor() {
        console.log('Create object two');
    }
}

class ObjectThree {
    constructor() {
        console.log('Create object three');
    }
}

type HybridType = ObjectOne | ObjectTwo | ObjectThree;

class FactoryPattern {
    public createNewObject: (type: string) => HybridType;

    constructor() {
        this.createNewObject = (type: string): HybridType => {
            if (type === 'object-one') {
                return new ObjectOne();
            }
            if (type === 'object-two') {
                return new ObjectTwo();
            }

            return new ObjectThree();
        }
    }
}

const factoryPattern = new FactoryPattern();

const objectOne = factoryPattern.createNewObject('object-one');
const objectTwoInstance = factoryPattern.createNewObject('object-two');
const objectThreeInstance = factoryPattern.createNewObject('object-three');