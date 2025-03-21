const model = require("../models/Task")


const newTask = (req, res) => {

const{title, description} = req.body

model.create({title,description}, (error, id) => {
    if(error){
        return console.error(error)
    }

    res.status(201).json({
        id,
        title,
        description
    })
})
}

module.exports = newTask