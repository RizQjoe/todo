const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let taskSchema = new Schema({
    task_schema:{
        type: String, 
        required: true
    },
    tags:{
        type: Array,
        required: false
    },
    status:{
        type: String,
         required: true
    }
},{
    timestamps:{
        createdAt: 'create_at'
    }
})


const Task = mongoose.model('Task', taskSchema)
module.exports = Task;