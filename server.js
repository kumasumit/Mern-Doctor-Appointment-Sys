require('dotenv').config();
const express = require('express');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
//rest object
const app = express();

//middlewares
app.use(express.json())
app.use(morgan('dev'));
//port 
const port = process.env.PORT ||8080;
//connect to db
connectDB();
app.use('/api/v1', require('./routes/index'));
//listen on port via server
app.listen(port, ()=> {
    console.log(`Server running in ${process.env.NODE_DEV_ENV} mode on port ${port}`.bgYellow.blue);
});