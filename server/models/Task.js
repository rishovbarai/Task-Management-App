const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        require: true,
    },
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
    },
    dueDate:{
        type:Date,
    },
    priority:{
        type:String,
        enum:['low','medium','high'],
        default:'medium',
    },
    status:{
        type:String,
        enum:['pending','in-progress','completed'],
        default:'pending'
    },
},{timestamps:true});

const Task = mongoose.model('Task',taskSchema);

module.exports = Task;