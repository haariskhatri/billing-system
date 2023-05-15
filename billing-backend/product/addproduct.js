const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productBarcode: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    productQty: {
        type: Number,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    }

})

const productModel = mongoose.model('products', productSchema);

module.exports = productModel