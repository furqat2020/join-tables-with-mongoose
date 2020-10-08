const Product = require('../models/products')
const Order = require('../models/orders')

module.exports = {

	show: (req, res) => {
		Product.find({})
		.select('name price color')
		.then(msg => {res.status(200).json(msg)})
		.catch(err => {res.status(500).json({error:err})})
	},

	adding: (req, res) => {
		var product = new Product()
		product.name = req.body.name
		product.price = req.body.price
		product.color = req.body.color

		product.save()
		.then(msg => {res.status(200).json(msg)})
		.catch(err => {res.status(500).json({error:err})})
	},

	show2: (req, res) => {
		Order.find({})
		//.select('quantity _id')   // qaysi qator garakligini belgilash
		.populate('product')  // ikki modulni qo'shish
		.then(msg => {res.status(200).json(msg)})
		.catch(err => {res.status(500).json({error:err})})
	},

	adding2: (req, res) => {
		var order = new Order()
		order.quantity = req.body.quantity,
		order.product = req.body.productId

		order.save()
		.then(msg => {res.status(200).json(msg)})
		.catch(err => {res.status(500).json({error:err})})
	}
}