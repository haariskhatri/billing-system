const mongoose = require('mongoose');
const { schema } = require('./addproduct');

const categoryschema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    }
})

const categorymodel = mongoose.model('categories', categoryschema);


module.exports = categorymodel;