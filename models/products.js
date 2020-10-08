const mongoose = require('mongoose'),
Schema = mongoose.Schema

var productSchema = new Schema({
	name: {type:String, required:true},
	price: {type:Number, required:true},
	color: {type:String, required:true}
})

module.exports = mongoose.model('Products', productSchema)