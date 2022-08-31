class Database {

    private static databaseInstance: Database;
    private readonly databaseName: string;

    private constructor(databaseName: string) {
        this.databaseName = databaseName;
    }

    public static getDatabaseInstance = (databaseName: string): Database => {

        if (!Database.databaseInstance) {
            Database.databaseInstance = new Database(databaseName);
        }

        return Database.databaseInstance;
    }

    public getDatabaseName = () => {
        return this.databaseName;
    }
}

const main = () => {
    const database = Database.getDatabaseInstance('AzureDatabase');
    const auxDatabase = Database.getDatabaseInstance('OracleDatabase');

    console.log(database.getDatabaseName());
    console.log(auxDatabase.getDatabaseName());
}

main();