class ObjectOne {
    public constructor() {
        console.log('ObjectOne constructor');
    }
}

class ObjectTwo {
    public constructor() {
        console.log('ObjectTwo constructor');
    }
}

class ObjectThree {
    public constructor() {
        console.log('ObjectThree constructor');
    }
}

type HybridType = ObjectOne | ObjectTwo | ObjectThree;

class IFactoryObject {

    public createNewObject: (objectType: HybridType) => HybridType;

    public constructor() {
        this.createNewObject = (objectType): HybridType => {
            if (objectType === 'TypeOne') {
                return new ObjectOne();
            }
            if (objectType === 'TypeTwo') {
                return new ObjectTwo();
            }

            return new ObjectThree();
        }
    }
}

const main = () => {
    const factoryObject = new IFactoryObject();
    const objectTypeOne = factoryObject.createNewObject('TypeOne');
    const objectTypeTwo = factoryObject.createNewObject('TypeTwo');
    const objectTypeThree = factoryObject.createNewObject('TypeThree');
}

main();