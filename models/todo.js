const mongoose = require('mongoose')


const todoSchema = new mongoose.Schema({

    task: {
        type: String,
        required: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"

    }

}, { timestamps: true })

const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo