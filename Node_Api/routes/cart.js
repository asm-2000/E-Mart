const express = require('express');
const mongoose = require('mongoose');
const Cart = require('../models/cartModel');
const User = require('../models/userModel');

const router = express.Router();


router.post('/',(req,res,next)=>{
    const cart = new Cart(
        {

        }
    )
});
router.get('/',(req,res,next)=>{});

module.exports = router;