class Database {
    private static databaseInstance: Database;
    private databaseName: string;

    private constructor(databaseName: string) {
        this.databaseName = databaseName;
    }

    public static getDatabaseInstance = (databaseName: string) => {
        if (!Database.databaseInstance) {
            Database.databaseInstance = new Database(databaseName);
        }

        return Database.databaseInstance;
    }
}

const main = () => {
    const databaseAzure = Database.getDatabaseInstance('AzureDatabase');
    const databaseMySql = Database.getDatabaseInstance('MySqlDatabase');

    console.log(databaseAzure);
    console.log(databaseMySql);
}

main();