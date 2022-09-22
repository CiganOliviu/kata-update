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
            if (type === 'ObjectOne') {
                return new ObjectOne();
            }
            if (type === 'ObjectTwo') {
                return new ObjectTwo();
            }

            return new ObjectThree();
        }
    }
}

const factoryPattern = new FactoryPattern();
const objOne = factoryPattern.createNewObject('objectOne');
const objTwo = factoryPattern.createNewObject('objectTwo');
const objThree = factoryPattern.createNewObject('objectThree');