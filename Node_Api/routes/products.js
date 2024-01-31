const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Product = require("../models/productModel");

router.get("/", (req, res, next) => {
  Product.find().limit(15)
    .exec()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/:product_id", (req,res,next)=>{
  const product_id = req.params['product_id']
  Product.find({_id:product_id}).exec().then((data)=>{
    res.status(200).json(data);
  }).catch((err)=>res.status(500).json(err));
})

router.post("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    product_name: req.body.name,
    product_description: req.body.description,
    actual_price: req.body.price,
  });
  product
    .save()
    .then((result) => res.status(201).json(result))
    .catch((err) => req.status(500).json(err));
});

module.exports = router;
