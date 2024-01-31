const express = require("express")
const Order = require("../models/orderModel")
const router = express.Router()


router.get('/orderID',(req,res)=>{
    const orderId = req.params['orderId'];
})

module.exports = router;