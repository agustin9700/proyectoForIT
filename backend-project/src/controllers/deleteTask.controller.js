const model = require("../models/Task");

const deleteTask = (req, res) => {
    const { id } = req.params;

    model.deleteTask(id, (error, changes) => {
        if (error) {
            return console.error(error);        
        }

        res.status(200).send(`tarea ${id} eliminada`);
    });
};      

module.exports = deleteTask