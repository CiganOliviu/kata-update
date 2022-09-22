declare interface ObjectConstructor {
    assign(...objects: Object[]): Object;
}

class Prototype {
    private parameter: string = '';
    private component: object = Object.assign({});

    public setParameter = (parameter: string) => {
        this.parameter = parameter;
    }

    public setComponent = (component: object) => {
        this.component = component;
    }

    public clone = () => {
        const clone = Object.create(this);
        clone.component = Object.create(this.component);

        return clone;
    }
}

const prototypeObj = new Prototype();
prototypeObj.setParameter('This');
prototypeObj.setComponent(new Date());

const newPrototypeObj = prototypeObj.clone();