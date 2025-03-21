const model = require("../models/Task");


const updateTask = (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    model.update(id, { title, description, completed }, (error, changes) => {
        if (error) {
            return console.error(error);
        }

        res.status(200).json({ id, title, description, completed });
    });
}




module.exports = updateTask