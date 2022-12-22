const mongoose = require('mongoose')

const connectDB = async()=> {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDb connected to ${mongoose.connection.host}`.bgGreen.white);

    } catch (error) {
        console.log(`Mongodb Server Issue: ${error} ${error.message}`.bgRed.white);
        
    }
} 

module.exports = connectDB;
