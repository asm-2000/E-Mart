const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/userModel");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "get request received",
  });
});

router.post("/login", (req, res, next) => {
  const usremail = req.body.email;
  const usrpassword = req.body.password;
  User.find({ "email": usremail, "password": usrpassword })
    .exec()
    .then(res.status(201).json(data))
    .catch((err) => res.status(201).json(err));
});

router.post("/signup", (req, res, next) => {
  const user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    number: req.body.number,
    dob: req.body.dob,
  });
  user
    .save()
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(201).json(err));
});

module.exports = router;
