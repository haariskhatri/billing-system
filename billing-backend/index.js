const express = require('express');
const bodyparser = require('body-parser')
const path = require('path')
const product = require('./product/addproduct');
const mongoose = require('mongoose');
const cors = require('cors')
const counter = require('./product/counter');
const { log } = require('console');
const categorymodel = require('./product/categories');


const app = express();
const PORT = 4000;

app.use(bodyparser.urlencoded({ extended: false }))
app.use(cors({
    origin: "*"
}))

app.use(express.json());

app.post('/addproduct', async (req, res) => {
    const { productID, productName, productQty, productPrice, productCategory } = req.body;

    await product({
        productID: productID,
        productName: productName,
        productCategory: productCategory,
        productQty: productQty,
        productPrice: productPrice
    }).save();

    const incrementid = await counter.findOneAndUpdate(
        {},
        { $inc: { product_id: 1 } },
        { new: true, upsert: true }
    );



    res.json({ message: "Succesfully Added" });


})

app.get('/getproductid', async (req, res) => {
    try {
        const id = await counter.findOne(
            {}
        );

        return res.json({ id: id.product_id });
    } catch (error) {
        console.error('Error retrieving and updating product ID:', error);
    }
})

app.get('/getcategories', async (req, res) => {
    try {
        const categories = await categorymodel.find({})
        res.send({ categories: categories });
    }
    catch (error) {
        console.log(error);
    }
})



app.get('/getproduct/:barcode', async (req, res) => {
    const { barcode } = req.params;

    const productdetail = await product.findOne({ productBarcode: barcode });

    res.json(productdetail)

})


app.listen(PORT, async () => {
    console.log(`Running on ${PORT}`);
    await mongoose.connect('mongodb+srv://root:Haaris8785@cluster0.walzl.mongodb.net/test');
    console.log("Mongoose Connected");
})