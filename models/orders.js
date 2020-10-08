const mongoose = require('mongoose'),
Schema = mongoose.Schema

var orderSchema = new Schema({
    product: {type:Schema.Types.ObjectId, ref: 'Products', required:true},
    quantity: {type:Number, default:1}
})

module.exports = mongoose.model('Orders', orderSchema)