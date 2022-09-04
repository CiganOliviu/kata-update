declare interface ObjectConstructor {
    assign(...objects: Object[]): Object;
}

class Prototype {
    private primitiveData: number | string = '';
    private objectData: object = Object.assign({});

    public setPrimitiveData = (newPrimitiveData: number | string) => {
        this.primitiveData = newPrimitiveData;
    }

    public setObjectData = (newObjectData: object) => {
        this.objectData = newObjectData;
    }

    public getPrimitiveData = (): number | string => {
        return this.primitiveData;
    }

    public getObjectData = (): object => {
        return this.objectData;
    }

    public clone = (): this => {
        const clone = Object.create(this);
        clone.objectData = Object.create(this.objectData);

        return clone;
    }
}

const main = () => {
    const prototype = new Prototype();
    prototype.setPrimitiveData(1234);
    prototype.setObjectData(new Date());

    const prototypeClone = prototype.clone();

    console.log(prototypeClone.getPrimitiveData());
    console.log(prototypeClone.getObjectData());
}

main();