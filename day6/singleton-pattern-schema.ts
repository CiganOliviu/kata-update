class Singleton {
    private static instance: Singleton;
    private readonly parameter: string = '';

    public constructor(parameter: string) {
        this.parameter = parameter;
    }

    public static getClassInstance = (parameter: string): Singleton => {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton(parameter);
        }

        return Singleton.instance;
    }

    public getParameter = () => {
        return this.parameter;
    }
}

const main = () => {
    const constantObject = Singleton.getClassInstance('const object');
    const constantObjectTwo = Singleton.getClassInstance('some other const object');

    console.log(constantObject.getParameter());
    console.log(constantObjectTwo.getParameter());
}

main();