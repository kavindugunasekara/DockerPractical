const mongoose =require('mongoose');

// user schema

const userSchema = new mongoose.Schema({
    name:{
        type: 'string',
        required: true,
    },
    email:{
        type:String,
        required: true,

    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('User', userSchema);