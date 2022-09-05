declare interface ObjectConstructor {
    assign(...objects: Object[]): Object;
}

class Prototype {
    private parameter: string = '';
    private component: object = Object.assign({});

    public setParameter = (parameter: string) => {
        this.parameter = parameter;
    }

    public getParameter = () => {
        return this.parameter;
    }

    public setComponent = (component: object) => {
        this.component = component;
    }

    public getComponent = () => {
        return this.component;
    }

    public clone = () => {
        const clone = Object.create(this);
        clone.component = Object.create(this.getComponent());

        return clone;
    }
}

const main = () => {
    const prototypeObj = new Prototype();
    prototypeObj.setParameter('1245');
    prototypeObj.setComponent(new Date());

    console.log(prototypeObj.getParameter());
    console.log(prototypeObj.getComponent());

    const prototypeObjCopy = prototypeObj.clone();
    console.log(prototypeObjCopy.getParameter());
    console.log(prototypeObjCopy.getComponent());
}

main();
