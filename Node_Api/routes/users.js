const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: 'get request received'
    })
});

router.post('/signup',(req,res,next)=>{
    const userData = req.body;
    res.status(201).json(userData);
});

module.exports = router;