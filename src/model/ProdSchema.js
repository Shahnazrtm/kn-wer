const mongoose = require("mongoose")

const prodSchema = mongoose.Schema({
	name: String,
	price: String,
    image:String
})

module.exports = mongoose.model("Product", prodSchema)