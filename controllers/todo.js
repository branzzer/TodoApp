const Todo = require("../models/todo")

const getAllTask = async (req, res) => {
    try {

    } catch (error) {
        console.log(`error at addNewTask ERROR =>${error}`)
    }
}

const addNewTask = async (req, res) => {
    const { task } = req.body
    try {
        await Todo.create({
            task: task,
            createdBy: req.user._id

        })
        return res.redirect('/')

    } catch (error) {
        console.log(`error at addNewTask ERROR =>${error}`)
    }
}


const deleteById = async (req, res) => {
    const taskId = req.params.id
    console.log(taskId)

    try {
        const result = await Todo.findByIdAndDelete(taskId)
        res.redirect('/')
    } catch (error) {
        console.log(`error at deleteById  ERROR=> ${error}`)
    }


}


const deleteAllTask = async (req, res) => {

    try {
        const result = await Todo.deleteMany({});
        res.redirect('/')
    } catch (error) {
        console.log(`error at deleteAllTask  ERROR=> ${error}`)
    }
}


const updateTaskById = async (req, res) => {

    const taskId = req.params.id;
    const { newTask } = req.body

    try {
        const result = await Todo.findByIdAndUpdate(taskId, { task: newTask });
        res.redirect('/')

    } catch (error) {
        console.log(`error at updateTaskById  ERROR=> ${error}`)
    }

}

module.exports = {
    getAllTask,
    addNewTask,
    deleteAllTask,
    deleteById,
    updateTaskById
}