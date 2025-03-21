const db = require("./sqlite");

const create = ({title, description, completed}, callback) => {
    const sql = `INSERT INTO tasks(title, description, completed) VALUES(?,?,?)`;

    db.run(sql, [title, description, completed], function (error) {
        if (error) {
            return callback(error);
        }
        callback(null, this.lastID);
    });
};

const findAll = (callback) => {
    const sql = `SELECT * FROM tasks`;

    db.all(sql, [], (error, rows) => {
        if (error) {
            return callback(error);
        }
        callback(null, rows);
    });
}

const findById =(id,callback)=>{
    const sql = `SELECT * FROM tasks WHERE id = ?`;

    db.get(sql, [id], (error, row) => {
        if (error) {
            return callback(error);
        }
        callback(null, row);
    });


}


const update = (id, {title, description, completed}, callback) => {
    const sql = `UPDATE tasks SET title = ?, description = ?, completed = ? WHERE id = ?`;

    db.run(sql, [title, description, completed, id], function (error) {
        if (error) {
            return callback(error);
        }
        callback(null, this.changes);
    });
};

 const deleteTask = (id, callback) => {
    const sql = `DELETE FROM tasks WHERE id = ?`;

    db.run(sql, [id], function (error) {
        if (error) {
            return callback(error);
        }
        callback(null, this.changes);
    });
};

module.exports = {
    create,
    findAll,
    findById,
    update,
    deleteTask
};
