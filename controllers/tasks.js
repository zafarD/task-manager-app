const Task = require('../models/Task')
//Get All task
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks:tasks});
        
    } catch (error) {
        res.status(500).json(error)
    }
}
//Create Task
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json(error)
    }
}
//Get single Task
const getTask = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const task = await Task.findOne({_id: taskID})
        if(!task) {
            return res.status(404).json({message: `No task with id: ${taskID}`})
        }
        res.status(200).json({task: task});
    } catch (error) {
        res.status(500).json(error)
    }
}
//Delete Task
const deleteTask = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const deleteTask = await Task.findOneAndDelete({_id: taskID})
        if(!deleteTask) {
            return res.status(404).json({message: `Task is not found with id: ${taskID}`})
        }
        res.status(200).json({status: "success", deletedTask: deleteTask})
    } catch (error) {
        res.status(500).json(error)
    }
}

//Update Task
const updateTask = async (req, res) => {
    try {
        const {id:taskID} = req.params
        const updatedTask = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        })
        if (!updatedTask) {
            return res.status(404).json({ message: `Task is not found with id: ${taskID}` })
        }
        res.status(200).json(updatedTask) 
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}