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
  User.find({ email: usremail, password: usrpassword })
    .exec()
    .then(res.status(201).json(data))
    .catch((err) => res.status(201).json(err));
});

router.post("/signup", (req, res, next) => {
  const emailchk = req.body.email;
  User.find({ email: emailchk })
    .exec()
    .then((data) => {
      if (data.length === 0) {
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
          .then(() => res.status(201).json({ result: true }))
          .catch((err) => res.status(500).json(err));
      } else {
        res.status(204).json({ result: false });
      }
    });
});

module.exports = router;
