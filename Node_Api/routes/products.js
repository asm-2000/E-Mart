const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Product = require("../models/productModel");

router.get("/", (req, res, next) => {});
router.post("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });
  product
    .save()
    .then((result) => res.status(201).json(result))
    .catch((err) => req.status(500).json(err));
});

module.exports = router;
