const model = require("../models/Task");

const detailTask = (req, res) => {
  const { id } = req.params;

  model.findById(id, (error, task) => {
    if (error) {
      return console.error(error);
    }

    if (!task) {
      return res.status(404).send("Task no encontrada")
    }

  
    res.status(200).json(task);
  });
};

module.exports = detailTask;
