const model = require("../models/Task");

const newTask = (req, res) => {
  const { title, description, completed } = req.body;

  model.create({ title, description, completed:completed? true :false }, (error, id) => {
    if (error) {
      return console.error(error);
    }

    res.status(201).json({ id, title, description,completed:completed? true :false });
  });
};

module.exports = newTask;
