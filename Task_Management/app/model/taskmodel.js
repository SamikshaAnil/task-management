const mongoose = require('mongoose')
const { Schema, model } = mongoose

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
    },
}, { timestamps: true })

const Task = model('Task', taskSchema)
module.exports = Task
