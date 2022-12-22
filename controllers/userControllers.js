const User = require('../models/User')
const bcrypt = require('bcryptjs');

//register Callback
const registerController = async(req, res) => {
    try {
        //search for a existing user
        const existingUser = await User.findOne({email: req.body.email});
        //if the user already exists, throw a 409 conflict error
        if(existingUser){
            return res.status(409).send({success:false, message: 'User already exists'})
        }
        const password = req.body.password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        req.body.password = hashedPassword;
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send({success: true,message:'User Registered Successfully'})
        
    } catch (error) {
        console.log(error);
        res.status(500).send({success: false, message: `Register Callback Error: ${error.message}`})
        
    }
};
//login Callback
const loginController = async(req, res) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send({success: false, message: `Login Callback Error: ${error.message}`})    
    }
};



module.exports = {
    loginController, registerController
}