const db = require("./sqlite");

const create = ({title, description}, callback) => {
    const sql = `INSERT INTO tasks(title, description) VALUES(?,?)`;

    db.run(sql, [title, description], function (error) {
        if (error) {
            return callback(error);
        }
        callback(null, this.lastID);
    });
};

module.exports = {
    create,
};
