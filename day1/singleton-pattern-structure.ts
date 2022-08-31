class Singleton {

    private static instance: Singleton;

    private constructor() {

    }

    public static getInstance = (): Singleton => {
        if (!Singleton.instance) {
            this.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public businessLogic(): void {

    }
}

const main = () => {
    const objectOne = Singleton.getInstance();
    const objectTwo = Singleton.getInstance();

    const instanceValidator = (): boolean => {
        return objectOne === objectTwo;
    }

    console.log(instanceValidator());
}

main();