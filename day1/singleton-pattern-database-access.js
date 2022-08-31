var Database = /** @class */ (function () {
    function Database(databaseName) {
        var _this = this;
        this.getDatabaseName = function () {
            return _this.databaseName;
        };
        this.databaseName = databaseName;
    }
    Database.getDatabaseInstance = function (databaseName) {
        if (!Database.databaseInstance) {
            Database.databaseInstance = new Database(databaseName);
        }
        return Database.databaseInstance;
    };
    return Database;
}());
var main = function () {
    var database = Database.getDatabaseInstance('AzureDatabase');
    var auxDatabase = Database.getDatabaseInstance('OracleDatabase');
    console.log(database.getDatabaseName());
    console.log(auxDatabase.getDatabaseName());
};
