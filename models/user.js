const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },

    // email harus uniq
    email:{
        type: String,
        required: true,
        unique: true
    },
    tag:{
        type: Array,
        required: false
    },
    key:{
        type: String,
        required: true
    },
    task_list: [{
        type: Schema.Types.ObjectId,
        ref: 'Task'
    }]
})




var User = mongoose.model('users', userSchema)

module.exports = User