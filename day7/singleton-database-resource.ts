class Database {
    private static instance: Database;
    private readonly databaseName: string = '';

    private constructor(databaseName: string) {
        this.databaseName = databaseName;
    }
    public static getDatabaseInstance = (databaseName: string): Database => {
        if (!Database.instance) {
            Database.instance = new Database(databaseName);
        }

        return Database.instance;
    }

    public getDatabaseName = () => {
        return this.databaseName;
    }
}

const main = () => {
    const databaseAzure = Database.getDatabaseInstance('Azure');
    const databaseMysql = Database.getDatabaseInstance('MySql');

    console.log(databaseAzure.getDatabaseName());
    console.log(databaseMysql.getDatabaseName());
}

main();