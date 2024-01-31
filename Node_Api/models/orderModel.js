const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userId: String,
    productList: Array
})

module.exports = mongoose.Model("Order", OrderSchema);