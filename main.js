const express = require('express'),
mongoose = require('mongoose'),
app = express(),
bodyParser = require('body-parser'),
productController = require('./controllers/productController')

mongoose.connect("mongodb://localhost/dokon", {useNewUrlParser:true, useUnifiedTopology:true})
mongoose.Promise = global.Promise

app.set('port', process.env.PORT || 5000)

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/show', productController.show)
app.get('/show2', productController.show2)
app.post('/adding', productController.adding)
app.post('/adding2', productController.adding2)

app.listen(app.get('port'), () => {console.log(app.get('port'))})