const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
        res.status(500).send({success: false, message: `Error in Register Controller: ${error.message}`})
        
    }
};
//login Callback
const loginController = async(req, res) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user){
           return res.status(200).send({success:false, message:'User not found'})    
        }
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if(!isMatch){
            return res.status(200).send({success:false, message:"Invalid Credentials"})
        }
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'})
        res.status(200).send({success:true, message: 'Login successful', token: token})

    } catch (error) {
        console.log(error);
        res.status(500).send({success: false, message: `Error in Login Controller: ${error.message}`})    
    }
};



module.exports = {
    loginController, registerController
}