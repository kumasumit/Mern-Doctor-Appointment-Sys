const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: 'String',
        required: [true, 'name is required']
    },
    email: {
        type:'String',
        required: [true, 'email is required']
    },
    password:{
        type:'String',
        required: [true, 'password is required']
    }
})
const User = mongoose.model('users', userSchema);

//User is the name of the model
//users is the name of the database/collection in MongoDb
//userSchema is the schema for the user

module.exports = User;