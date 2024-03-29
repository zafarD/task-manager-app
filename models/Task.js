const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide task name'],
        trim: true,
        max: [50, 'Must be between 50 characters']
    },
    completed: {
        type: Boolean,
        default: false
    },
})

module.exports = mongoose.model('Task', taskSchema)