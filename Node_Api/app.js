const express = require('express');
const bodyParser = require("body-parser");
const morgan = require('morgan');
const cors = require('cors');
const userRoute = require('./routes/users');

app = express();
app.use(cors());
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/users', userRoute);

app.use((req,res,next)=>{
    const error = new Error("Cannot find the requested page");
    error.status = 404;
    next(error);
});

app.use((error,req,res,next)=>{
    const status = error.status;
    res.status(status).json({
        message: error.message
    });
})

module.exports = app;

