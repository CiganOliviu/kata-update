class Singleton {

    private static _instance: Singleton;

    public static getInstance(): Singleton {
        if (!Singleton._instance) {
            Singleton._instance = new Singleton();
        }

        return Singleton._instance;
    }
}

const objOne = Singleton.getInstance();
const objTwo = Singleton.getInstance();