const Task = require('../models/Task');

exports.getTasks = async (req,res) => {
    const tasks = await Task.find({user:req.user._id});
    res.json(tasks)
}

exports.createTask = async (req,res) => {
    const {title,description,dueDate,priority} = req.body;
    const task = await Task.create({
        user:req.user._id,
        title,
        description,
        dueDate,
        priority
    });
    res.json(task);
};

exports.updateTask = async (req,res) => {
    const task = await Task.findById(req.params.id);
    if(!task || task.user.toString() !== req.user._id.toString()){
        return res.status(404).json({message:'Task not found'})
    }
    task.title = req.body.title || task.title;
    task.description = req.body.description || task.description;
    task.dueDate = req.body.dueDate || task.dueDate;
    task.priority = req.body.priority || task.priority;
    task.status = req.body.status || task.status; 
    
    const updatedTask = await task.save();
    res.json(updatedTask);
}

exports.deleteTask = async (req,res) => {
    const task = await Task.findById(req.params.id).populate('user', 'name email');
    if(!task || task.user._id.toString() !== req.user._id.toString()){
        return res.status(404).json({message:'Task not found'});
    }
    await task.remove();
    res.json({message:'Task removed'});
}