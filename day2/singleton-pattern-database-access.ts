class Database {
    private static instance: Database;
    private readonly databaseName: string;

    public static getInstance(databaseName: string): Database {
        if (!Database.instance) {
            Database.instance = new Database(databaseName);
        }

        return Database.instance;
    }

    private constructor(databaseName: string) {
        this.databaseName = databaseName;
    }

    public getDatabaseName = () => {
        return this.databaseName;
    }
}

const main = () => {
    const databaseOne = Database.getInstance('AzureDatabase');
    const databaseTwo = Database.getInstance('MySqlDatabase');

    console.log(databaseOne.getDatabaseName());
    console.log(databaseTwo.getDatabaseName());
}

main();