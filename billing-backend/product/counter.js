const mongoose = require('mongoose');
const { schema } = require('./addproduct');

const counterschema = new mongoose.Schema({
    product_id: {
        type: Number,
        required: true
    }
})

const countermodel = mongoose.model('counters', counterschema);


module.exports = countermodel;