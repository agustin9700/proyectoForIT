
const path = require("path")
const sqlite = require("sqlite3");

const db = new sqlite.Database(
    path.resolve(__dirname, "../../database.db"),
    (error) => {
        if(error){
            return console.error(error.message)
        }
        const createdb = `CREATE TABLE IF NOT EXISTS tasks(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title VARCHAR(30) NOT NULL,
        description VARCHAR(100) NOT NULL,
        completed BOOLEAN DEFAULT 0,
        cretedAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )` 
        db.run(createdb, (error) => {
            if(error){
                return console.error(error.message)
            }
            console.log("tabla creada")
        })
    }
)

module.exports = db