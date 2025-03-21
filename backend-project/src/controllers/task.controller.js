const model = require("../models/Task")

const taskList = (req, res) => {
    model.findAll((error, tasks) => {
        if(error){
            return console.error(error)
        }
        res.status(200).json(tasks)
        
    })
}

module.exports = taskList