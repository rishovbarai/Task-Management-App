const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    }
},{timestamps:true})

// Use a regular function to ensure `this` refers to the document
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); // Return if the password is not modified

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next(); // Call next() to continue with the save operation
});

const User = mongoose.model('User',userSchema);
module.exports = User;